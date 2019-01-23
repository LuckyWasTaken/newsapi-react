import React, { Component } from 'react';
import './Articles.css';
import Article from './Article';

class Articles extends Component {
    componentDidUpdate(){
        console.log(this.props);
    }
    render () {
        return (
            <div className="App-articles">
                {this.props.articles.map((article, i) => {
                    return (
                        <Article key={i} article={article}/>
                    )
                })}
            </div>
        )
    }
}

export default Articles;