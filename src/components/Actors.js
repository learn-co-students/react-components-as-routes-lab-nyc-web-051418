import React from 'react';
import { actors } from '../data';
import UUID from 'uuid'

const Actors = () => {
  function buildMovieList(movies) {
    return movies.map(movie => <li key={UUID()}>{movie}</li>)
  }

  function buildActorList() {
    return actors.map(actor => {
      return (
        <div key={UUID()}>
          <h2>{actor.name}</h2>
          Movies:
          <ul>
            {buildMovieList(actor.movies)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {buildActorList()}
    </div>
  );
};

export default Actors;
