from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team
from app import db

team_routes = Blueprint('teams', __name__)


@team_routes.route('/')
@login_required
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}
