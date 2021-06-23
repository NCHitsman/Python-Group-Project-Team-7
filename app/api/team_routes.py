from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, Event
from app import db

team_routes = Blueprint('teams', __name__)


@team_routes.route('/')
@login_required
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}

@team_routes.route('/articles')
@login_required
def articles():
    articles = Event.query.all()
    return {"articles": [article.to_dict() for article in articles]}
