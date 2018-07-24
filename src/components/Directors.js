import React, { Fragment } from 'react';
import { directors } from '../data';

const Directors = () => {

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return <div>
          <p>{director.name}</p>
          {director.movies.map(movie => (
            <p>{movie}</p>
          ))}
        </div>
      })}
    </div>
  );
}

export default Directors
