import React, { Component } from 'react';
import '../stylesheets/Display.css';
import Search from './Search';
import Articles from './Articles';
import axios from 'axios';

class Display extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
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
            that.setState({
                articles: response.data.articles
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render () {
        return (
            <div className="App-display">
                <Search onSearch={this.search.bind(this)}/>
                <Articles articles={this.state.articles}/>
            </div>
        )
    }
}

export default Display;