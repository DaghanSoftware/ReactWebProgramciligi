import React, { Component } from "react";
import {Link} from "react-router-dom";
class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <br></br>
        <form onSubmit={this.handleFormSubmit}>
          <div className="row mb-5">
            <div className="col-10">
              <input
                type="text"
                onChange={this.props.searchMovieProp}
                className="form-control"
                placeholder="Search a movie"
              ></input>
            </div>
            <div className="col-2">
              <Link
              to="/add"
                type="button"
                className="btn btn-md btn-danger"
                style={{ float: "right" }}>
                  Add Movie
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
