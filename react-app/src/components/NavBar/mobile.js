import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from "../Search/index";
import logo from '../../images/robinhoop-logo-light.png';
import {useHistory} from 'react-router-dom'

const Mobile = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const demoTest = () => {
    return user.id === 1 ? false : true
  }

  const toggleMobile = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div id="mobile">
      <div className='spacer'></div>
      <nav onClick={toggleMobile}>
        <div className="left">
          <div
          style={{cursor: 'pointer'}}
          onClick={() => history.push(`/`)}
          ><img src={logo} alt='logo' />
          </div>
        </div>
        <div className="right">
          {isOpen ? <>
          {!user ?
          <>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/join" exact={true} id="sign-up" activeClassName="active">
          Join Now
        </NavLink>
        </> :
          <>
            <NavLink to="/" exact={true} activeClassName="active">
              Portfolio
            </NavLink>
            <NavLink to="/buy" exact={true} activeClassName="active">
              Buy
            </NavLink>
            <NavLink to={`/watchlist/${user.id}`} exact={true} activeClassName="active">
              Watchlist
            </NavLink>
          {demoTest() && <NavLink to="/users/edit-account" exact={true} activeClassName="active">
            Account
          </NavLink>}
          <LogoutButton />
         </>}
          </> :
          <><ion-icon name="menu-outline"></ion-icon></>}
        </div>
      </nav>
    </div>
  );
}

export default Mobile;
