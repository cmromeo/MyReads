import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Shelves extends Component {

    render() {
        console.log('this.props.books', this.props.books);
        return (
            <div>
                Hi Shelves!
                <div className="open-search">
                    <Link 
                      to="/search"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Shelves;
