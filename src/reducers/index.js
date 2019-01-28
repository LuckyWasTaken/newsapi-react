import * as types from '../constants/ActionTypes';

const initialState = {
    query: "",
    articles: []
}

export default function news(state = initialState, action) {
    switch(action.type) {
        
        case types.UPDATE_QUERY:
            return {
                ...state,
                query: action.query
            }

        case types.SET_ARTICLES:
            return {
                ...state,
                articles: action.articles
            }

        default:
            return state;
    }
}