import React from 'react'

const TeamStockCard = ({teamStockData}) => {


    return (
        <div className='TeamStockCard__cont'>
            <div className='TeamStockCard__name'>{teamStockData.name}</div>
            <div className='TeamStockCard__short_name'>{teamStockData.short_name}</div>
            <div className='TeamStockCard__conference'>{teamStockData.conference}</div>
            <div className='TeamStockCard__price'>{teamStockData.price}</div>
        </div>
    )
}

export default TeamStockCard
