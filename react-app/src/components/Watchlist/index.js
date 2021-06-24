import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
// import TeamStockCard from '../TeamStockCard'
import { getUserList } from '../../store/watchlist'
import WatchlistTeamCard from '../WatchlistTeamCard/watchlistteamcard';
import "./watchlist.css"


export const Watchlist = (userId) => {

    const dispatch = useDispatch()
    const list = useSelector(state => state.watchlist.watching)

    useEffect(() => {
        (async() => {
          await dispatch(getUserList(userId))
        })();
      }, [dispatch, userId]);


    return (
        <div className="content">
            <div className="GreetUser">Watchlist</div>
            <div className="watchlist">
                {list ? list.map(item => {
                    return (
                        <div key={item.id}>
                            <WatchlistTeamCard teamId={item.team_id} />
                        </div>
                    )
                }):
                <div className="empty-list">
                    <h3>You're watchlist is empty.</h3>
                    <a href="/buy"><button>Add Stocks</button></a>
                </div>}
            </div>
        </div>
    )
}

export default Watchlist;
