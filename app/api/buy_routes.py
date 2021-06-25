from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, UserShare
from app import db

buy_routes = Blueprint("usershares", __name__)


@buy_routes.route('/<int:id>')
@login_required

def load_shares(id):
    usershares = UserShare.query.filter(UserShare.user_id == id).all()
    return jsonify([usershare.to_dict() for usershare in usershares])



@buy_routes.route('/<int:id>',  methods=['post'])
@login_required
def buy_team(id):

    usershare = UserShare(**request.json)
    db.session.add(usershare)
    db.session.commit()
    return usershare.to_dict()