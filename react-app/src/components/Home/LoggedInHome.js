import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TeamStockCard from '../TeamStockCard'
import ArticleDataCard from "../ArticleCard"
import { getUserList } from "../../store/watchlist"

const LoggedInHome = () => {

    const dispatch = useDispatch()
    const stocks = useSelector((state) => state.stocks.allStocks)
    const articles = useSelector((state) => state.articles)
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getUserList(user.id))
    }, [])

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
                <div id="simulation-text" className="message">Press Start Simulation<br/>
                    (It may take a few seconds.)
                </div>
                }
            </div>
        </>
    )
}

export default LoggedInHome
