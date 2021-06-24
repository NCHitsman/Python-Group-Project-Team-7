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

# Screenshots
![texthere](urlhere)

# Features

* Sign up a new account
* Log in and log out
* Edit account login information
* Search for stocks by name, abbreviation, or conference name
* View stock prices and events on a portfolio
* View a graphic representation of a stock's details
* View a listing of all available teams and their related information
* Add and sell stocks
* Add and delete stocks on a watchlist

# Technical Details
Robinhoop uses a Python based Flask backend with a Javascript based React frontend. The API routes handle interaction with the PostgreSQL database.

The account related routes are protected with authentication, requiring a user to be logged in to manipulate information related to that account.

The navigation bar contains a search bar, where a user can query for certain teams based on the team name, abbreviation, or conference name. The results are shown only when the search bar is active, so other elements on the page are not visually blocked.

Data fetched from the API routes are used to create teams, their related stocks, and events that manage changes in stock value. A visual representation of these changes are created using react-charjs.

`<code snippets here>`

The simulation can be started and stopped with a button in the navigation bar, where events and changes in stock value happen in real-time. A loop is used to randomly generate the events and respective scores for the participating teams, and the scores are used in an algorithm to affect stock values.

`<code snippets here>`

The `</buy>` page shows all the available teams and their relevant information. There is also a link to view each team in detail, where the user can buy and sell stocks for that team.

On a team's detail page, a user can select the number of stocks they would like to buy or sell. The total price is reflected by the number of shares and the share value.

A user can also add or remove teams on their watchlist, where they can view only the teams they are interested in. 
