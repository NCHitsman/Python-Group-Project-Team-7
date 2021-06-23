import React from 'react'
import "./teamstockcard.css"
import {useHistory} from 'react-router-dom'

const TeamStockCard = ({teamStockData}) => {
    const history = useHistory()

    return (
        <button className='TeamStockCard__cont'
        onClick={(e) => history.push(`/stock/${teamStockData.id}`)}
        >
            <div className='TeamStockCard__name'>{teamStockData.name}</div>
            <div className='TeamStockCard__short_name'>({teamStockData.short_name})</div>
            <div className='TeamStockCard__conference'>Conference: {teamStockData.conference}</div>
            <div className='TeamStockCard__price'>${teamStockData.price}</div>
        </button>
    )
}

export default TeamStockCard
