import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Shelves from './Shelves'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    
    state = {
        books: [],
    }

    downloadBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then((jsonResponse) => {
            this.downloadBooks();
            console.log('db changed state: ', this.state);
        });
    }

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
                    <Search  />
                )}/>
            </div>
        );
    }
}
export default BooksApp;
