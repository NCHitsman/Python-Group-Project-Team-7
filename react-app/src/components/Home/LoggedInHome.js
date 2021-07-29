import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TeamStockCard from '../TeamStockCard'
import ArticleDataCard from "../ArticleCard"
import { getUserList } from "../../store/watchlist"
import { getAllStocks, makeStockHistory, updateStock } from "../../store/stocks.js"
import { newArticle } from '../../store/articles.js'

const LoggedInHome = () => {

    const dispatch = useDispatch()
    const stocks = useSelector((state) => state.stocks.allStocks)
    const articles = useSelector((state) => state.articles)
    const user = useSelector(state => state.session.user)

    const [simulation, setSimulation] = useState(false)
    const [simId, setSimId] = useState()
    const [buttonText, setButtonText] = useState('Start')
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        dispatch(getUserList(user.id))
    }, [])

    const triggerSimulation = () => {
        if (simulation) {
          setSimulation(false)
          setButtonText('Start')
          setHidden(true)
         } else {
          setSimulation(true)
          setButtonText('Stop')
          setHidden(false)
        }


        if (simulation) {
          clearInterval(simId)
        } else {
          setSimId(setInterval(async () => {
            let teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

            while (teamIds.length) {

              let home = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

              let away = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

              home.push(Math.round(Math.random() * (125 - 75) + 75))
              away.push(Math.round(Math.random() * (125 - 75) + 75))
              while (home[1] === away[1]) {
                away[1] = (Math.round(Math.random() * (125 - 75) + 75))
              }
              let diff;

              if (home[1] > away[1]) {
                await dispatch(newArticle(home[0], away[0], home[1], away[1]))
                diff = home[1] - away[1]
                home.push(true)
              } else {
                await dispatch(newArticle(away[0], home[0], away[1], home[1]))
                diff = away[1] - home[1]
                home.push(true)
              }

              await dispatch(makeStockHistory(home[0]))
              await dispatch(makeStockHistory(away[0]))

              await dispatch(updateStock(home[0], diff, home[2]))
              await dispatch(updateStock(away[0], diff, away[2]))

            }
            dispatch(getAllStocks())
          }, 5000))
        }
      }

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
                    <button id='simulator'
                    onClick={(e) => triggerSimulation()}
                    >{buttonText} Simulation</button>
                    <div id='running-simulator' style={{ display: hidden ? "none" : "block"}}>Running</div>
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
