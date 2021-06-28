from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, Event, UserShare, History
from app import db
from sqlalchemy import desc
import datetime

team_routes = Blueprint('teams', __name__)




@team_routes.route('/')
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}




@team_routes.route('/editPrice/<int:stockId>', methods=['PUT'])
def edit_teams(stockId):

    price = request.json['price']
    currentTeam = Team.query.get(stockId)

    if price < 0:
        currentTeam.price = 0
    else:
        currentTeam.price = price
    db.session.commit()

    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}




@team_routes.route('/userShares/<int:userId>/<int:stockId>')
def userShare(userId, stockId):

    userSharex = UserShare.query.filter(
        UserShare.user_id == userId
    ).filter(
        UserShare.team_id == stockId
    ).one_or_none()

    if userSharex is None:
        return jsonify('not found')

    return userSharex.to_dict()
