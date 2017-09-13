import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'

class Search extends Component {

    state = {
        searchedBooks: []
    }

    searchBooks(query){
        if (query){
            BooksAPI.search(query, 20).then((booksSearched) => {
                console.log('books searched: ', booksSearched);
                if (booksSearched.length > 0){
                    booksSearched.sort(sortBy('title'));
                    this.setState({
                        searchedBooks: booksSearched
                    });
                }
            });
        }
        else{
            this.setState({
                searchedBooks: []
            });
        }
    }

    
    render() {
        const {books} = this.props;
        const {searchedBooks} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks && searchedBooks.map((book) => {
                            //check if this book is already in my collection, then show correct shelf
                            let myBook = books.filter((myOneBook) => {
                                return myOneBook.id === book.id;
                            });
                            if (myBook.length === 1) {
                                book.shelf = myBook[0].shelf;
                            }else {
                                book.shelf = "none";
                            }
                            
                            return (
                            <li key={book.id}>
                                <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" 
                                        style={{ width: 128, height: 170, 
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`, 
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover" }}></div>
                                    <div className="book-shelf-changer">
                                    <select value={book.shelf} >
                                        <option value="wantToRead" disabled>Move to...</option>
                                        <option value="currentlyReading" >Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">
                                    {book.authors.join(", ")}
                                </div>
                                </div>
                            </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;