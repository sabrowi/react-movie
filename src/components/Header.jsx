import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav p-2">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/avengers" className="nav-link">
                Avengers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/star-wars" className="nav-link">
                Star Wars
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
