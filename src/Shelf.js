import React, { Component } from 'react';

/**
* @description The component that displays the details of a book
*/
class Shelf extends Component {

    /**
    * @description Called when a user changes the shelf of a book
    * @param {book} book - A book object
    * @param {e} e - The event triggered when the user changes the select value
    */
    onShelfChange(book, e){
        this.props.changeShelf(book, e.target.value);
    }

    render(){
        return(
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.shelf.map((book) => {
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
                                            <select value={book.shelf} onChange={(e) => this.onShelfChange(book, e)} >
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
                </div>
            </div>
        )
    }
}

export default Shelf;