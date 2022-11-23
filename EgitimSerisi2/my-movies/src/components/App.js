import React, { Component } from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
 class App extends Component {
  state = {
    movies:[],
    searchQuery:""
  }


  async componentDidMount (){
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0a0fda7ff0163ea73dcd60e82bc9afb&language=en-US&page=1");
    console.log(response.data.results);
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
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
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
