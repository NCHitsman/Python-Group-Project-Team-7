const LOAD_SHARES='buy/LOAD_SHARES'
const BUY_TEAM = 'buy/BUY_TEAM' 
const SELL_TEAM= 'buy/SELL_TEAM'

const loadIt = (purchase) => ({
    type: LOAD_SHARES,
    payload: purchase
})

const buyIt = (purchase) => ({
    type: BUY_TEAM,
    payload: purchase
})

const sellIt = (id) => ({
    type:SELL_TEAM,
    payload: id
})

export const loadShares = (id) => async (dispatch) => {
    const response = await fetch (`/api/buy/${id}`)
   
    if (response.ok) {
       
        const load = await response.json()
        dispatch(loadIt(load))
        return load
    }

}


export const buyShares = (data) => async (dispatch) => {
    const {shares, userId, stockId} = data

    const response = await fetch ('/api/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            shares,
            stockId
            
        })
    })

    if (response.ok) {
    
    const buy = await response.json()
    dispatch(buyIt(buy))
    return buy
    }
}

export const sellShares = (id) => async (dispatch) => {
    const response = await fetch(`/api/buy/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatch(sellIt(id))
    }
}


const initialState = {}

const buyReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_SHARES: {
            newState = {...state}
            newState.currentBuy = action.payload
            return{... newState}
        }

        case BUY_TEAM: {
            newState = {...state}
            newState.currentBuy = {...newState.currentBuy}
            newState.currentBuy[action.payload.id] = action.payload
            return newState
        }    
            
        case SELL_TEAM: {
            newState = {...state}
            delete newState.currentBuy[action.payload]
            newState.currentBuy = {...newState.currentBuy}
            return newState
        }
        default:
            return state;
            
    }
}

export default buyReducer