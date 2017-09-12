import React, { Component } from 'react';

class Shelf extends Component {
    render(){
        console.log("shelf contains: ", this.props.shelf)
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
                </div>
            </div>
        )
    }

}
export default Shelf;