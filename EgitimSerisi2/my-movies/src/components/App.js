import React, { Component } from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
 class App extends Component {
  state = {
    movies:[],
    searchQuery:""
  }

  // async componentDidMount (){
  //   const  baseUrl ="http://localhost:3002/movies";
  //   const response = await fetch(baseUrl);
  //   const data = await response.json();
  //   this.setState({movies:data});
  // }

  async componentDidMount (){
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({movies:response.data});
  }

  //Static silme işlemi
  // deleteMovie= (movie) => {
  //   const newMovieList = this.state.movies.filter(
  //     m=>m.id !== movie.id
  //     );
  //     //Elimizde bir filim olmasaydı aşağıdaki setStatei kullanmak daha mantıklı olurdu ama elimizde film bilgisi mevcut
  //   // this.setState({movies:newMovieList})
  //   this.setState(state=>({
  //     movies:newMovieList
  //   }))
  // }


  //Fetch APİ ile Silme İşlemi
  // deleteMovie= async (movie) => {
  //   const  baseUrl =`http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseUrl,{
  //     method:"DELETE"
  //   })
  //   const newMovieList = this.state.movies.filter(
  //     m=>m.id !== movie.id
  //     );
  //     //Elimizde bir filim olmasaydı aşağıdaki setStatei kullanmak daha mantıklı olurdu ama elimizde film bilgisi mevcut
  //   // this.setState({movies:newMovieList})
  //   this.setState(state=>({
  //     movies:newMovieList
  //   }))
  // }

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
