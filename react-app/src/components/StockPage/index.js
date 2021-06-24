import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getAStock, getUserShares, getStockHistory } from '../../store/stocks'
import placeholder from "../../images/robinhoop-background-ball.jpg";
import "./stockpage.css"
import GraphCanvas from '../Graph'

const StockPage= ({currentUser}) => {
    const dispatch = useDispatch()
    const {stockId} = useParams()
    const [buyQuant, setBuyQuant] = useState('0')
    const [sellQuant, setSellQuant] = useState(0)

    useEffect(() => {
        dispatch(getAStock(stockId))
        dispatch(getStockHistory(stockId))
        dispatch(getUserShares(currentUser.id, stockId))
    }, [dispatch, currentUser.id, stockId])

    const stock = useSelector((state) => state.stocks.allStocks[stockId])

    const userShare = useSelector((state) => state.stocks.userShares)

    const history = useSelector((state) => state.stocks.history.history)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const buyHandler = () => {

    }

    const sellHandler = () => {

    }

    return (
        <div className="content">
            <div className="container">
                <div className='parent__cont'>
                    <div className='graph__cont'>
                        <GraphCanvas history={history}/>
                    </div>
                    <div className='info__buy__sell__parent__cont'>

                        <div className='info__cont'>
                            <div className='info__stock__name'>{stock?.name}</div>
                            <div className='info__stock__conference'>{stock?.conference}</div>
                            <div className='info__stock__short_name'>{stock?.short_name}</div>
                            <div className='info__stock__shares'>{new Intl.NumberFormat().format(stock?.shares)} shares</div>
                            <div className='info__stock__price'>{formatter.format(stock?.price)}</div>
                            <div className='info__stock__icon'>
                                <img src={placeholder} alt=""></img>
                            </div>
                        </div>
                        <div className='buy__sell__cont'>
                            <div className='buy__cont'>
                                <div className='buy__title'>Buy {stock?.name}</div>
                                <input
                                type='number'
                                className='buy__quant__input'
                                onChange={(e) => setBuyQuant(e.target.value)}
                                value={buyQuant}
                                min="0"
                                >
                                </input>
                                <div className='buy__price__total'>{formatter.format(Number((buyQuant * stock?.price).toFixed(2)))}</div>
                                <button
                                className='buy__button'
                                onClick={(e) => buyHandler()}
                                >Buy Now</button>
                            </div>

                            <div className='sell__cont'>
                                <div className='sell__title'>Sell {stock?.name}</div>
                                <input
                                type='number'
                                className='sell__quant__input'
                                onChange={(e) => setSellQuant(e.target.value)}
                                value={sellQuant}
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
            </div>
        </div>
    )
}

export default StockPage
