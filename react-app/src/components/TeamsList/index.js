import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import placeholder from "../../images/robinhoop-background-ball.jpg";
import "./teams-list.css"

function TeamsList() {
    const teams = useSelector((state) => state.stocks.allStocks)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div class="content buy-page">
            <div className="GreetUser BrowseTeamHeader">Browse Teams</div>
            <div class="team-container">
                <div class="team-icon">
                    <p>Team</p>
                </div>
                <div class="team-name">
                    <p></p>
                </div>
                <div class="team-abbr">
                    <p></p>
                </div>
                <div class="team-conf">
                    <p>Conference</p>
                </div>
                <div class="team-shares">
                    <p>Shares</p>
                </div>
                <div class="team-price">
                    <p>Share Value</p>
                </div>
                <div class="team-details team-details-header">
                    <p>Page</p>
                </div>
            </div>
            {Object.values(teams).map((team) => {
                return (
                    <div key={team.id} class="team-container">
                        <div class="team-icon">
                            <img src={placeholder} alt=""></img>
                        </div>
                        <div class="team-name">
                            <p>{team.name}</p>
                        </div>
                        <div class="team-abbr">
                            <p>{team.short_name}</p>
                        </div>
                        <div class="team-conf">
                            <p>{team.conference}</p>
                        </div>
                        <div class="team-shares">
                            <p>{team.shares}</p>
                        </div>
                        <div class="team-price">
                            <p>{formatter.format(team.price)}</p>
                        </div>
                        <div class="team-details">
                            <a href={`/stock/${team.id}`}>Details</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamsList;
