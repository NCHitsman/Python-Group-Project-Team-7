import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import { removeFromWatchlist } from '../../store/watchlist';
import "../TeamStockCard/teamstockcard.css";
import "./watchlistteamcard.css";

const WatchlistTeamCard = ({teamId}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    let team = useSelector(state => state.stocks.allStocks[`${teamId}`])
    let userId = useSelector(state => state.session.user.id)



    return (
        <>
        <button className='TeamStockCard__cont'
        onClick={(e) => history.push(`/stock/${team.id}`)}
        >
            <div className='TeamStockCard__name'>{team.name}</div>
            <div className='TeamStockCard__short_name'>({team.short_name})</div>
            <div className='TeamStockCard__conference'>Conference: {team.conference}</div>
            <div className='TeamStockCard__price'>${team.price}</div>
        </button>

        </>
    )
}

export default WatchlistTeamCard
