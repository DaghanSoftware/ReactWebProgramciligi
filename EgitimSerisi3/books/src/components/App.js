import React, { Component } from "react";
import BookList from "./BookList";
import BookContextProvider from "../context/BookContext";
import ThemeContextProvider from "../context/ThemeContext";
class App extends Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
