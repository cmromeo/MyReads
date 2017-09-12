import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

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

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf shelf={currentlyReading} title="Currently Reading" />
                <Shelf shelf={wantToRead} title="Want to Read" />
                <Shelf shelf={read} title="Read" />

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
