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
            console.log(this.state);
        });
    }

    componentDidMount(){
        this.downloadBooks();
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Shelves  />
                )}/>
                <Route exact path='/search' render={({history}) => (
                    <Search  />
                )}/>
            </div>
        );
    }
}
export default BooksApp;
