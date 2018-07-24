import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return <ul>{actors.map(actor => <li>{actor.name}</li>)}</ul>;
};

export default Actors;
