import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.style.css";

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <div className="navigation-brand">React</div>
      <div className="navigation-menus">
        <ul className="primary-menus">
          <li className="navigation-item">
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <div className="secondary-menus">
          <div>
            <Link className="navigation-link" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="navigation-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
