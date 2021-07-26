import React from 'react'
import "./teamstockcard.css"
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWatchlist } from '../../store/watchlist'

const TeamStockCard = ({teamStockData, watchlist}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.session.user)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const removeItem = () => {
        dispatch(removeFromWatchlist(user.id, teamStockData.id))
    }

    return (
        <>
            <button className='TeamStockCard__cont'
            onClick={(e) => history.push(`/stock/${teamStockData.id}`)}
            >
                <div className='TeamStockCard__name'>{teamStockData.name}</div>
                <div className='TeamStockCard__short_name'>({teamStockData.short_name})</div>
                <div className='TeamStockCard__conference'>Conference: {teamStockData.conference}</div>
                <div className='TeamStockCard__price'>{formatter.format(teamStockData.price)}</div>
            </button>
            {watchlist &&
                <button className='remove-button'
                onClick={() => removeItem()}
                >
                <ion-icon name="trash-outline"></ion-icon> Remove
            </button>}
        </>
    )
}

export default TeamStockCard
