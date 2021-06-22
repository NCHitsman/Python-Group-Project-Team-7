import React from "react"
import { useSelector } from "react-redux"
import TeamStockCard from '../TeamStockCard'
import ArticleCard from "../ArticleCard"

const LoggedInHome = () => {

    const user = useSelector(state => state.session.user)

    let teamStockList = [
        {
            id: 1,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
        {
            id: 2,
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
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
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
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
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
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
            name: 'lakers',
            short_name: 'lak',
            conference: 'West',
            price: 15
        },
    ] // example of return value from dispatch eventually

    let articles = [
        {
            id: 1,
            winner: {
                id: 1,
                name: 'lakers'
            },
            winner_score: 10,
            loser: {
                id: 1,
                name: 'suns'
            },
            loser_score: 5,
            date: new Date()
        },
        {
            id: 2,
            winner: {
                id: 2,
                name: 'lakers'
            },
            winner_score: 10,
            loser: {
                id: 1,
                name: 'suns'
            },
            loser_score: 5,
            date: new Date()
        }
    ] // example of return value from dispatch eventually

    return (
        <div className="content">
            <div className="GreetUser">{user.username}'s Portfolio</div>
            <div className='TeamStockCard__carosel'>
                {teamStockList.map(stock => {
                    return (
                        <div key={stock.id}>
                            <TeamStockCard teamStockData={stock} />
                        </div>
                    )
                })}
            </div>
            <div className='Article__cont'>
                {articles.map(article => {
                    return (
                        <div key={article.id}>
                            <ArticleCard articleData={article} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LoggedInHome
