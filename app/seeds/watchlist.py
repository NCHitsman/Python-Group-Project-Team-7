from app.models import db, Watchlist


# Adds a demo user, you can add other users here if you want
def seed_watchlist():

    demoList = Watchlist(
        id='1',
        team_id='1',
        user_id='1'
    )

    db.session.add(demoList)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_watchlist():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
