import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render () {
        return (
            <div className="App-search">
                <input type="text"></input>
                <button>Search</button>
            </div>
        )
    }
}

export default Search;