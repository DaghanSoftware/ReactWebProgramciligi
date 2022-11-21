import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

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
                onChange={(event) =>
                  this.setState({ searchQuery: event.target.value })
                }
                className="form-control"
                placeholder="Search a movie"
                value={this.state.searchQuery}
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
