import React, { useState } from "react";
import { Link } from "react-router-dom";

//import logo from '../assets/img/logo-test.png';

function NavBar() {
  const correctPage = () => {
    return 'none';
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
            Documentation
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href={void(0)} className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a href={void(0)} className="navbar-item">
                About
              </a>
              <a href={void(0)} className="navbar-item">
                Jobs
              </a>
              <a href={void(0)} className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a href={void(0)} className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href={void(0)} className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <Link to="/login"  className="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;