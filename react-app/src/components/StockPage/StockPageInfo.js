import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToWatchlist, getUserList, removeFromWatchlist } from "../../store/watchlist";
import placeholder from "../../images/robinhoop-background-ball.jpg";
import "./stockpage.css"
import * as buyReducer from "../../store/buy"

const StockPageInfo = ({ stockId }) => {
    const dispatch = useDispatch()
    const [buyQuant, setBuyQuant] = useState(0)
    const [sellQuant, setSellQuant] = useState(0)
    const [shares, setShares] = useState(0)
    const [confirmation, setConfirmation] = useState('')

    const stock = useSelector((state) => state.stocks.allStocks[stockId])
    const user = useSelector((state) => state.session.user)
    const watchlist = useSelector((state) => state.watchlist)
    const userId = user.id
    const userShare = useSelector((state) => state.stocks.userShares)
    const buyShare = useSelector(state => state.buy.currentBuy)



    const buyHandler = () => {
        // setShares(buyQuant)
        dispatch(buyReducer.buyShares({shares, stockId, userId}))
        setConfirmation(`Succesfully bought ${buyQuant} share(s) from the ${stock.name}`)
        setShares(shares + buyQuant)
        setBuyQuant(0)
    }

    const sellHandler = () => {
        // setShares(sellQuant)
        dispatch(buyReducer.sellShares({shares, stockId, userId}))
        setConfirmation(`Succesfully sold ${sellQuant} share(s) from the ${stock.name}`)
        setShares(shares - sellQuant)
        setSellQuant(0)
    }

    const addWatch = async () => {
        await dispatch(addToWatchlist(user.id, stockId))
        await dispatch(getUserList(user.id))
    }

    const removeItem = () => {
        dispatch(removeFromWatchlist(user.id, stockId))
    }

    const checkWatch = () => {
        let test = true
        Object.values(watchlist).forEach(a => {
            if (a.team_id === stock.id) {
                test = false
            }
        })
        return user && test ? true : false
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });


    return (
        <div className='parent__cont'>
            <div className='info__buy__sell__parent__cont'>
                <div className='info__cont'>
                    <div className='info__stock__name'>{stock?.name}</div>
                    <div className='info__stock__conference'>{stock?.conference}</div>
                    <div className='info__stock__short_name'>{stock?.short_name}</div>
                    <div className='info__stock__shares'>{new Intl.NumberFormat().format(stock?.shares)} shares</div>
                    <div className='info__stock__price'>{formatter.format(stock?.price)}</div>
                    <div className='info__stock__icon'>
                        <img src={placeholder}></img>
                    </div>
                </div>
                <div id="confirmation">
                    { confirmation.length ? <p>{confirmation}</p> : <></>}
                </div>
                <div className='buy__sell__cont'>
                    <div className='buy__cont'>
                        <div className='buy__title'>Buy {stock?.name}</div>
                        <input
                            type='number'
                            className='buy__quant__input'
                            onChange={(e) => {
                                setBuyQuant(e.target.value)
                                setShares(e.target.value)
                            }}
                            value={buyQuant}
                            min="0"
                        >
                        </input>
                        <div className='buy__price__total'>{formatter.format(Number((buyQuant * stock?.price).toFixed(2)))}</div>
                        <button
                            className='buy__button'
                            onClick={(e) => buyHandler(e.target.value)}
                        >Buy Now</button>
                    </div>

                    <div className='sell__cont'>
                        <div className='sell__title'>Sell {stock?.name}</div>
                        <input
                            type='number'
                            className='sell__quant__input'
                            onChange={(e) => {
                                setSellQuant(e.target.value)
                                setShares(e.target.value)
                            }}
                            value={sellQuant}
                            min="0"
                        >
                        </input>
                        <div className='sell__price__total'>{formatter.format(Number((sellQuant * stock?.price).toFixed(2)))}</div>
                        <button
                            className='sell__button'
                            onClick={(e) => sellHandler(e.target.value)}
                        >Sell Now</button>
                    </div>
                </div>
                {checkWatch() ? <button
                        onClick={() => addWatch()}
                    >Add to Watchlist</button>
                        :
                        <button
                            onClick={() => removeItem()}
                        >Remove From Watchlist</button>}
            </div>
        </div>
    )
}

export default StockPageInfo
