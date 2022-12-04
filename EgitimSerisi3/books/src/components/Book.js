import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div>
        {this.props.book.title} <br></br>
        {this.props.book.author}

        <br></br><br></br>
      </div>
      
    )
  }
}
export default Book;
