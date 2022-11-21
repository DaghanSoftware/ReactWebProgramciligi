import React, { Component } from "react";

class SearchBar extends Component {

  handleFormSubmit = (event)=>{
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <br></br>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row mb-5">
            <div className="col-12">
              <input
                type="text"
                onChange={this.props.searchMovieProp}
                className="form-control"
                placeholder="Search a movie"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
