import React, { Component } from 'react';
import '../stylesheets/Display.css';

import Search from './Search';
import Articles from './Articles';

class Display extends Component {

    render () {
        return (
            <div className="App-display">
                <Search/>
                <Articles/>
            </div>
        )
    }
}


export default Display;