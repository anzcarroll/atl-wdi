import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';



class App extends Component {
  constructor(){
    super();
    this.state = {
      idToSearch: "",
      titleToSearch: "",
      year: "",
      director: "",
      plot: "",
      genre: ""
    }
  }

 

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
   _searchByTitle = (event) => {
     event.preventDefault();
     const title = event.target.title.value;
     axios.get(`http://www.omdbapi.com/?t=${title}&apikey=d31f1a94`)
      .then( (res) => {
        this.setState({
            titleToSearch: res.data.Title,
            year: res.data.Year,
            director: res.data.Director,
            plot: res.data.Plot,
            genre: res.data.Genre
        });
        console.log(res.data);
      })
      .catch( (error) => {
        console.log(error);
      })
  }


   _searchById = (event) => {
     event.preventDefault();
     const id = event.target.title.value;
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d31f1a94`)
      .then( (res) => {
        this.setState({
            idToSearch: res.data.imdbID
        });
        console.log(res.data);
      })
      .catch( (error) => {
        console.log(error);
      })
  }


  
  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
       <Search searchByTitle={this._searchByTitle} 
          searchById={this._searchById}
          titleToSearch={this.state.titleToSearch}
          idToSearch={this.state.idToSearch}
        />
        <Movie 
        title={this.state.titleToSearch}
        year={this.state.year}
        director={this.state.director}
        plot={this.state.plot} />
      </div>
    );
  }
}

export default App;
