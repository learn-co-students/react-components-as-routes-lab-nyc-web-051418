import React from 'react';
import { directors } from '../data';
import UUID from 'uuid';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(
        (director) => (
          <div key={UUID()}>
            {director.name}
            <ul>
              {director.movies.map(item =>
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

export default Directors
