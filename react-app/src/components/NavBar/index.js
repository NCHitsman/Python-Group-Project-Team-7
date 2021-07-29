import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from "../Search/index";
import logo from '../../images/robinhoop-logo-light.png';
import {useHistory} from 'react-router-dom'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory()

  const demoTest = () => {
    return user.id === 1 ? false : true
  }

  return (
    <>
      <div className='spacer'>a</div>
      <nav>
        <div className="left">
          <div
          style={{cursor: 'pointer'}}
          onClick={() => history.push(`/`)}
          ><img src={logo} alt='logo' /></div>
          {!user ?
          <></> :
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
          </>
          }
          <SearchBar />
        </div>
        <div className="right">
          {!user ?
          <>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
            <NavLink to="/join" exact={true} id="sign-up" activeClassName="active">
            Join Now
          </NavLink>
          </>
            : <>
                {demoTest() && <NavLink to="/users/edit-account" exact={true} activeClassName="active">
                  Account
                </NavLink>}
                <LogoutButton />
            </>
          }
        </div>
      </nav>
    </>
  );
}

export default NavBar;
