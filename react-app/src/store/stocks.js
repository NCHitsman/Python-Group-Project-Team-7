

const GET_STOCK = 'stocks/GET_STOCK'
const ALL_STOCKS = 'stocks/ALL_STOCKS'

const getStock = (stock) => ({
    type: GET_STOCK,
    payload: stock
})

const allStocks = (stocks) => ({
    type: ALL_STOCKS,
    payload: stocks
})

export const getAStock = (stockId) => async (dispatch) => {
    const response = await fetch()
    const data = response.json()
    dispatch(getStock(data))
    return response
}

export const getAllStocks = () => async (dispatch) => {
    const response = await fetch('/api/teams/')
    const data = await response.json()
    dispatch(allStocks(data))
    return data
}


const reducer = (state={stock: null, allStocks: {}}, action) => {
    let newState;

    switch (action.type) {
        case GET_STOCK:
            newState = {...state}
            newState.stock = action.payload
            return newState
        case ALL_STOCKS:
            newState = {stock: state.stock, allStocks: {}}
            action.payload.teams.forEach(stock => {
                newState.allStocks[stock.id] = stock
            })
            return newState
        default:
            return state
    }
}

export default reducer
