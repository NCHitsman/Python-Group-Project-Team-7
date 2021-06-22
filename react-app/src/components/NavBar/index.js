import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from "../Search/index";
import logo from '../../images/robinhoop-logo-light.png';

const NavBar = () => {

  const isLoggedin = useSelector(state => state.session.user);

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
