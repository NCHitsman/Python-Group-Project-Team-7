// Constants
const GET_LIST = "watchlist/GET_LIST"
const ADD_TO = "watchlist/ADD_TO"
const REMOVE_FROM = "watchlist/REMOVE_FROM"

// Action Creators
const getList = (list) => ({
    type: GET_LIST,
    payload: list
})

const addTo = (team) => ({
    type: ADD_TO,
    payload: team
})

const removeFrom = (team) => ({
    type: REMOVE_FROM,
    payload: team
})

//Thunks
export const getUserList = (user) => async (dispatch) => {

    const response = await fetch(`/api/watchlist/${user.userId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const list = await response.json()
    dispatch(getList(list))
    return list
}


export const addToWatchlist = (user, team) => async (dispatch) => {
    // console.log('=========', user.userId, "//", team)

    const response = await fetch(`/api/watchlist/${user.userId}/${team}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_id: team.id,
            user_id: user.userId
        })
    })
    const team = response.json()
    dispatch(addTo(team))
    return response
}


// Reducer
const initialState = {}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return {...state, ...action.payload}
        case ADD_TO:
            return {...state, watchlist: [action.payload, ...state.watchlist]}
        case REMOVE_FROM:
            return;
        default:
            return state;
    }
 };
