import React from "react"
import { useSelector } from "react-redux"
import TeamStockCard from '../TeamStockCard'
import ArticleDataCard from "../ArticleCard"


const LoggedInHome = () => {

    const stocks = useSelector((state) => state.stocks.allStocks)
    const articles = useSelector((state) => state.articles)
    const user = useSelector(state => state.session.user)


    return (
        <>
            <div className="content logged-in-homepage">
                <div className="GreetUser">{user.username}'s Portfolio</div>
                <div className="section-headers">
                    <h2>Stocks</h2>
                </div>
                <div className='TeamStockCard__carosel'>
                    {Object.values(stocks).map(stock => {

                        return (
                            <TeamStockCard key={stock.name} teamStockData={stock} />
                        )
                    })}
                </div>
                <div className="section-headers">
                    <h3>Scores</h3>
                </div>
                {articles.length ?
                <div className='Article__cont'>
                    {Object.values(articles)?.map((article, i) => {
                        return (
                            <ArticleDataCard key={i} articleData={article} />
                        )
                    })}
                </div>
                :
                <div>Press Start Simulation</div>
                }
            </div>
        </>
    )
}

export default LoggedInHome
