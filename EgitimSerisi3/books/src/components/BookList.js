import React, { Component } from 'react'
import Book from './Book'

 class BookList extends Component {
  render() {
    const bookList = this.props.books.map((book,i)=>{
        return<Book book={book} key={i}></Book>
    })
    return (
      <div>{bookList}</div>
    )
  }
}

export default BookList;