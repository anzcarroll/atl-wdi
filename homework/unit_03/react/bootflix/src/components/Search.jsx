import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = () => {
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" method="get">
          <input type="text" name="title" value={this.titleToSearch} onChange={this.titleChange} placeholder="Enter movie title" />
          <input onClick={this.searchByTitle} type="submit" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" method="get">
          <input type="text" name="id" value={this.idToSearch} onChange={this.idChange} placeholder="Enter omdb movie ID" />
          <input onClick={this.searchById} type="submit" value="Search by ID" />
        </form>
      </div>

    </section>
  );
};

export default Search;