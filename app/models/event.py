from .db import db

class Event(db.Model):
    __tablename__ = 'Events'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    winner_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    winner_score = db.Column(db.Integer, nullable=False)
    loser_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    loser_score = db.Column(db.Integer, nullable=False)

    winner = db.relationship('Team', foreign_keys=[winner_id])
    loser = db.relationship('Team', foreign_keys=[loser_id])

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "winner_id": self.team_id,
            "winner_score": self.price,
            "loser_id": self.team_id,
            "loser_score": self.price,
        }    