
const GET_ARTICLES = 'articles/GET_ARTICLES'

const articles = (articles) => ({
    type: GET_ARTICLES,
    payload: articles
})


export const getArticles = () => async (dispatch) => {
    const response = await fetch('/api/teams/articles')
    const data = await response.json()
    dispatch(articles(data))
    return response
}

export const newArticle = (winner_id, loser_id, winner_score, loser_score) => async (dispatch) => {
    const response = await fetch('/api/teams/articles/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            winner_id,
            winner_score,
            loser_id,
            loser_score
        })
    })
    const data = await response.json()
    dispatch(articles(data))
    return response
}

const reducer = (state={}, action) => {
    const newState = {}

    switch (action.type) {
        case GET_ARTICLES:
            action.payload.articles.forEach(article => {
                newState[article.id] = article
            })
            return newState
        default:
            return state
    }
}

export default reducer
