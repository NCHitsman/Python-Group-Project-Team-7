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
    userId = session.user.id
    print('>>>', user)
