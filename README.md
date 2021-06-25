# Robinhoop


Access the app [here](herokulinkhere).


Robinhoop is a simulated clone of the Robinhood Stock Trading appfocused on Basketball. With Robinhoop, users can invest in their favorite basketball teams (or the ones that are actually winning games :smirk:). Robinhoop users can buy, sell, and keep tabs on NBA basketball teams to see which ones they want to buy or sell their stock in.

Robinhoop is a simulated basketball stock market, not an actual stock market. No real currency is won, lost, or exchanged by using this app. It's mostly just for fun.


# Technologies Used


* Python 3.9.4
* Javascript ES6
* React.js
* Flask
* react-chartjs
* PostgreSQL
* Heroku


# Documentation


[Github Repository Wiki](https://github.com/NCHitsman/Python-Group-Project-Team-7/wiki)


# Features


* Sign up a new account
* Log in and log out
* Edit account login information
* Search for stocks by name, abbreviation, or conference name
* View stock prices and events on a portfolio
* View a graphic representation of a stock's details
* View a listing of all available teams and their related information
* Keep tabs on teams using a watchlist


# Screenshots


A user who is not logged in sees a page summarizing the app and what it is used for.
<img width="1440" alt="Splash" src="https://user-images.githubusercontent.com/78464371/123460956-48080900-d59d-11eb-9318-0c67d1a1eea0.png">


If a user does not have an existing account, they may create one.
<img width="1440" alt="Sign up" src="https://user-images.githubusercontent.com/78464371/123460973-4cccbd00-d59d-11eb-8c22-fe48d19d5370.png">


A user may log in to their account to access features of the app.
<img width="1440" alt="Log in" src="https://user-images.githubusercontent.com/78464371/123460979-4e968080-d59d-11eb-983a-42b22959469d.png">


Account information can be changed as needed by the user logged in.
<img width="1440" alt="Edit" src="https://user-images.githubusercontent.com/78464371/123460985-4fc7ad80-d59d-11eb-9ae5-69684d05b787.png">


The user is able to search for teams they are looking for using relevant queries.  
<img width="249" alt="Search" src="https://user-images.githubusercontent.com/78464371/123460989-50f8da80-d59d-11eb-8540-23443abb1d45.png">


On the portfolio page, the user can view different stock prices and the events that are affecting those prices.
<img width="1440" alt="Home" src="https://user-images.githubusercontent.com/78464371/123460991-51917100-d59d-11eb-8f0d-d2b95a3dd78f.png">


Each team has its own details page, where there is a graphic representation of the price trend. This is also where a user can buy and sell shares.
<img width="1440" alt="Details" src="https://user-images.githubusercontent.com/78464371/123461000-53f3cb00-d59d-11eb-9ab6-6989cefc4b0c.png">


The buy page displays the teams and more details about them.
<img width="1440" alt="Teams" src="https://user-images.githubusercontent.com/78464371/123460995-522a0780-d59d-11eb-8d18-111fa84d4f81.png">


A user can keep tabs on teams and stocks they are interested in using a watchlist.
<img width="1440" alt="Watchlist" src="https://user-images.githubusercontent.com/78464371/123460998-535b3480-d59d-11eb-8bf1-bcf1af9aaec1.png">


# Technical Details
Robinhoop uses a Python based Flask backend with a Javascript based React frontend. The API routes handle interaction with the PostgreSQL database.


The account related routes are protected with user authentication, requiring a user to be logged in to manipulate information related to that account.


The navigation bar contains a search bar, where a user can query for certain teams based on the team name, abbreviation, or conference name. The results are shown only when the search bar is active, so other elements on the page are not visually blocked.


```
...

const filterTeams = (teams, query) => {
    if (!query) {
        return [];
    }

    return teams.filter((team) => {
        const teamName = team.name.toLowerCase();
        const teamAbbr = team.short_name.toLowerCase();
        const teamConf = team.conference.toLowerCase();
        return teamName.includes(query.toLowerCase()) || teamAbbr.includes(query.toLowerCase()) || teamConf.includes(query.toLowerCase());
    })
}

...
```


Data fetched from the API routes are used to create teams, their related stocks, and events that manage changes in stock value. A visual representation of these changes is created using react-charjs. The line color depends on how the prices have changed from their previous value.


```
const GraphCanvas = ({ history }) => {

    const ref = useRef()

    const down = (context, value) => context.p0.parsed.y > context.p1.parsed.y ? value : undefined;

    const data = {
        labels: [],
        datasets: [
            {
                label: 'Price',
                data: [],
                fill: false,
                backgroundColor: 'black',
                borderColor: 'green',
                segment: {
                    borderColor: context => down(context, 'red'),
                }
            },
        ],
    };

    let lastHistory;
    for (let i = history?.length - 1; i >=0 ; i--) {
        if (history[i].price !== lastHistory) {
            data.labels.push(`${history[i].date.slice(8 , 11)}  ${history[i].date.slice(5, 7)}`)
            data.datasets[0].data.push(history[i].price)
            lastHistory = history[i].price
        }
    }
    
    ...
```


The simulation can be started and stopped with a button in the navigation bar, where events and changes in stock value happen in real-time. A loop is used to randomly generate the events and respective scores for the participating teams, and the scores are used in an algorithm to affect stock values.


```
...

let home = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

let away = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

home.push(Math.round(Math.random() * (125 - 75) + 75))
away.push(Math.round(Math.random() * (125 - 75) + 75))
let diff;

if (home[1] > away[1]) {
    await newArticle(home[0], away[0], home[1], away[1])
    diff = home[1] - away[1]
    home.push(true)
} else {
    await newArticle(away[0], home[0], away[1], home[1])
    diff = away[1] - home[1]
    home.push(true)
}

await makeStockHistory(home[1])
await makeStockHistory(away[1])

await updateStock(home[1], diff, home[2])
await updateStock(away[1], diff, away[2])

...
```


The `</buy>` page shows all the available teams and their relevant information. There is also a link to view each team in detail, where the user can buy and sell stocks for that team. Due to potential copyright issues, a placeholder image is used in place of the team logo.


On a team's detail page, a user can select the number of stocks they would like to buy or sell. The total price is reflected by the number of shares and the share value. Again, due to potential copyright issues, a placeholder image is used in place of the team logo.


A user can also add or remove teams on their watchlist, where they can view only the teams they are interested in. 


# Todo:


* Buy and sell stocks
* Add stocks on a watchlist
