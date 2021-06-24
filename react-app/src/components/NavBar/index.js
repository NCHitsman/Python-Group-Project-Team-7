import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from "../Search/index";
import logo from '../../images/robinhoop-logo-light.png';
import { getAllStocks, getStockHistory, makeStockHistory, updateStock } from "../../store/stocks.js"
import { getArticles, newArticle } from '../../store/articles.js'

const NavBar = () => {
  const dispatch = useDispatch()
  const [simulation, setSimulation] = useState(false)
  const [simId, setSimId] = useState()
  const [buttonText, setButtonText] = useState('Start')
  const [hidden, setHidden] = useState(true)
  const isLoggedin = useSelector(state => state.session.user);



  const triggerSimulation = () => {
    if (simulation) {
      setSimulation(false)
      setButtonText('Start')
      setHidden(true)
     } else {
      setSimulation(true)
      setButtonText('Stop')
      setHidden(false)
    }


    if (simulation) {
      clearInterval(simId)
    } else {
      setSimId(setInterval(async () => {
        let teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

        while (teamIds.length) {

          let home = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

          let away = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

          home.push(Math.round(Math.random() * (125 - 75) + 75))
          away.push(Math.round(Math.random() * (125 - 75) + 75))
          while (home[1] == away[1]) {
            away[1] = (Math.round(Math.random() * (125 - 75) + 75))
          }
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
      }, 5000))
    }
  }


  return (
    <nav>
      <div className="left">
        <a href="/"><img src={logo} alt='logo' /></a>
        {!isLoggedin ?
        <></> :
        <>
          <NavLink to="/" exact={true} activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/buy" exact={true} activeClassName="active">
            Buy
          </NavLink>
          <NavLink to="/watchlist" exact={true} activeClassName="active">
            Watchlist
          </NavLink>
        </>
        }
        <SearchBar />
        <button
        onClick={(e) => triggerSimulation()}
        >{buttonText} Simulation</button>
        <div style={{ display: hidden ? "none" : "block", color: 'red'}}>Running</div>
      </div>
      <div className="right">
        {!isLoggedin ?
        <>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/join" exact={true} id="sign-up" activeClassName="active">
           Join Now
         </NavLink>
        </>
          : <>
              <NavLink to="/users/edit-account" exact={true} activeClassName="active">
                Account
              </NavLink>
              <LogoutButton />
          </>
        }
      </div>
    </nav>
  );
}

export default NavBar;
