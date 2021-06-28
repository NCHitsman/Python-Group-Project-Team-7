import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getAllStocks, getUserShares} from '../../store/stocks'
import StockPageInfo from './StockPageInfo'

import "./stockpage.css"
import GraphCanvas from '../Graph'

const StockPage= ({currentUser}) => {
    const dispatch = useDispatch()
    const {stockId} = useParams()

    useEffect(() => {
        dispatch(getAllStocks())
        dispatch(getUserShares(currentUser.id, stockId))
    }, [dispatch, currentUser.id, stockId])

    const history = useSelector((state) => state.stocks.history[stockId])

        return (
            <div className="container">
                <GraphCanvas history={history} stockId={stockId}/>
                <StockPageInfo stockId={stockId}/>
            </div>
    )
}

export default StockPage
