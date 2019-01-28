import React, { Component } from 'react';
import '../stylesheets/Search.css';

import { connect } from 'react-redux';
import * as newsActions from '../actions/NewsActions';

class Search extends Component {

    constructor(props) {
        super()
        this.state = {
            query: ""
        }
        this.dispatch = props.dispatch;
    }

    inputChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    search(e) {
        e.preventDefault();
        this.props.onSearch(this.state.query);

        this.dispatch(newsActions.updateQuery(this.state.query));
    }

    render () {
        return (
            <div className="App-search">
                <form onSubmit={e => this.search(e)}>
                    <input  value={this.state.query} onChange={e => this.inputChange(e)} type="text"></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
        )
    }
}

Search = connect()(Search);

export default Search;