import React, { Component } from "react";
import "./BookList.css";
import Book from "./Book";
import { BookContext } from "../context/BookContext";
class BookList extends Component {
  static contextType = BookContext;

  render() {
    const books = this.context;

    return (
      <body id="page-top">
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {books.map((book, i) => {
                return <Book book={book} key={i}></Book>;
              })}
            </div>
          </div>
        </section>
      </body>
    );
  }
}

export default BookList;
