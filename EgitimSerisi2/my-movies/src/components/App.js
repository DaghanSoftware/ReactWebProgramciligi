import React, { Component } from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
 class App extends Component {
  state = {
    movies:[],
    searchQuery:""
  }
  deleteMovie= (movie) => {
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
    // console.log(event.target.value);
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
