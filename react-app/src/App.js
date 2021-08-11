import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import EditUserForm from "./components/auth/EditUserForm";
import NavBar from "./components/NavBar/index";
import Mobile from './components/NavBar/mobile'
import Footer from "./components/Footer/index";
import Home from "./components/Home/index"
import Watchlist from "./components/Watchlist";
import UsersList from "./components/User/UsersList";
import StockPage from "./components/StockPage";
import TeamsList from "./components/TeamsList/index";
import NotFound from "./components/404/notFound.js";
import { authenticate } from "./store/session";
import { getAllStocks } from "./store/stocks";
import { getUserList } from "./store/watchlist";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  let listener = window.innerWidth;

  useEffect(() => {
    (async () => {
      const userId = await dispatch(authenticate());
      await dispatch(getAllStocks())
      if (userId) await dispatch(getUserList(userId))
      setLoaded(true);
    })();

    listener <= 870 ? setIsMobile(true) : setIsMobile(false);

  }, [dispatch]);


  const checkForMobile = () => {
    if (listener <= 870) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const currentUser = useSelector((state) => state.session.user)

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* { isMobile ? <Mobile /> : <NavBar /> } */}
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
        {currentUser ? <Route path="/stock/:stockId" exact={true}>
          <StockPage currentUser={currentUser} />
          </Route> : <Redirect to="/login" />
        }
        <Route path="/404" exact={true}>
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
