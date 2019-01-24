import React, { Component } from 'react';
import '../stylesheets/App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Just a simple app utilizing newsapi</h1>
        </header>

        <Display />
      </div>
    );
  }
}

export default App;
