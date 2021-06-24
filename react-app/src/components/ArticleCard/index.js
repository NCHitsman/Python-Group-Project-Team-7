import React from 'react'
import { useSelector } from 'react-redux'
import "./articlecard.css"

const ArticleDataCard = ({articleData}) => {

    const stocks = useSelector((state) => state.stocks.allStocks)

    const winner = stocks[articleData.winner_id]

    const loser = stocks[articleData.loser_id]

    return (
        <div className='ArticleCard__cont'>
            <div className='ArticleCard__title'>
            {`${winner?.name} beat ${loser?.name}`}
            </div>
            <div className='ArticleCard__score'>{articleData?.winner_score} to {articleData?.loser_score}</div>
            <div className='ArticleCard__date'>{String(articleData?.date.slice(0, 16))}</div>
        </div>
    )
}


export default ArticleDataCard
