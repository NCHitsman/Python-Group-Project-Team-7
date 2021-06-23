import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import placeholder from "../../images/robinhoop-background-ball.jpg";
import background from "../../images/robinhoop-background-dark.jpg"
import "./teams-list.css"

function TeamsList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/teams/");
            const responseData = await response.json();
            setTeams(responseData.teams);
        }
        fetchData();
    }, []);

    const teamComponents = teams.map((team) => {
        return (
            <div>
                <a key={team.id}>
                    <NavLink to={`/teams/${team.id}`}>{team.name} ({team.short_name})</NavLink>
                </a>
            </div>
        );
    });

    return (
        <div class="content buy-page">
            {/* <img src={background} className="buy-background"></img> */}
            <div class="team-header">
                <h1>Browse Teams</h1>
            </div>
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
                    <p>Value</p>
                </div>
                <div class="team-details">
                    <p>Details</p>
                </div>
            </div>
            {teams.map((team) => {
                return (
                    <div class="team-container">
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
                            <p>{team.price}</p>
                        </div>
                        <div class="team-details">
                            <a href={`/buy/${team.id}`}>More</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamsList;
