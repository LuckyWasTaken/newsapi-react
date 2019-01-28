import React, { Component } from 'react';
import '../stylesheets/Articles.css';
import Article from './Article';

import { connect } from 'react-redux';

function mapStateToProps(store) {
    console.log('mstp', store.default);
    return store.default;
}

class Articles extends Component {
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

Articles = connect(mapStateToProps)(Articles);

export default Articles;