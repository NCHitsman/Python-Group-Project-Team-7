import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";

import graph from "../../images/graph.png";
import "./home.css"

const LoggedOutHome = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const onDemoLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login("demo@aa.io", "password"));
        if (data.errors) {
          setErrors(data.errors);
        }
      }

    return (
        <div className="content">
          <div className='parent__cont'>
            <div className='signup__info__parent__cont'>
                <div className='signup__info__flexcont'>
                    <div className='signup__info__text__cont'>
                        <h1 className='signup__info__title__text'>Robinhoop Investing</h1>
                        <p className='signup__info__body__text'>Robinhoop is a simulated clone of the Robinhood Stock Trading app, but focused on Basketball. With Robinhoop, users can invest in their favorite basketball teams (or the ones that are actually winning games). Robinhoop users buy, sell, and keep tabs on NBA basketball teams to see which ones they want to buy stock in, or sell their stock in.</p>
                        <a href="/join"><button>Join the Game</button></a>
                        <form class="demo-link" onSubmit={onDemoLogin}>
                            <button type="submit"><ion-icon name="person-circle-outline"></ion-icon> Play as Demo User</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='solo__info__parent__cont'>
                <div className='solo__info__flexcont'>
                    <div className='solo__info__img__cont'>
                        <img src={graph} alt='graph' />
                    </div>
                    <div className='solo__info__text__cont'>
                        <h2 className='solo__info__title__text'>Lorum Ipsum</h2>
                        <p className='solo__info__body__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default LoggedOutHome
