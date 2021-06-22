from .db import db


class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    

    team = db.relationship('Team')
    user = db.relationship('User')

    def to_dict(self):
        return {
            "id": self.id,
            "team_id": self.team_id,
            "user_id": self.user_id,
        }