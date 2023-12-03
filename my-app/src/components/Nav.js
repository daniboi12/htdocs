import React from 'react'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
      <div className="row sticky-top">
        <div className="col p-0">
          <nav
            className="navbar navbar-custom navbar-expand-md navbar-light shadow-sm rounded"
            id="navbar"
          >
            <div className="container">
              <Link to="/" className="navbar-brand mb-0 h1 logo">
                <img
                  className="logoImg d-inline-block"
                  src={logo}
                  alt="logo"
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarMenu"
              >
                <ul className="navbar-nav text-center">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-white">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle text-white"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      STORIES
                    </a>
                    <ul
                      className="dropdown-menu text-center"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/Stories" className="dropdown-item">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Mini Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          Recipes
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="./calendar1.php" className="nav-link text-white">
                      CALENDAR
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link text-white">
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item d-md-none">
                    <a href="./contact.php" className="nav-link text-white">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>

              <div className="buttonCont d-none d-md-block">
                <a href="./contact.php" className="navButton">
                  CONTACT
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
  );
}
