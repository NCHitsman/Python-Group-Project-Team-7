// Constants
const ADD_TO = "watchlist/ADD_TO"
const REMOVE_FROM = "watchlist/REMOVE_FROM"

// Action Creators

const addTo = (stock) => ({
    type: ADD_TO,
    payload: stock
})

const removeFrom = (stock) => ({
    type: REMOVE_FROM,
    payload: stock
})


// Reducer

const initialState = {watchlist: []}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TO:
            return {...state, watchlist: [action.payload, ...state.watchlist]}
        case REMOVE_FROM:

        default:
            return state;
    }
 };
