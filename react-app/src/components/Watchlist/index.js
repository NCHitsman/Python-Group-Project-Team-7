import React from "react";
import { useSelector } from "react-redux"

import TeamStockCard from "../TeamStockCard";
import "./watchlist.css"


export const Watchlist = () => {




    const list = useSelector(state => state.watchlist)
    const allStocks = useSelector(state => state.stocks.allStocks)
    let stocks = Object.values(list).map((watchListItem) => {
        return allStocks[watchListItem.team_id]
    })

    return (
        <div className="content">
            <div className="GreetUser">Watchlist</div>
            <div className="watchlist">
                {list ? stocks?.map(stock => {
                    return (
                        <div key={stock.id}>
                            <TeamStockCard teamStockData={stock} watchlist={true}/>
                        </div>
                    )
                }):
                <div className="empty-list">
                    <h3>Your watchlist is empty.</h3>
                    <a href="/buy"><button>Add Stocks</button></a>
                </div>}
            </div>
        </div>
    )
}

export default Watchlist;
