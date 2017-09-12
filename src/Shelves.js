import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Shelves extends Component {

    render() {
        let currentlyReading = this.props.books.filter((book) => {
            return book.shelf === "currentlyReading";
        });
        let wantToRead = this.props.books.filter((book) => {
            return book.shelf === "wantToRead";
        });
        let read = this.props.books.filter((book) => {
            return book.shelf === "read";
        });

        console.log('currently reading: ', currentlyReading);
        console.log('wantToRead: ', wantToRead);
        console.log('read: ', read);

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
