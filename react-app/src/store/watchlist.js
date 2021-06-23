// Constants
const GET_LIST = "watchlist/GET_LIST"
const ADD_TO = "watchlist/ADD_TO"
const REMOVE_FROM = "watchlist/REMOVE_FROM"

// Action Creators
const getList = (list) => ({
    type: GET_LIST,
    payload: list
})

const addTo = (stock) => ({
    type: ADD_TO,
    payload: stock
})

const removeFrom = (stock) => ({
    type: REMOVE_FROM,
    payload: stock
})

//Thunks
export const getUserList = () => async (dispatch) => {
    const response = await fetch('/api/watchlist', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const list = response.json()
    dispatch(getList(list))
    return response
}


// Reducer
const initialState = {watching: []}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return {...state}
        case ADD_TO:
            return {...state, watchlist: [action.payload, ...state.watchlist]}
        case REMOVE_FROM:

        default:
            return state;
    }
 };
