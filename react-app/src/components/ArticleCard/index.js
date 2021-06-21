import React from 'react'

const articleDataCard = ({articleData}) => {

    return (
        <div className='ArticleCard__cont'>
            <div className='ArticleCard__title'>
            {`${articleData.winner.name} beat ${articleData.loser.name}`}
            </div>
            <div className='ArticleCard__score'>{articleData.winner_score} to {articleData.loser_score}</div>
            <div className='ArticleCard__date'>{String(articleData.date)}</div>
        </div>
    )
}


export default articleDataCard
