import React from "react"

const Home = () => {


    return (
        <div className='parent__cont'>
            <div className='signup__info__parent__cont'>
                <div className='signup__info__flexcont'>
                    <div className='signup__info__img__cont'>
                        <div className='signup__info__title__text'>Robinhoop</div>
                        <div className='signup__info__body__text'>Buy and sell Bitcoin, Ethereum, Dogecoin, and other cryptocurrencies 24/7 and commission-free with Robinhood Crypto</div>
                        <button>Sign Up</button>
                        <div className='signup__info__disclaimer__text'>Crypto Risk Disclosur</div>
                    </div>
                    <div className='signup__info__text__cont'>
                        <img className='home__image' src='placeholder.png' alt='placeholder'></img>
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
    )
}

export default Home
