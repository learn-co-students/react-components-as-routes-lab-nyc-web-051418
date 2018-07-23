import React, { Fragment } from 'react';
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
        <Fragment>
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exat path="/movies" component={Movies} />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/directors" component={Directors} />
        </Fragment>
      </Router>
  );
};

export default App
