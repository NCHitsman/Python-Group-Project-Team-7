from app.models import db, Team


def seed_team():

    team1 = Team(
        name='Boston Celtics',
        short_name='BOS',
        conference='Atlantic',
        shares='10000',
        price='50.00'
    )
    team2 = Team(
        name='Brooklyn Nets',
        short_name='BKN',
        conference='Atlantic',
        shares='10000',
        price='50.00'
    )
    team3 = Team(
        name='New York Knicks',
        short_name='NYK',
        conference='Atlantic',
        shares='10000',
        price='50.00'
    )
    team4 = Team(
        name='Philadelphia 76ers',
        short_name='PHI',
        conference='Atlantic',
        shares='10000',
        price='50.00'
    )
    team5 = Team(
        name='Toronto Raptors',
        short_name='TOR',
        conference='Atlantic',
        shares='10000',
        price='50.00'
    )

    team6 = Team(
        name='Chicago Bulls',
        short_name='CHI',
        conference='Central',
        shares='10000',
        price='50.00'
    )
    team7 = Team(
        name='Cleveland Cavaliers',
        short_name='CLE',
        conference='Central',
        shares='10000',
        price='50.00'
    )
    team8 = Team(
        name='Detroit Pistons',
        short_name='DET',
        conference='Central',
        shares='10000',
        price='50.00'
    )
    team9 = Team(
        name='Indiana Pacers',
        short_name='IND',
        conference='Central',
        shares='10000',
        price='50.00'
    )
    team10 = Team(
        name='Milwaukee Bucks',
        short_name='MIL',
        conference='Central',
        shares='10000',
        price='50.00'
    )

    team11 = Team(
        name='Atlanta Hawks',
        short_name='ATL',
        conference='Southeast',
        shares='10000',
        price='50.00'
    )
    team12 = Team(
        name='Charlotte Hornets',
        short_name='CHA',
        conference='Southeast',
        shares='10000',
        price='50.00'
    )
    team13 = Team(
        name='Miami Heat',
        short_name='MIA',
        conference='Southeast',
        shares='10000',
        price='50.00'
    )
    team14 = Team(
        name='Orlando Magic',
        short_name='ORL',
        conference='Southeast',
        shares='10000',
        price='50.00'
    )
    team15 = Team(
        name='Washington Wizards',
        short_name='WAS',
        conference='Southeast',
        shares='10000',
        price='50.00'
    )

    team16 = Team(
        name='Denver Nuggets',
        short_name='DEN',
        conference='Northwest',
        shares='10000',
        price='50.00'
    )
    team17 = Team(
        name='Minnesota Timberwolves',
        short_name='MIN',
        conference='Northwest',
        shares='10000',
        price='50.00'
    )
    team18 = Team(
        name='Oklahoma City Thunder',
        short_name='OKC',
        conference='Northwest',
        shares='10000',
        price='50.00'
    )
    team19 = Team(
        name='Portland Trail Blazers',
        short_name='POR',
        conference='Northwest',
        shares='10000',
        price='50.00'
    )
    team20 = Team(
        name='Utah Jazz',
        short_name='UTH',
        conference='Northwest',
        shares='10000',
        price='50.00'
    )

    team21 = Team(
        name='Golden State Warriors',
        short_name='GSW',
        conference='Pacific',
        shares='10000',
        price='50.00'
    )
    team22 = Team(
        name='LA Clippers',
        short_name='LAC',
        conference='Pacific',
        shares='10000',
        price='50.00'
    )
    team23 = Team(
        name='Los Angeles Lakers',
        short_name='LAL',
        conference='Pacific',
        shares='10000',
        price='50.00'
    )
    team24 = Team(
        name='Phoenix Suns',
        short_name='PHO',
        conference='Pacific',
        shares='10000',
        price='50.00'
    )
    team25 = Team(
        name='Sacramento Kings',
        short_name='SAC',
        conference='Pacific',
        shares='10000',
        price='50.00'
    )

    team26 = Team(
        name='Dallas Mavericks',
        short_name='DAL',
        conference='Southwest',
        shares='10000',
        price='50.00'
    )
    team27 = Team(
        name='Houston Rockets',
        short_name='HOU',
        conference='Southwest',
        shares='10000',
        price='50.00'
    )
    team28 = Team(
        name='Memphis Grizzlies',
        short_name='MEM',
        conference='Southwest',
        shares='10000',
        price='50.00'
    )
    team29 = Team(
        name='New Orleans Pelicans',
        short_name='NOH',
        conference='Southwest',
        shares='10000',
        price='50.00'
    )
    team30 = Team(
        name='San Antonio Spurs',
        short_name='SAN',
        conference='Southwest',
        shares='10000',
        price='50.00'
    )

    db.session.add(team1)
    db.session.add(team2)
    db.session.add(team3)
    db.session.add(team4)
    db.session.add(team5)
    db.session.add(team6)
    db.session.add(team7)
    db.session.add(team8)
    db.session.add(team9)
    db.session.add(team10)
    db.session.add(team11)
    db.session.add(team12)
    db.session.add(team13)
    db.session.add(team14)
    db.session.add(team15)
    db.session.add(team16)
    db.session.add(team17)
    db.session.add(team18)
    db.session.add(team19)
    db.session.add(team20)
    db.session.add(team21)
    db.session.add(team22)
    db.session.add(team23)
    db.session.add(team24)
    db.session.add(team25)
    db.session.add(team26)
    db.session.add(team27)
    db.session.add(team28)
    db.session.add(team29)
    db.session.add(team30)
    db.session.commit()


def undo_team(

):
    db.session.execute('TRUNCATE Teams RESTART IDENTITY CASCADE;')
    db.session.commit()
