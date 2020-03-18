import React from 'react';
import { Route, Switch } from "react-router-dom";
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
import CityDetails from './pages/CityDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';

const store = configureStore()

function Main() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city" component={City} />
            <Route exact path="/city/:id" component={CityDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="*" component={Home} />
          </Switch>
          <Footer />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default Main;
