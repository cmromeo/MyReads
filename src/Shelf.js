import React, { Component } from 'react';

class Shelf extends Component {
    render(){
        console.log("shelf contains: ", this.props.shelf)
        return(
            <div>
                Hello Shelf!
            </div>
        )
    }

}
export default Shelf;