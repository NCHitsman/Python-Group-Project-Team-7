from .db import db

class Team(db.Model):
    __tablename__ = 'Teams'


    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    short_name = db.Column(db.String, nullable = False, unique = True)
    conference = db.Column(db.String, nullable = False)
    shares = db.Column(db.Integer, nullable = False)
    price = db.Column(db.Float, nullable = False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "short_name": self.short_name,
            "conference": self.conference,
            "shares": self.shares,
            "price": self.price,
        }