from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, UserShare
from app import db

buy_routes = Blueprint("usershares", __name__)


@buy_routes.route('/<int:id>')
# @login_required

def load_shares(id):
    usershare = UserShare.query.get(id)
    return usershare.to_dict() 



@buy_routes.route('/',  methods=['post'])
# @login_required
def buy_team():

    data = request.json
    newshares = UserShare(user_id = data['user_id'],
                         shares = data['shares'],   
                         team_id = data['team_id'])
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