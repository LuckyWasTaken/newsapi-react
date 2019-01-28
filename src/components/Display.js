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
        this.getNews();
    }

    search(q) {
        this.getNews(q);
    }

    getNews(query) {
        let that = this;
        const url = `https://newsapi.org/v2/${query ? `everything?q=${query}` : 'top-headlines?country=ru'}&apiKey=${process.env.REACT_APP_API_KEY}`

        axios.get(url)
        .then(function (response) {
            that.dispatch(newsActions.setArticles(response.data.articles));
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render () {
        return (
            <div className="App-display">
                <Search onSearch={this.search.bind(this)}/>
                <Articles/>
            </div>
        )
    }
}

Display = connect()(Display)

export default Display;