const LOAD_SHARES='purchase/LOAD_SHARES'
const BUY_TEAM = 'purchase/BUY_TEAM' 
const SELL_TEAM= 'purchase/SELL_TEAM'

const loadIt = (purchase) => ({
    type: LOAD_SHARES,
    payload: purchase
})

const buyIt = (purchase) => ({
    type: BUY_TEAM,
    payload: purchase
})

// const sellIt = () => ({
//     type:SELL_TEAM,
//     payload: purchase
// })

export const loadShares = (id) => async (dispatch) => {
    const response = await fetch (`/api/buy/${id}`)
   
    if (response.ok) {
       
        const load = await response.json()
        dispatch(loadIt(load))
        return load
    }

}


export const buyShares = (data) => async (dispatch) => {
    const {shares, userId, teamId} = data

    const response = await fetch ('/api/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            share_amount: shares,
            user_id: userId,
            team_id: teamId
            
        })
    })

    if (response.ok) {
    
    const buy = await response.json()
    dispatch(buyIt(buy))
    return buy
    }
}


const initialState = {}

export default buyReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_SHARES: {
            action.purchase.forEach((purchase) => {
                newState[purchase.id] = purchase
            })
            return{...newState, ...state}
        }

        case BUY_TEAM: {
            return {...state, [action.purchase.id]: action.purchase}
        }    
            
    
        default:
            return state;
            
    }
}