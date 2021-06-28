import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import StockPageInfo from './StockPageInfo'

import "./stockpage.css"
import GraphCanvas from '../Graph'

const StockPage= () => {
    const {stockId} = useParams()


    const history = useSelector((state) => state.stocks.history[stockId])

        return (
            <div className="container">
                <GraphCanvas history={history} stockId={stockId}/>
                <StockPageInfo stockId={stockId}/>
            </div>
    )
}

export default StockPage
