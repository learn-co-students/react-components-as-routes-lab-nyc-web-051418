import React, { Fragment } from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return <div>
          <p>Title: {movie.title}</p>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map(genre => (
              <p>{genre}</p>
            ))}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
