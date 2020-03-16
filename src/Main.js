import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore from './configureStore'
import { history } from "./history";
import PrivateRoute from './containers/PrivateRoute';
//import logo from './logo.svg';
import './assets/sass/main.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import City from './pages/City';
import Login from './pages/Login';

const store = configureStore()

function Main() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/city" component={City} />
          <Route exact path="/login" component={Login} />
          <Footer />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default Main;
