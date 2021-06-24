from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Team, Event, UserShare, History
from app import db
import datetime

team_routes = Blueprint('teams', __name__)


@team_routes.route('/<int:stockId>')
def stock(stockId):
    stocks = Team.query.get(stockId)
    return stocks.to_dict()


# @team_routes.route('/<int:id>')
# def team(id):
#     team = Team.query.get(id)
#     return team.to_dict()


@team_routes.route('/articles')
def articles():
    articles = Event.query.order_by(Event.id.desc()).limit(9).all()
    return {"articles": [article.to_dict() for article in articles]}



@team_routes.route('/articles/new',methods=['POST'])
def make_article():
    winner_id = request.json['winner_id']
    winner_score = request.json['winner_score']
    loser_id = request.json['loser_id']
    loser_score = request.json['loser_score']
    newDate = datetime.date.today()

    new_event = Event(winner_id=winner_id, winner_score=winner_score, loser_id=loser_id, loser_score=loser_score, date=newDate)


    db.session.add(new_event)
    db.session.commit()

    articles = Event.query.order_by(Event.id.desc()).limit(9).all()
    return {"articles": [article.to_dict() for article in articles]}



@team_routes.route('/')
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}




@team_routes.route('/editPrice/<int:stockId>',methods=['PUT'])
def edit_teams(stockId):

    price = request.json['price']
    currentTeam = Team.query.get(stockId)

    if price < 0:
        currentTeam.price = 0
    else:
        currentTeam.price = price
    db.session.commit()

    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}




@team_routes.route('/userShares/<int:userId>/<int:stockId>')
@login_required
def userShare(userId, stockId):
    sserShare = UserShare.query.filter(UserShare.user_id == userId).filter(UserShare.team_id == stockId).one()
    return sserShare.to_dict()

@team_routes.route('/history/<int:stockId>')
def history(stockId):
    historys = History.query.filter(History.team_id == stockId).order_by(History.date).limit(50).all()
    return {"history": [history.to_dict() for history in historys]}

@team_routes.route('/history/create',methods=['POST'])
def make_history():
    team_id = request.json['team_id']
    price = request.json['price']
    newDate = datetime.date.today()

    new_history = History(team_id=team_id, price=price, date=newDate)
    db.session.add(new_history)
    db.session.commit()

    history = History.query.filter(History.team_id == team_id).limit(1).one()
    return history.to_dict()
