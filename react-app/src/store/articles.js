
// const GET_ARTICLES = 'articles/GET_ARTICLES'
const NEW_ARTICLE = 'articles/NEW_ARTICLE'

// const articles = (articles) => ({
//     type: GET_ARTICLES,
//     payload: articles
// })

const makeNewArticle = (article) => ({
    type: NEW_ARTICLE,
    payload: article
})


// export const getArticles = () => async (dispatch) => {
//     const response = await fetch('/api/teams/articles')
//     const data = await response.json()
//     dispatch(articles(data))
//     return response
// }

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
        // case GET_ARTICLES:
        //     action.payload.articles.forEach(article => {
        //         newState[article.id] = article
        //     })
        //     return newState
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
