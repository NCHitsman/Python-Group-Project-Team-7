import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
import { edit } from '../../store/session';
import "./forms.css";

const EditUserForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onEdit = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            await dispatch(edit(username, email, password, repeatPassword));
        }
    }

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

    if (!user) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container">
            <form onSubmit={onEdit} method="POST">
                <div>
                    <label>User Name</label>
                    <input
                        type="text"
                        name="username"
                        placeholder={user["username"]}
                        onChange={updateUsername}
                        value={username}
                    ></input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder={user["email"]}
                        onChange={updateEmail}
                        value={email}
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
                    ></input>
                </div>
                <button type="submit">Edit Your Information</button>
            </form>
        </div>
    );
};

export default EditUserForm
