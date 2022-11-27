import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function EditMovie() {

  const [name, setName] = useState('');
  const [rating, setrating] = useState('');
  const [overview, setoverview] = useState('');
  const [imageURL, setimageURL] = useState('');

  const { id } = useParams();

  async function fetchData() {
    // const id = window.location.pathname.replace("/edit/", "")
    // console.log(id)
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    const movie = response.data;
    setName(movie.name);
    setrating(movie.rating);
    setoverview(movie.overview);
    setimageURL(movie.imageURL);
  }
  
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="container">
      <form id="example-form" className="mt-5">
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
            <input type="text" className="form-control" name="name" defaultValue={name}/>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputRating">Rating</label>
            <input type="text" className="form-control" name="rating" defaultValue={rating} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" name="imageURL" defaultValue={imageURL} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
              defaultValue={overview}
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
