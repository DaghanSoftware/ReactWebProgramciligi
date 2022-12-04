import React, { Component } from 'react'
import './BookList.css';
import {BookContext} from '../context/BookContext';
 class BookList extends Component {

static contextType = BookContext;

  render() {
    console.log(this.context)
    return (
      <div>

      </div>
    )
  }
}

export default BookList;