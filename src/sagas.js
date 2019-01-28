import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from './api';
import * as newsActions from './constants/ActionTypes';

function* setNews(action) {
    const query = action.payload.query;
    console.log(query);
    const response = yield call(api.getNews, query);

    yield put({type: newsActions.SET_ARTICLES, articles: response.data.articles});
 }

 function* setNewsSaga() {
    yield takeEvery(newsActions.UPDATE_QUERY, setNews);
  }

  export default setNewsSaga;
