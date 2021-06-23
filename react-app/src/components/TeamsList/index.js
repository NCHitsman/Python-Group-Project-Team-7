import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
        <>
            <h1>Teams:</h1>
            <ul>{teamComponents}</ul>
        </>
    )
}

export default TeamsList;
