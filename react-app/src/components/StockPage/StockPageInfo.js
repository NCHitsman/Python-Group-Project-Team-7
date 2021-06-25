import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import placeholder from "../../images/robinhoop-background-ball.jpg";
import "./stockpage.css"

const StockPageInfo = ({ stockId }) => {
    const [buyQuant, setBuyQuant] = useState('0')
    const [sellQuant, setSellQuant] = useState(0)

    const stock = useSelector((state) => state.stocks.allStocks[stockId])

    // const userShare = useSelector((state) => state.stocks.userShares)

    const buyHandler = () => {

    }

    const sellHandler = () => {

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
                        <img src={placeholder} alt={'placeholder'}></img>
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
    )
}

export default StockPageInfo
