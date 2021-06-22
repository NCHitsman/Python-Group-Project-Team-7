import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Home from "./components/Home/index"
import UsersList from "./components/User/UsersList";
import User from "./components/User/index";
import { authenticate } from "./store/session";

function App() {
  const dispatch = useDispatch();

  // const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

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
        <Route path="/users" exact={true}>
          <UsersList/>
        </Route>
        <Route path="/users/:userId" exact={true}>
          <User />
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
