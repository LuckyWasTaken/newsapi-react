import React, { Component } from 'react';
import './Display.css';
import Search from './Search';

class Display extends Component {
    render () {
        return (
            <div className="App-display">
                <Search />
                <h1>News will be there</h1>
            </div>
        )
    }
}

export default Display;