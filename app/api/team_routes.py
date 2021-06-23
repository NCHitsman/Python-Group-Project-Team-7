from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, Event, UserShare
from app import db

team_routes = Blueprint('teams', __name__)


@team_routes.route('/<int:stockId>')
@login_required
def stock(stockId):
    stocks = Team.query.get(stockId)
    return stocks.to_dict()

@team_routes.route('/articles')
@login_required
def articles():
    articles = Event.query.all()
    return {"articles": [article.to_dict() for article in articles]}

@team_routes.route('/')
@login_required
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}

@team_routes.route('/userShares/<int:userId>/<int:stockId>')
@login_required
def userShare(userId, stockId):
    sserShare = UserShare.query.filter(UserShare.user_id == userId).filter(UserShare.team_id == stockId).one()
    return sserShare.to_dict()
