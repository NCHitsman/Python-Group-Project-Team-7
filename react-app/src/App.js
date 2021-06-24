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

  // const loop = () => {}


  // useEffect(() =>
  //   loop()
  // , [dispatch, loop])




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
