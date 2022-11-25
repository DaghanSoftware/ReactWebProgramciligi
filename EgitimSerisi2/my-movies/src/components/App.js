import React, { Component } from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
// require('dotenv').config();
 class App extends Component {
  state = {
    movies:[],
    searchQuery:""
  }


  async componentDidMount (){
    const response = await axios.get("https://api.themoviedb.org/3/list/8229363?api_key=c0a0fda7ff0163ea73dcd60e82bc9afb&language=en-US");
    console.log(response.data.items);
    this.setState({movies:response.data.items});
  }


  deleteMovie= async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(
      m=>m.id !== movie.id
      );
      //Elimizde bir filim olmasaydı aşağıdaki setStatei kullanmak daha mantıklı olurdu ama elimizde film bilgisi mevcut
    // this.setState({movies:newMovieList})
    this.setState(state=>({
      movies:newMovieList
    }))
  }
  searchMovie = (event)=>{
    this.setState({searchQuery:event.target.value})
  }
  render() {
    let filteredMovies = this.state.movies.filter(
      (movie)=>{
          return movie.title !== -1
      }
    )
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <SearchBar searchMovieProp={this.searchMovie}></SearchBar>
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie}></MovieList>
      </div>
    )
  }
}
export default App;
