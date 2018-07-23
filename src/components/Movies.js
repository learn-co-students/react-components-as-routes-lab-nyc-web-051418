import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  console.log("Movie Props:", props)
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map( (movie) => {
            return <div>{movie.title} {movie.time} {movie.genres.map( (genre) => {
              return <ul>{genre}</ul>
            })}</div>
          })
        }
    </div>
  );
};

export default Movies;
