import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import TeamStockCard from '../TeamStockCard'
import { getUserList } from '../../store/watchlist'
import "./watchlist.css"


export const Watchlist = (list) => {

    const dispatch = useDispatch()

    useEffect(() => {
        (async() => {
          await dispatch(getUserList())
        })();
      }, [dispatch]);

    return (
        <div className="content">
            <div className="GreetUser">Watchlist</div>
            <div className="watchlist">
                {list.length > 0 ? list.map(stock => {
                    return (
                        <div key={stock.id}>
                            <TeamStockCard teamStockData={stock} />
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
