

const GET_STOCK = 'stocks/GET_STOCK'
const ALL_STOCKS = 'stocks/ALL_STOCKS'
const USER_SHARES = 'stocks/USER_SHARES'
const GET_HISTORY = 'stocks/GET_HISTORY'

const getStock = (stock) => ({
    type: GET_STOCK,
    payload: stock
})

const allStocks = (stocks) => ({
    type: ALL_STOCKS,
    payload: stocks
})

const userShares = (shares) => ({
    type: USER_SHARES,
    payload: shares
})

const getHistory = (history) => ({
    type: GET_HISTORY,
    payload: history
})

export const getAStock = (stockId) => async (dispatch) => {
    const response = await fetch(`/api/teams/${stockId}`)
    const data = await response.json()
    dispatch(getStock(data))
    return response
}

export const updateStock = (stockId, diff, win) => async (dispatch) => {
    const response = await fetch(`/api/teams/${stockId}`)
    const stockData = await response.json()

    console.log('diff =>> ', diff)


    const differ = (Math.random() * 0.1)
    const comb = diff * differ
    const fixed = comb.toFixed(2)
    const stockChange = parseFloat(fixed)
    console.log(' differ =>> ', differ, ' comb =>> ', comb, ' fixed =>> ', fixed, ' parse =>> ', stockChange)



    const stockAdd = parseFloat(stockData.price.toFixed(2))
    console.log('stockAdd =>> ', stockAdd)


    const newPrice = win ? Number((stockAdd + stockChange).toFixed(2)) : Number((stockAdd - stockChange).toFixed(2))
    const res = await fetch(`/api/teams/editPrice/${stockId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            price: newPrice
        })
    })
    const data = await res.json()
    dispatch(allStocks(data))
    return data
}

export const getAllStocks = () => async (dispatch) => {
    const response = await fetch('/api/teams/')
    const data = await response.json()
    dispatch(allStocks(data))
    return data
}

export const getUserShares = (userId, stockId) => async (dispatch) => {
    const response = await fetch(`/api/teams/userShares/${userId}/${stockId}`)
    const data = await response.json()
    dispatch(userShares(data))
    return data
}

export const getStockHistory = (stockId) => async (dispatch) => {
    const response = await fetch(`/api/teams/history/${stockId}`)
    const data = await response.json()
    dispatch(getHistory(data))
    return data
}

export const makeStockHistory = (stockId) => async (dispatch) => {
    console.log(stockId)
    const response = await fetch(`/api/teams/${stockId}`)
    const stockData = await response.json()
    const res = await fetch('/api/teams/history/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_id: stockId,
            price: stockData.price
        })
    })
    const data = await res.json()
    return data
}


const reducer = (state = {currentStock: null, allStocks: {}, userShares: null, history: {}}, action) => {
    let newState;

    switch (action.type) {
        case GET_STOCK:
            newState = {currentStock: null, allStocks: state.allStocks, userShares: state.userShares, history: state.history}
            newState.currentStock = action.payload
            return newState
        case ALL_STOCKS:
            newState = {currentStock: state.stock, allStocks: {}, userShares: state.userShares, history: state.history}
            action.payload.teams.forEach(stock => {
                newState.allStocks[stock.id] = stock
            })
            return newState
        case USER_SHARES:
            newState = {currentStock: state.currentStock, allStocks: state.allStocks, userShares: null, history: state.history}
            newState.userShares = action.payload
            return newState
        case GET_HISTORY:
            newState = {currentStock: state.currentStock, allStocks: state.allStocks, userShares: state.userShares, history: {}}
            newState.history = action.payload
            return newState
        default:
            return state
    }
}

export default reducer
