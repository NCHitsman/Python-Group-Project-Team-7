from app.models import db, Watchlist


# Adds a demo user, you can add other users here if you want
def seed_watchlist():

    demoList1 = Watchlist(
        id=1,
        team_id='1',
        user_id='1'
    )

    demoList2 = Watchlist(
        id=2,
        team_id='2',
        user_id='1'
    )

    demoList3 = Watchlist(
        id=3,
        team_id='30',
        user_id='1'
    )

    demoList4 = Watchlist(
        id=4,
        team_id='27',
        user_id='2'
    )

    db.session.add(demoList1)
    db.session.add(demoList2)
    db.session.add(demoList3)
    db.session.add(demoList4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_watchlist():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
