

const GET_STOCK = 'stocks/GET_STOCK'

const getStock = (stock) => ({
    type: GET_STOCK,
    payload: stock
})

export const getAStock = (stockId) => async (dispatch) => {
    const response = await fetch()
    const data = response.json()
    dispatch(getStock(data))
    return response
}


export default function reducer(state={stock: null}, action) {
    switch (action.type) {
        case GET_STOCK:
            return {stock: action.payload}
        default:
            return state
    }
}
