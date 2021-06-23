from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='Demo',
        email='demo@aa.io',
        password='password'
    )

    demo1 = User(username='User', email='user@email.io', password='password')
    demo2 = User(username='None', email='none@noemail.io', password='password')

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
