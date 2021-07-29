import React from 'react'
import { useSelector } from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import StockPageInfo from './StockPageInfo'

import "./stockpage.css"
import GraphCanvas from '../Graph'

const StockPage= () => {

    const redirectTo = useHistory()

    const {stockId} = useParams()

    if (stockId > 30) {
        redirectTo.push('/404')
    }


    const history = useSelector((state) => state.stocks.history[stockId])

        return (
            <div className="container stock">
                <GraphCanvas history={history} stockId={stockId}/>
                <StockPageInfo stockId={stockId > 30 ? 1 : stockId}/>
            </div>
    )
}

export default StockPage
