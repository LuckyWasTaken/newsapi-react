import * as types from '../constants/ActionTypes';

export function updateQuery(query) {
    return {
        type: types.UPDATE_QUERY,
        query
    }
}


export function setArticles(articles) {
    return {
        type: types.SET_ARTICLES,
        articles
    }
}