
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

const reducer = (state={}, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            action.payload.articles.map(article => {
                state[article.id] = article
            })
            return state
        default:
            return state
    }
}

export default reducer
