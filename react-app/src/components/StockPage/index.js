import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

const StockPage= ({currentUser}) => {
    const dispatch = useDispatch()
    const {stockId} = useParams()
    const [buyQuant, setBuyQuant] = useState('0')
    // const [sellQuant, setBuyQuant] = useState(userStock.share_amount)

    useEffect(() => {
        //dispatch(getStock(stockId)) for stock here
    })

    useEffect(() => {
        //dispatch(getUserShare(currentUser.id, stockId)) for userStock info
    })

    // const stock = useSelector((state) => {state.stock.currentStock}) get the stock from the store here

    // const userShare = useSelector((state) => {state.stock.userShare}) get the stock from the store here

    const buyHandler = () => {

    }

    const sellHandler = () => {

    }

        return (
            <>
                <div className='parent__cont'>
                    <div className='graph__cont'></div>
                    <div className='info__buy__sell__parent__cont'>

                        <div className='info__cont'>
                            {/* <div className='info__stock__name'>{stock.name}</div>
                            <div className='info__stock__conference'>{stock.conference}</div> */}
                            {/* <div className='info__stock__standing'>{stock.standing}</div> */} //??
                            {/* <div className='info__stock__short_name'>{stock.short_name}</div>
                            <div className='info__stock__price'>{stock.price}</div>
                            <div className='info__stock__icon'></div> */}
                        </div>

                        <div className='buy__cont'>
                            {/* <div className='buy__title'>Buy ${stock.name}</div> */}
                            <select
                            className='buy__quant__select'
                            onChange={(e) => setBuyQuant(e.target.value)}
                            value={buyQuant}
                            >
                                <option></option>
                            </select>
                            {/* <div className='buy__price__total'>{buyQuant * stock.price}</div> */}
                            <button
                            className='buy__button'
                            onClick={(e) => buyHandler()}
                            >Buy Now</button>
                        </div>

                        <div className='sell__cont'>
                            {/* <div className='sell__title'>Sell ${stock.name}</div> */}
                            <select
                            className='sell__quant__select'
                            // onChange={(e) => setSellQuant(e.target.value)}
                            // value={sellQuant}
                            >
                                <option></option>
                            </select>
                            {/* <div className='sell__price__total'>{sellQuant * stock.price}</div> */}
                            <button
                            className='sell__button'
                            onClick={(e) => sellHandler()}
                            >Sell Now</button>
                        </div>

                    </div>
                </div>
            </>
        )
}

export default StockPage
