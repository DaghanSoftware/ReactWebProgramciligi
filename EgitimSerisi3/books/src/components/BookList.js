import React, { Component } from "react";
import "./BookList.css";
import Book from "./Book";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const {books} = contextBook;
            const {isDarkTheme,dark,light}=contextTheme
            const theme = isDarkTheme ? dark :light;
            
              return (
                <body id="page-top">
                  <section className="page-section" style={{background:theme.bg,color:theme.txt}} id="portfolio">
                    <div className="container">
                      <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                          Portfolio
                        </h2>
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
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
