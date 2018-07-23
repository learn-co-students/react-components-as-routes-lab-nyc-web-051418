import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width: '100px',
    padding: '5px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    
  }
  
  return (
    <div className="navbar">
    <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'green'
        }}
      >Home</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'green'
        }}
      >Actors</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: 'green'
        }}
      >Directors</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'green'
        }}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;
