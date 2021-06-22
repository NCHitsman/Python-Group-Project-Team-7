from .db import db

class UserShare(db.Model):
    __tablename__ = 'usershare'

    id = db.Column(db.Integer, primary_key = True)
    shares = db.Column(db.Integer, nullable = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable = False)

    team = db.relationship('Team')
    user = db.relationship('User')

    def to_dict(self):
        return {
            "id": self.id,
            "shares": self.shares,
            "user_id": self.user_id,
            "team_id": self.team_id,
        }