from app.models import db, Event

def seed_event():

    event1 = Event(date='2021-01-13', winner_id='18', winner_score='113', loser_id='6', loser_score='105')
    event2 = Event(date='2021-02-11', winner_id='16', winner_score='98', loser_id='12', loser_score='85')
    event3 = Event(date='2021-02-24', winner_id='6', winner_score='106', loser_id='9', loser_score='99')
    event4 = Event(date='2021-03-07', winner_id='15', winner_score='96', loser_id='30', loser_score='78')
    event5 = Event(date='2021-03-21', winner_id='24', winner_score='87', loser_id='12', loser_score='79')


    db.session.add(event1)
    db.session.add(event2)
    db.session.add(event3)
    db.session.add(event4)
    db.session.add(event5)

    db.session.commit()



def undo_event():
    db.session.execute('TRUNCATE Events RESTART IDENTITY CASCADE;')
    db.session.commit()