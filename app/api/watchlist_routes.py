from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, Watchlist
from app import db

watchlist_routes = Blueprint("watchlists", __name__)


@watchlist_routes.route('/<int:id>')
@login_required
def get_watchlist(id):
    lists = Watchlist.query.filter(Watchlist.user_id == id).all()
    return jsonify([item.to_dict() for item in lists])


@watchlist_routes.route('/add/<int:userId>/<int:teamId>', methods=['POST'])
@login_required
def new_watchlist(userId, teamId):

    new_watch = Watchlist(
        team_id = teamId,
        user_id = userId
    )

    db.session.add(new_watch)
    db.session.commit()

    return new_watch.to_dict()


@watchlist_routes.route('/delete/<int:userId>/<int:teamId>', methods=['DELETE'])
@login_required
def delete_watchlist(userId, teamId):
    team = Watchlist.query.filter(Watchlist.team_id == teamId and Watchlist.user_id == userId).first()
    jsonify(team.to_dict())
    db.session.delete(team)
    db.session.commit()
    lists = Watchlist.query.filter(Watchlist.user_id == userId).all()
    return jsonify([item.to_dict() for item in lists])
