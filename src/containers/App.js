import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div className="path">
        <NavBar />
        <Route exact path="/" render={Home} />
        <Route exact path="/movies" render={Movies} />
        <Route exact path="/directors" render={Directors} />
        <Route exact path="/actors" render={Actors} />
      </div>
    </Router>
  );
};


export default App
