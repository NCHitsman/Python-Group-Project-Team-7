import React from "react"
import { useSelector } from "react-redux"
import TeamStockCard from '../TeamStockCard'
import ArticleDataCard from "../ArticleCard"


const LoggedInHome = () => {

    const stocks = useSelector((state) => state.stocks.allStocks)

    const articles = useSelector((state) => state.articles)

    const user = useSelector(state => state.session.user)

    return (
        <div className="content">
            <div className="GreetUser">{user.username}'s Portfolio</div>
            <div className="section-headers">
                <h2>Stocks</h2>
            </div>
            <div className='TeamStockCard__carosel'>
                {Object.values(stocks).map(stock => {
                    return (
                        <div key={stock.id}>
                            <TeamStockCard teamStockData={stock} />
                        </div>
                    )
                })}
            </div>
            <div className="section-headers">
                <h3>Scores</h3>
            </div>
            <div className='Article__cont'>
                {Object.values(articles).map(article => {
                    return (
                        <div key={article.id}>
                            <ArticleDataCard articleData={article} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LoggedInHome
