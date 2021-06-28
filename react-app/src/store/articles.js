

const NEW_ARTICLE = 'articles/NEW_ARTICLE'


const makeNewArticle = (article) => ({
    type: NEW_ARTICLE,
    payload: article
})


export const newArticle = (winner_id, loser_id, winner_score, loser_score) => async (dispatch) => {
    dispatch(makeNewArticle({
        winner_id,
        winner_score,
        loser_id,
        loser_score
        }))
}


const reducer = (state=[], action) => {
    const newState = [...state]

    switch (action.type) {
        case NEW_ARTICLE:
            newState.push(action.payload)
            if (newState.length > 9) {
                newState.shift()
            }
            return newState
        default:
            return state
    }
}

export default reducer
