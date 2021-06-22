import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/robinhoop-logo-light.png';

const Footer = () => {

    return (
        <footer>
            <div className="footer-left">
                <a href="/"><img src={logo} /></a>
            </div>
            <div className="footer-middle">

            </div>
            <div className="footer-right">
                <h6>Site by:</h6>
                <p>Andrew Musta,<br/>
                    Noah Carmichael-Hitsman,<br/>
                    Nathan Mac,<br/>
                    Jacob Leonhardt</p>
                <p>©2021 Robinhoop</p>
            </div>
        </footer>
    )
}

export default Footer
