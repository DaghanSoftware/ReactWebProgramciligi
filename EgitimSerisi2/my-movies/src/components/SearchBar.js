import React, { Component } from "react";

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
              <button
                type="button"
                className="btn btn-md btn-danger"
                style={{ float: "right" }}>
                Add Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
