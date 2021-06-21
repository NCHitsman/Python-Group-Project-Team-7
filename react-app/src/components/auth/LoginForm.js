import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import "./forms.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="left-side login">
      </div>
      <div className="right-side">
      <form onSubmit={onLogin}>
        <div id="error-list">
          {errors.map((error) => (
            <div>{error}</div>
         ))}
        </div>
        <div className="greeting">
          <h1>Sign in</h1>
          <p>Don't have a Robinhoop account? <a href="/join">Join Now</a></p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            />
        </div>
        <div>
         <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
           onChange={updatePassword}
           />
       </div>
         <button type="submit">Login</button>
     </form>
    </div>
    </div>
  );
};

export default LoginForm;
