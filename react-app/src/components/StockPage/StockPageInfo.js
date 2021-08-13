import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import placeholder from "../../images/robinhoop-background-ball.jpg";
import "./stockpage.css"
import * as buyReducer from "../../store/buy"

const StockPageInfo = ({ stockId }) => {
    
    const [sellQuant, setSellQuant] = useState(0)
    const [shares, setShares] = useState(0)
    const user = useSelector(state => state.session.user)
    const userId = user.id


    const stock = useSelector((state) => state.stocks.allStocks[stockId])
    const dispatch = useDispatch() 
    const userShare = useSelector((state) => state.stocks.userShares)
    
    const buyShare = useSelector(state => state.buy.currentBuy)
    
    
        
    const buyHandler = () => {
        dispatch(buyReducer.buyShares({shares, stockId, userId}))
        window.alert(`Succesfully bought ${shares} shares from the ${stock.name}`)
        setShares(0)
    }

    const sellHandler = () => {
        //dispatch(buyReducer.sellShares({id}))
        window.alert(`Succesfully sold ${shares} shares from the ${stock.name}`)
        setShares(0)
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
                <div className='buy__sell__cont'>
                    <div className='buy__cont'>
                        <div className='buy__title'>Buy {stock?.name}</div>
                        <input
                            type='number'
                            className='buy__quant__input'
                            onChange={(e) => setShares(e.target.value)}
                            value={shares}
                            min="0"
                        >
                        </input>
                        <div className='buy__price__total'>{formatter.format(Number((shares * stock?.price).toFixed(2)))}</div>
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
                            onChange={(e) => setShares(e.target.value)}
                            value={shares}
                            min="0"
                        >
                        </input>
                        <div className='sell__price__total'>{formatter.format(Number((sellQuant * stock?.price).toFixed(2)))}</div>
                        <button
                            className='sell__button'
                            onClick={(e) => sellHandler()}
                        >Sell Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StockPageInfo
