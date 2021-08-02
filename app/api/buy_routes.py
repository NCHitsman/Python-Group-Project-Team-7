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



@buy_routes.route('/',  methods=['post'])
@login_required
def buy_team():

    data = request.json
    newshares = UserShare(user = current_user,
                         shares = data['shares'],   
                         team_id = data['teamId'])
    db.session.add(newshares)
    db.session.commit()
    return newshares.to_dict()


@buy_routes.route('/<int:id>',  methods=['delete'])
@login_required
def sell_team(id):
    sell = UserShare.query.get(id)
    if sell.user_id != current_user.id:
        return {}
    db.session.delete(sell)
    db.session.commit()
    return {}    