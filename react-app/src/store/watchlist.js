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
    return response
}


export const addToWatchlist = (userId, teamid) => async (dispatch) => {
    console.log('=========', userId, "//", teamid)

    const response = await fetch(`/api/watchlist/add/${userId}/${teamid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_id: teamid,
            user_id: userId
        })
    })
    const team = response.json()
    dispatch(addTo(team))
    return response
}


export const removeFromWatchlist = (userId, teamId) => async (dispatch) => {
    const response = await fetch(`/api/watchlist/delete/${userId}/${teamId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_id: teamId,
            user_id: userId
        })
    })
    const team = await response.json()
    dispatch(removeFrom(team))
    return response
}


// Reducer

export default function reducer(state={}, action) {
    let newState;
    switch (action.type) {
        case GET_LIST:
            newState = {...state, ...action.payload}
            return newState
        case ADD_TO:
            newState = {...state, ...action.payload}
            return newState
        case REMOVE_FROM:
            newState = {...action.payload}
            return newState
        default:
            return state;
    }
 };
