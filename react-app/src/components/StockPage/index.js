import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
<<<<<<< HEAD
import { getAStock, getUserShares } from '../../store/stocks'
import "./stockpage.css"
=======
import { getAStock, getUserShares, getStockHistory } from '../../store/stocks'
import GraphCanvas from '../Graph'
>>>>>>> main

const StockPage= ({currentUser}) => {
    const dispatch = useDispatch()
    const {stockId} = useParams()
    const [buyQuant, setBuyQuant] = useState('0')
    const [sellQuant, setSellQuant] = useState(0)

    useEffect(() => {
        dispatch(getAStock(stockId))
        dispatch(getStockHistory(stockId))
        dispatch(getUserShares(currentUser.id, stockId))
    }, [dispatch])

    const stock = useSelector((state) => state.stocks.currentStock)

    const userShare = useSelector((state) => state.stocks.userShares)

    const history = useSelector((state) => state.stocks.history.history)


    const buyHandler = () => {

    }

    const sellHandler = () => {

    }

        return (
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
                            <div className='info__stock__price'>{stock?.price}</div>
                            <div className='info__stock__icon'></div>
                        </div>

                        <div className='buy__cont'>
                            <div className='buy__title'>Buy {stock?.name}</div>
                            <input
                            type='number'
                            className='buy__quant__input'
                            onChange={(e) => setBuyQuant(e.target.value)}
                            value={buyQuant}
                            >
                            </input>
                            <div className='buy__price__total'>${buyQuant * stock?.price}</div>
                            <button
                            className='buy__button'
                            onClick={(e) => buyHandler()}
                            >Buy Now</button>
                        </div>

                        <div className='sell__cont'>
                            <div className='sell__title'>Sell {stock?.name}</div>
                            <input
                            type='number'
                            className='sell__quant__select'
                            onChange={(e) => setSellQuant(e.target.value)}
                            value={sellQuant}
                            >
                            </input>
                            <div className='sell__price__total'>${sellQuant * stock?.price}</div>
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

export default StockPage
