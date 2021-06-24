import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import EditUserForm from "./components/auth/EditUserForm";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Home from "./components/Home/index"
import Watchlist from "./components/Watchlist";
import UsersList from "./components/User/UsersList";
import User from "./components/User/index";
import StockPage from "./components/StockPage";
import TeamsList from "./components/TeamsList/index";
import { authenticate } from "./store/session";
import {newArticle} from './store/articles'
import {makeStockHistory, updateStock} from './store/stocks'
import { getAllStocks } from "./store/stocks.js"
import { getArticles } from './store/articles'

function App() {
  const dispatch = useDispatch();

  // const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  const currentUser = useSelector((state) => state.session.user)
  const list = useSelector((state) => state.watchlist.watching)

  const loop = () => {setInterval(async () => {
    let teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    while (teamIds.length) {

      let home = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

      let away = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

      home.push(Math.round(Math.random() * (125 - 75) + 75))
      away.push(Math.round(Math.random() * (125 - 75) + 75))
      let diff;

      if (home[1] > away[1]) {
        await dispatch(newArticle(home[0], away[0], home[1], away[1]))
        diff = home[1] - away[1]
        home.push(true)
      } else {
        await dispatch(newArticle(away[0], home[0], away[1], home[1]))
        diff = away[1] - home[1]
        home.push(true)
      }
      
      await dispatch(makeStockHistory(home[0]))
      await dispatch(makeStockHistory(away[0]))

      await dispatch(updateStock(home[0], diff, home[2]))
      await dispatch(updateStock(away[0], diff, away[2]))

    }
    dispatch(getAllStocks())
    dispatch(getArticles())
  }, 1000)}


  useEffect(() =>
    loop()
  , [dispatch])




  if (!loaded) {
    return null;
  }



  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/join" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/buy" exact={true}>
          <TeamsList />
        </Route>
        <Route path="/users" exact={true}>
          <UsersList />
        </Route>
        <Route path="/watchlist" exact={true}>
          <Watchlist list={list}/>
        </Route>
        <Route path="/users/edit-account" exact={true}>
          <EditUserForm />
        </Route>
        <Route path="/users/:userId" exact={true}>
          <User />
        </Route>
        <Route path="/stock/:stockId" exact={true}>
          <StockPage currentUser={currentUser} />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
