import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Shelves from './Shelves';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

/**
* @description The root component
*/
class BooksApp extends React.Component {
    
    /**
    * @description The state of this component 
    */
    state = {
        books: [],
    }

    /**
    * @description Downloads books data of the user 
    */
    downloadBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    /**
    * @description Changes the shelf of a book
    * @param {book} book - A book object
    * @param {shelf} shelf - The name of the shelf, either read, wantToRead, currentlyReading
    */
    updateShelf = (book, shelf) => {
        if (book.shelf !== shelf) {
            BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf;

                /** Filter out the book and append it to the end of the list
                so it appears at the end of whatever shelf it was added to. */
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([ book ])
                }));
            });
        }
    }

    /**
    * @description Called just after the component is mounted
    */
    componentDidMount(){
        this.downloadBooks();
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Shelves books={this.state.books} changeShelf={this.updateShelf} />
                )}/>
                <Route exact path='/search' render={({history})  => (
                    <Search  books={this.state.books} changeShelf={this.updateShelf} />
                )}/>
            </div>
        );
    }
}
export default BooksApp;
