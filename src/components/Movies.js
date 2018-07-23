import React from 'react';
import { movies } from '../data';
import UUID from 'uuid'

const Movies = () => {

  function buildGenreList(genres) {
    return genres.map(genre => <li key={UUID()}>{genre}</li>)
  }

  function buildMovieList() {
    return movies.map(movie => {
      return (
        <div key={UUID()}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          Genres:
          <ul>
            {buildGenreList(movie.genres)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
        {buildMovieList()}
    </div>
  );
};

export default Movies;
