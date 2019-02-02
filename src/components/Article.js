import React, { Component } from 'react';
import '../stylesheets/Article.css';

class Article extends Component {

    parseDate(timestamp) {
        const date = new Date(timestamp);
        const year   = date.getFullYear();
        const month  = date.getMonth() + 1;
        const day    = date.getDate();
        const hour   = date.getHours();
        const minute = date.getMinutes();
        return `${day}/${month}/${year} ${hour}:${minute > 10 ? minute : "0" + minute}`
    }

    render () {
        return (
            <div className="App-article">
                <div className="article__text">
                    <a rel="noopener noreferrer" target="_blank" href={this.props.article.url}><h5 className="article__title">{this.props.article.title}</h5></a>
                    <p className="article__desc">{this.props.article.description.split(' ').slice(0, 10).join(' ')}...</p>
                    <p className="article__time">{this.parseDate(this.props.article.publishedAt)}</p>
                </div>
                <div className="article__pic-wrapper">                
                    <img className="article__pic" src={this.props.article.urlToImage} alt="article main"></img>
                </div>
            </div>
        )
    }
}

export default Article;