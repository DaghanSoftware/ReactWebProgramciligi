import axios from "axios";
import React from "react";

class EditMovie extends React.Component {
   state = {
    name:"",
    rating:"",
    overview:"",
    imageURL:""
   }
   async componentDidMount(){
    await axios.get(`http://localhost:3002/movies/${id}`)
   }
   handleFormSubmit = (event) => {
    event.preventDefault();
  };
render(){


  return (
    <div className="container">
      <form id="example-form" className="mt-5" onSubmit={this.handleFormSubmit}>
        <input
          className="form-control"
          id="disabledInput"
          type="text"
          placeholder="EDİT The Form To UPDATE A Movie.."
          disabled
        />
        <div className="row">
          <div className="form-group col-md-10">
            <label htmlFor="inputName">Name</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputRating">Rating</label>
            <input type="text" className="form-control" name="rating" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" name="imageURL" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-danger btn-block"
          value="Add Movie"
        />
      </form>
    </div>
  );
}
};
export default EditMovie;
