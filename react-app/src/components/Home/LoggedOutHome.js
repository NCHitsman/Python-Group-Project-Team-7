import React from "react"
// import image from "../../images/robinhoop-background-court-image.jpg"
import "./home.css"

const LoggedOutHome = () => {
    return (
        <div className="content">
          <div className='parent__cont'>
            <div className='signup__info__parent__cont'>
                <div className='signup__info__flexcont'>
                    <div className='signup__info__text__cont'>
                        <h1 className='signup__info__title__text'>Robinhoop Investing</h1>
                        <p className='signup__info__body__text'>Robinhoop is a simulated clone of the Robinhood Stock Trading app, but focused on Basketball. With Robinhoop, users can invest in their favorite basketball teams (or the ones that are actually winning games). Robinhoop users buy, sell, and keep tabs on NBA basketball teams to see which ones they want to buy stock in, or sell their stock in.</p>
                        <button>Get in the Game</button>
                        <a className='signup__info__disclaimer__text'><span class="material-icons">account_circle</span> Play as Demo User</a>
                    </div>
                    {/* <div className='signup__info__img__cont'>
                    </div> */}
                </div>
            </div>
            <div className='solo__info__parent__cont'>
                <div className='solo__info__flexcont'>
                    <div className='solo__info__img__cont'>
                        <img src="../../images/graph.png" />
                    </div>
                    <div className='solo__info__text__cont'>
                        <h3 className='solo__info__title__text'>Heads Up</h3>
                        <p className='solo__info__body__text'>Robinhoop is a simulated basketball stock market, not an actual stock market. No real currency is won, lost, or exchanged by using this app. It's mostly just for fun.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default LoggedOutHome
