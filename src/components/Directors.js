import React from 'react';
import { directors } from '../data';
import UUID from 'uuid'

const Directors = () => {

  function buildMovieList(movies) {
    return movies.map(movie => <li key={UUID()}>{movie}</li>)
  }

  function buildDirectorList() {
    return directors.map(director => {
      return (
        <div key={UUID()}>
          <h2>{director.name}</h2>
          Movies:
          <ul>
            {buildMovieList(director.movies)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>

        {buildDirectorList()}
    </div>
  );
}

export default Directors
