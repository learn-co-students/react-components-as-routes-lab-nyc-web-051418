import React from 'react';
import { actors } from '../data';
import UUID from 'uuid';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(
        (actor) => (
          <div key={UUID()}>
            {actor.name}
            <ul>
              {actor.movies.map(item =>
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
}

export default Actors
