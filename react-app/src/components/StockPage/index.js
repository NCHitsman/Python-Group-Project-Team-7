import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getAllStocks, getUserShares, getStockHistory } from '../../store/stocks'
import StockPageInfo from './StockPageInfo'

import "./stockpage.css"
import GraphCanvas from '../Graph'

const StockPage= ({currentUser}) => {
    const dispatch = useDispatch()
    const {stockId} = useParams()

    useEffect(() => {
        dispatch(getAllStocks())
        dispatch(getStockHistory(stockId))
        dispatch(getUserShares(currentUser.id, stockId))
    }, [dispatch])

    const history = useSelector((state) => state.stocks.history.history)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

        return (
            <div className="container">
                <GraphCanvas history={history} stockId={stockId}/>
                <StockPageInfo stockId={stockId}/>
            </div>
    )
}

export default StockPage
