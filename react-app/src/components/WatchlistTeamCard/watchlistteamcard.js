import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import "../TeamStockCard/teamstockcard.css"
import "./watchlistteamcard.css"
import {useHistory} from 'react-router-dom'

const WatchlistTeamCard = ({teamId}) => {
    const history = useHistory()

    let team = useSelector(state => state.stocks.allStocks[`${teamId}`])

    return (
        <button className='TeamStockCard__cont'
        onClick={(e) => history.push(`/stock/${team.id}`)}
        >
            <div className='TeamStockCard__name'>{team.name}</div>
            <div className='TeamStockCard__short_name'>({team.short_name})</div>
            <div className='TeamStockCard__conference'>Conference: {team.conference}</div>
            <div className='TeamStockCard__price'>${team.price}</div>
        </button>
    )
}

export default WatchlistTeamCard
