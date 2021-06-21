import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import logo from '../images/robinhoop-logo-light.png';


const NavBar = () => {

  const isLoggedin = useSelector(state => state.session.user);

  return (
    <nav>
      <div className="left">
        <a href="/"><img src={logo} /></a>
        <NavLink to="/users" exact={true} activeClassName="active">
          Portfolio
        </NavLink>
      </div>
      <div className="right">
        {!isLoggedin ?
        <>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} id="sign-up" activeClassName="active">
           Sign Up
         </NavLink>
        </>
        : <LogoutButton /> }
      </div>
    </nav>
  );
}

export default NavBar;
