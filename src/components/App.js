import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import '../stylesheets/App.css';
import Display from './Display';
import * as reducers from '../reducers';
import setNewsSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers);
const store = createStore(reducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
      );

sagaMiddleware.run(setNewsSaga);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Just a simple app utilizing newsapi</h1>
        </header>
        <Provider store={store}>
          <Display />
        </Provider>
      </div>
    );
  }
}

export default App;
