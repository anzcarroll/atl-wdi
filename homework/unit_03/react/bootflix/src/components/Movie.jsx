import React, { Component } from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{props.Title}</h3>
        <p>
          <strong>Released:</strong>{props.Released}<br />
          <strong>Directed By:</strong>{props.Director}<br />
          <em>Genre: {props.Genre}</em>
        </p>
        <p>{props.Plot}</p>
      </div>
    </section>
  );
};

export default Movie;


