from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, Watchlist
from app import db

watchlist_routes = Blueprint("watchlists", __name__)

@watchlist_routes.route('/<int:id>')
@login_required
def get_watchlist(id):
    list = Watchlist.query.filter(Watchlist.user_id == id).first()
    return jsonify(list.to_dict())

@watchlist_routes.route('/add', methods=['post'])
@login_required
def new_watchlist():

    team = Watchlist(**request.json)
    db.session.add(team)
    db.session.commit()
    return team.to_dict()


@watchlist_routes.route('/delete/<int:id>', methods=['delete'])
@login_required
def delete_watchlist(id):
    watchlist = Watchlist.query.get(id)
    db.session.delete(watchlist)
    db.session.commit()
    return watchlist.to_dict()
