import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

/**
* @description The component that displays a list of books by the user
*/
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
                <Shelf shelf={currentlyReading} title="Currently Reading" changeShelf={this.props.changeShelf} />
                <Shelf shelf={wantToRead} title="Want to Read" changeShelf={this.props.changeShelf} />
                <Shelf shelf={read} title="Read" changeShelf={this.props.changeShelf} />

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
