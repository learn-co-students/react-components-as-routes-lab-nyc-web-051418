import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor=>{
        return(
          <div>
            <h3>{actor.name}</h3>
            {actor.movies.map(movie=> {
                return(<li>{movie}</li>
              )
              })}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
