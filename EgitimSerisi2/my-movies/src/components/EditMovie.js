import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function EditMovie() {

  // const [name, setName] = useState('');
  // const [rating, setrating] = useState('');
  // const [overview, setoverview] = useState('');
  // const [imageURL, setimageURL] = useState('');

  const { id } = useParams();
  const [userState, setUserState] = useState({
    name: "",
    rating: "",
    overview: "",
    imageURL: ""
  })
  async function fetchData() {
    // const id = window.location.pathname.replace("/edit/", "")
    // console.log(id)
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    const movie = response.data;
    setUserState({
      ...userState,
      name: movie.name,
      rating:movie.rating,
      overview:movie.overview,
      imageURL:movie.imageURL
     });
    // userState.name(movie.name);
    // userState.rating(movie.rating);
    // userState.overview(movie.overview);
    // userState.imageURL(movie.imageURL);
  }

  const onInputChange = (e)=>{
    console.log(e.target.name);
    setUserState({
     ...userState,
     [e.target.name]: e.target.value
    });
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
            <input type="text" className="form-control" name="name" value={userState.name} onChange={onInputChange}/>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputRating">Rating</label>
            <input type="text" className="form-control" name="rating" value={userState.rating} onChange={onInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" name="imageURL" value={userState.imageURL} onChange={onInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
              value={userState.overview}
              onChange={onInputChange}
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
