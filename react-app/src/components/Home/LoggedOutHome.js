import React from "react"
import image from "../../images/robinhoop-background-basketballhoop.jpg"
import "./home.css"

const LoggedOutHome = () => {
    return (
        <div className="content">
          <div className='parent__cont'>
            <div className='signup__info__parent__cont'>
                <div className='signup__info__flexcont'>
                    <div className='signup__info__text__cont'>
                        <div className='signup__info__title__text'>Robinhoop Investing</div>
                        <div className='signup__info__body__text'>Robinhoop is a simulated clone of the Robinhood Stock Trading app, but focused on Basketball. With Robinhoop, users can invest in their favorite basketball teams (or the ones that are actually winning games). Robinhoop users buy, sell, and keep tabs on NBA basketball teams to see which ones they want to buy stock in, or sell their stock in.</div>
                        <button>Sign Up</button>
                        <div className='signup__info__disclaimer__text'>Play as Demo User</div>
                    </div>
                    <div className='signup__info__img__cont'>
                        <img className='home__image' src={image} />
                    </div>
                </div>
            </div>
            <div className='solo__info__parent__cont'>
                <div className='solo__info__flexcont'>
                    <div className='solo__info__img__cont'>
                        <img className='home__image' src='placeholder.png' alt='placeholder'></img>
                    </div>
                    <div className='solo__info__text__cont'>
                        <div className='solo__info__title__text'>Trusted. Secure</div>
                        <div className='solo__info__body__text'>Manage your cryptos with confidence. Your coins and personal information are protected</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default LoggedOutHome
