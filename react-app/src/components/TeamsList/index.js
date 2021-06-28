import React from "react";
import { useSelector } from "react-redux";
import placeholder from "../../images/robinhoop-background-ball.jpg";
import "./teams-list.css"

function TeamsList() {
    const teams = useSelector((state) => state.stocks.allStocks)

    console.log(teams)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="content buy-page">
            <div className="GreetUser BrowseTeamHeader">Browse Teams</div>
            <div className="team-container head">
                <div className="team-icon">
                    <p>Team</p>
                </div>
                <div className="team-name">
                    <p></p>
                </div>
                <div className="team-abbr">
                    <p></p>
                </div>
                <div className="team-conf">
                    <p>Conference</p>
                </div>
                <div className="team-shares">
                    <p>Shares</p>
                </div>
                <div className="team-price">
                    <p>Share Value</p>
                </div>
                <div className="team-details team-details-header">
                    <p>Page</p>
                </div>
            </div>
            {Object.values(teams)?.map((team) => {
                return (
                    <div key={team.id} className="team-container">
                        <div className="team-icon">
                            <img src={placeholder} alt=""></img>
                        </div>
                        <div className="team-name">
                            <p>{team.name}</p>
                        </div>
                        <div className="team-abbr">
                            <p>{team.short_name}</p>
                        </div>
                        <div className="team-conf">
                            <p>{team.conference}</p>
                        </div>
                        <div className="team-shares">
                            <p>{new Intl.NumberFormat().format(team.shares)}</p>
                        </div>
                        <div className="team-price">
                            <p>{formatter.format(team.price)}</p>
                        </div>
                        <div className="team-details">
                            <a href={`/stock/${team.id}`}>Details</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamsList;
