import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import "./forms.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
        const newUser = await dispatch(signUp(username, email, password));
        if (newUser.length > 0) {
          setErrors(newUser)
        }
    } else {
      setErrors(['Passwords do not match.'])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="left-side join">
      </div>
      <div className="right-side">
        <form onSubmit={onSignUp}>
          <div className="greeting">
            <h1>Join Robinhoop</h1>
            <p>Already have a Robinhoop account? <a href="/login">Login</a></p>
          </div>
          <div id="errors">
            {errors ? errors.map(err => <p>{err}</p>) : <></>}
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={updateUsername}
              value={username}
              required={true}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
              required={true}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              placeholder="Repeat Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit">Join the Game</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
