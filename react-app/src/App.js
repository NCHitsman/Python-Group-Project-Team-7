import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import EditUserForm from "./components/auth/EditUserForm";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Home from "./components/Home/index"
import Watchlist from "./components/Watchlist";
import UsersList from "./components/User/UsersList";
import StockPage from "./components/StockPage";
import TeamsList from "./components/TeamsList/index";
import { authenticate } from "./store/session";

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
        {currentUser ? <Route path="/buy" exact={true}>
          <TeamsList />
        </Route> : <Redirect to="/login" />
        }
        {currentUser ? <Route path="/users" exact={true}>
          <UsersList />
        </Route> : <Redirect to="/login" />
        }
        {currentUser ? <Route path={`/watchlist/${currentUser.id}`} exact={true}>
          <Watchlist userId={currentUser.id}/>
        </Route> : <Redirect to="/login" />
        }
        {currentUser ? <Route path="/users/edit-account" exact={true}>
          <EditUserForm />
          </Route> : <Redirect to="/login" />
        }
        {/* <Route path="/users/:userId" exact={true}>
          <User />
        </Route> */}
        {currentUser ? <Route path="/stock/:stockId" exact={true}>
          <StockPage currentUser={currentUser} />
          </Route> : <Redirect to="/login" />
        }
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
