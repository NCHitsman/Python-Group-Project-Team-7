import React from 'react'
import { useHistory } from "react-router-dom"
import './notFound.css'

const NotFound = () => {

    const history = useHistory();

    const backToHome = () => {
        history.push('/')
    }

    return (
        <div className="container">
            <div className="left-side not-found">
            </div>
        <div id="not-found-message" className="right-side">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>There doesn't appear to be anything here.</p>
            <button onClick={backToHome}>Back to Home</button>
        </div>
      </div>
    )
}

export default NotFound;
