import React from 'react';
import { movies } from '../data';
import UUID from 'uuid'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(
        (movie) => (
          <div key={UUID()}>
            {movie.title} {movie.time}
            <ul>
              {movie.genres.map(item =>
                <li key={UUID()}>{item}</li>
                )
              }
            </ul>
          </div>
          )
        )
      }
    </div>
  );
};

export default Movies;
