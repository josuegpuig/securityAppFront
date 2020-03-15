import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './assets/sass/main.scss';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import City from './pages/City';

function Main() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={City} />
        {/* <Route exact path="/login" component={Login} />
        <Footer /> */}
      </Router>
    </div>
  );
}

export default Main;
