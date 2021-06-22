from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_login import current_user
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user and user.id != current_user.id:
        raise ValidationError("User is already registered.")


def password_matches(form, field):
    print("Checking if password matches")
    password = form.data["password"]
    repeat_password = form.data["repeat_password"]
    if password != repeat_password:
        raise ValidationError("Passwords do not match.")


class EditUserForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    repeat_password = StringField("repeat_password", validators=[
        DataRequired(), password_matches
    ])
