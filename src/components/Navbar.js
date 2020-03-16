import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { isAuthenticated, authenticatedUser } from '../reducers'
import { userLogout } from  '../actions/auth'

//import logo from '../assets/img/logo-test.png';

function NavBar(props) {
  useEffect(() => {
    console.log(props);
  });
  const log_out = () => {
    props.onLogOut();
  }
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Company Logo" width="112" height="28" />
        </a>

        <a 
          href={void(0)}
          onClick={() => setisActive(!isActive) }
          role="button" 
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" 
      className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/city" className="navbar-item">
            Ciudades
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href={void(0)} className={`button is-primary ${props.isAuthenticated ? 'is-hidden' : ''}`}>
                <strong>Sign up</strong>
              </a>
              <Link to="/login" className={`button is-light ${props.isAuthenticated ? 'is-hidden' : ''}`}>
                Log in
              </Link>
              <div className={`navbar-item has-dropdown is-hoverable ${props.isAuthenticated ? '' : 'is-hidden'}`}>
                <a href={void(0)} className="navbar-link">
                  Más
                </a>

                <div className="navbar-dropdown is-right">
                  <a href={void(0)} className="navbar-item">
                    Perfil
                  </a>
                  <hr className="navbar-divider" />
                  <a href={void(0)} className="navbar-item" onClick={() => log_out()}>
                    Cerrar Sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
  authenticatedUser: authenticatedUser(state)
})
const mapDispatchToProps = (dispatch) => ({
  onLogOut: () => {
    dispatch(userLogout())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);