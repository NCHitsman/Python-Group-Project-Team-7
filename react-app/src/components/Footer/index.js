import React from 'react';
import logo from '../../images/robinhoop-logo-light.png';

const Footer = () => {

    return (
        <footer>
            <div className="footer-top">
            <div className="footer-left">
                <a href="/"><img src={logo} alt="Robinhoop Investing Logo"/></a>
            </div>
            <div className="footer-middle">
                <h6>About Robinhoop</h6>
                <p>Robinhoop is a simulated basketball stock market, not an actual stock market. No real currency is won, lost, or exchanged by using this app. It's mostly just for fun.</p>
            </div>
            <div className="footer-right">
                <h6>Site by:</h6>
                <p>Andrew Musta <a href="https://github.com/enomilan"><ion-icon name="logo-github"></ion-icon></a><br/>
                    Nathan Mac <a href="https://github.com/nathan-mac"><ion-icon name="logo-github"></ion-icon></a> <a href="https://www.linkedin.com/in/nathan-m-68b60582/"><ion-icon name="logo-linkedin"></ion-icon></a><br/>
                    Noah Carmichael-Hitsman <a href="https://github.com/NCHitsman"><ion-icon name="logo-github"></ion-icon></a> <a href="https://www.linkedin.com/in/noah-carmichael-hitsman-b024a1203/"><ion-icon name="logo-linkedin"></ion-icon></a><br/>
                    Jacob Leonhardt <a href="https://github.com/jacobleonhardt"><ion-icon name="logo-github"></ion-icon></a> <a href="https://www.linkedin.com/in/jacob-leonhardt-b19067ba/"><ion-icon name="logo-linkedin"></ion-icon></a></p>
            </div>
            </div>
            <div className="bottom-bar">
                <hr/>
                <p>©2021 Robinhoop</p>
            </div>
        </footer>
    )
}

export default Footer
