import React, { Component } from 'react'
import './BookList.css';
import Book from './Book'

 class BookList extends Component {
  render() {
    const bookList = this.props.books.map((book,i)=>{
        return<Book book={book} key={i}></Book>
    })
    return (
      <div>
        <body id="page-top">
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                {bookList}
                </div>
            </div>
        </section>
        </body>
        </div>
    )
  }
}

export default BookList;