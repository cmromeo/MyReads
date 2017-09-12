import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {

    render() {
        return (
            <div>
                <Link className="close-search" to="/" >Close</Link>
                Hi Search!
            </div>
        )
    }
}

export default Search;