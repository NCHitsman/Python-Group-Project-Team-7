

const GET_STOCK = 'stocks/GET_STOCK'
const ALL_STOCKS = 'stocks/ALL_STOCKS'
const USER_SHARES = 'stocks/USER_SHARES'

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

export const getAStock = (stockId) => async (dispatch) => {
    const response = await fetch(`/api/teams/${stockId}`)
    const data = await response.json()
    dispatch(getStock(data))
    return response
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


const reducer = (state = {currentStock: null, allStocks: {}, userShares: null}, action) => {
    let newState;

    switch (action.type) {
        case GET_STOCK:
            newState = {currentStock: null, allStocks: state.allStocks, userShares: state.userShares}
            newState.currentStock = action.payload
            return newState
        case ALL_STOCKS:
            newState = {currentStock: state.stock, allStocks: {}, userShares: state.userShares}
            action.payload.teams.forEach(stock => {
                newState.allStocks[stock.id] = stock
            })
            return newState
        case USER_SHARES:
            console.log(state.allStocks)
            newState = {currentStock: state.currentStock, allStocks: state.allStocks, userShares: null}
            newState.userShares = action.payload
            return newState
        default:
            return state
    }
}

export default reducer
