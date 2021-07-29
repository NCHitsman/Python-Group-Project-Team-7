import React, { useEffect, useState } from 'react';
import placeholder from "../../images/robinhoop-background-ball.jpg";
import { useHistory } from "react-router-dom";
import './search.css'

const SearchBar = () => {

    const history = useHistory();
    const [teams, setTeams] = useState([]);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/teams/");
            const responseData = await response.json();
            setTeams(responseData.teams);
        }
        fetchData();
    }, []);

    const filterTeams = (teams, query) => {
        if (!query) {
            return [];
        }

        return teams.filter((team) => {
            const teamName = team.name.toLowerCase();
            const teamAbbr = team.short_name.toLowerCase();
            const teamConf = team.conference.toLowerCase();
            return teamName.includes(query.toLowerCase()) || teamAbbr.includes(query.toLowerCase()) || teamConf.includes(query.toLowerCase());
        })
    }


    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || "");
    const filteredTeams = filterTeams(teams, searchQuery);

    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };


    return (
        <div className="search-container">
            {/* <form action="/" method="get" className="search-form" autoComplete="off" onSubmit={onSubmit}> */}
                {/* <label htmlFor="header-search"> */}
                    {/* <span className="visually-hidden">Search teams</span> */}
                {/* </label> */}
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search teams"
                    name="s"
                    className="search-input"
                    onClick={() => setHidden(false)}
                    />
                {/* <button type="submit" className="search-button visually-hidden">Search</button> */}
                <div className="search-results">
                    <ul className={hidden ? 'search-list hidden' : 'search-list'}>
                        {filteredTeams.map((team) => (
                            <li
                            onClick={async () => {
                                await history.push(`/stock/${team.id}`)
                                setHidden(true)
                                setSearchQuery('')
                                }}
                            key={team.id} className="search-result" id={team.id}>
                                <img className="icon" src={placeholder} alt=""></img>
                                <p>{team.name} ({team.short_name})</p>
                            </li>
                        ))}
                    </ul>
                </div>
            {/* </form> */}
        </div>
    )
}

export default SearchBar;
