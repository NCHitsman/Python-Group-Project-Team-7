from flask import Blueprint, session
from flask_login import login_required
from app.models import User
from app.models import Watchlist
from app import db

watchlist_routes = Blueprint('watchlist', __name__)

@watchlist_routes.route('/')
@login_required
def watchlist():
    """
    Retrieves a logged in user's watchlist
    """
    user = User.query.get(current_user.id)
    list = Watchlist.query.filter(Watchlist.user_id == user.id).first()
    return list
