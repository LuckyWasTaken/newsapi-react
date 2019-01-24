import React, { Component } from 'react';
import '../stylesheets/Search.css';

class Search extends Component {

    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    inputChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    search(e) {
        e.preventDefault();
        this.props.onSearch(this.state.query);
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

export default Search;