import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Display.css';


import { connect } from 'react-redux';
import * as newsActions from '../actions/NewsActions';

import Search from './Search';
import Articles from './Articles';

class Display extends Component {


    constructor(props) {
        super()
        this.state = {
            articles: []
        }
        this.dispatch = props.dispatch;
    }

    componentDidMount() {
        this.dispatch(newsActions.updateQuery(""));
    }


    render () {
        return (
            <div className="App-display">
                <Search/>
                <Articles/>
            </div>
        )
    }
}

Display = connect()(Display)

export default Display;