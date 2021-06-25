import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getUserList } from '../../store/watchlist'
import WatchlistTeamCard from "../WatchlistTeamCard/watchlistteamcard";
import "./watchlist.css"


export const Watchlist = (userId) => {

    const dispatch = useDispatch()
    const list = useSelector(state => state.watchlist)

    useEffect(() => {
        (async() => {
          await dispatch(getUserList(userId))
        })();
      }, [dispatch, userId]);

    return (
        <div className="content">
            <div className="GreetUser">Watchlist</div>
            <div className="watchlist">
                {list['0'] ? Object.values(list).map(stock => {
                    return (
                        <div key={stock.id}>
                            <WatchlistTeamCard teamId={stock.team_id} />
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
