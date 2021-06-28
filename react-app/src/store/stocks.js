

const ALL_STOCKS = 'stocks/ALL_STOCKS'
const USER_SHARES = 'stocks/USER_SHARES'
const ADD_HISTORY = 'stocks/ADD_HISTORY'


const allStocks = (stocks) => ({
    type: ALL_STOCKS,
    payload: stocks
})

const userShares = (shares) => ({
    type: USER_SHARES,
    payload: shares
})

const addHistory = (history) => ({
    type: ADD_HISTORY,
    payload: history
})


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

export const makeStockHistory = (stockId) => async (dispatch) => {
    const response = await fetch(`/api/teams/${stockId}`)
    const stockData = await response.json()
    const currentDate = new Date()
    dispatch(addHistory({
        team_id: stockId,
        price: stockData.price,
        date: `${currentDate.getMonth()} / ${currentDate.getDate()}`
    }))
}

export const updateStock = (stockId, diff, win) => async (dispatch) => {
    const response = await fetch(`/api/teams/${stockId}`)
    const stockData = await response.json()
    const differ = (Math.random() * 5)
    const comb = diff * differ // * 100 round /100
    const fixed = comb.toFixed(2)
    const stockChange = parseFloat(fixed)

    const stockAdd = parseFloat(stockData.price.toFixed(2))

    const newPrice = win ? parseFloat((stockAdd + stockChange).toFixed(2)) : parseFloat((stockAdd - stockChange).toFixed(2))
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



const reducer = (state = { allStocks: {}, userShares: null, history: {} }, action) => {
    let newState;

    switch (action.type) {
        case ALL_STOCKS:
            newState = { allStocks: {}, userShares: state.userShares, history: state.history }
            action.payload.teams.forEach(stock => {
                newState.allStocks[stock.id] = stock
            })
            return newState
        case USER_SHARES:
            newState = { allStocks: state.allStocks, userShares: null, history: state.history }
            newState.userShares = action.payload
            return newState
        case ADD_HISTORY:
            newState = { allStocks: state.allStocks, userShares: state.userShares, history: state.history }
            const id = action.payload.team_id
            if (newState.history[id]) {
                newState.history[id].push(action.payload)
            } else {
                newState.history[id] = [action.payload]
            }
            return newState
        default:
            return state
    }
}

export default reducer
