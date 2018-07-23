import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div>
            <h3>Name: {actor.name}</h3>
            <p>Movies:</p>
            {actor.movies.map(movie => {
              return (
                <li>{movie}</li>
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
