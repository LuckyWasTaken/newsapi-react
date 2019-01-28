import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import '../stylesheets/App.css';
import Display from './Display';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, composeWithDevTools());


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
