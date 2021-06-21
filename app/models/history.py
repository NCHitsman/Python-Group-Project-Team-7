from .db import db


class History(db.Model):
    __tablename__ = 'History'

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    date = db.Column(db.Date, nullable=False)

    team = db.relationship('Team')

    def to_dict(self):
        return {
            "id": self.id,
            "team_id": self.team_id,
            "price": self.price,
            "date": self.date,
        }