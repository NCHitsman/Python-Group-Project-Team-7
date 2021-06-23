from flask import Blueprint, session
from app.models import User
from app.models import Watchlist
from app import db

watchlist_routes = Blueprint('watchlist', __name__)

@watchlist_routes.route('/')
def watchlist():
    """
    Retrieves a logged in user's watchlist
    """
    user = User.query.all()
    list = Watchlist.query.filter(Watchlist.user_id == user.id).first()
    print(list)
    return list
