import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
// import "../TeamStockCard/"
import {useHistory} from 'react-router-dom'
import { getAStock } from '../../store/stocks';

const WatchlistTeamCard = ({teamId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);

    console.log('&&&&&&&&', teamId)
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
