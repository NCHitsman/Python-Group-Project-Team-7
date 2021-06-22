import React, { useState } from 'react';
import placeholder from "../../images/robinhoop-background-ball.jpg";
import { useHistory } from "react-router-dom";

const SearchBar = ({ teamDatas }) => {

    const history = useHistory();

    const teamData = [
        {
            id: 1,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
        {
            id: 2,
            name: 'warriors',
            short_name: 'gsw',
            conference: 'West',
            price: 20
        },
        {
            id: 3,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
        {
            id: 4,
            name: 'warriors',
            short_name: 'gsw',
            conference: 'West',
            price: 20
        },
        {
            id: 5,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
        {
            id: 6,
            name: 'warriors',
            short_name: 'gsw',
            conference: 'West',
            price: 20
        },
        {
            id: 7,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
        {
            id: 8,
            name: 'warriors',
            short_name: 'gsw',
            conference: 'West',
            price: 20
        },
        {
            id: 9,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
        {
            id: 10,
            name: 'warriors',
            short_name: 'gsw',
            conference: 'West',
            price: 20
        }
    ]

    const filterTeams = (teams, query) => {
        if (!query) {
            return [];
        }

        return teams.filter((team) => {
            const teamName = team.name;
            const teamAbbr = team.short_name;
            return teamName.includes(query) || teamAbbr.includes(query);
        })
    }


    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || "");
    const filteredTeams = filterTeams(teamData, searchQuery);

    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };


    return (
        <div className="search-container">
            <form action="/" method="get" className="search-form" autoComplete="off" onSubmit={onSubmit}>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search teams</span>
                </label>
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search teams"
                    name="s"
                    className="search-input"
                    />
                <button type="submit" className="search-button visually-hidden">Search</button>
                <div className="search-results">
                    <ul className="search-list">
                        {filteredTeams.map((team) => (
                            <a key={team.id} href={`/teams/${team.id}`} className="search-result">
                                <img className="icon" src={placeholder} alt=""></img>
                                <p>{team.name} ({team.short_name})</p>
                            </a>
                        ))}
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
