import React from 'react';
import { Link } from "react-router-dom";




export default class Navbar extends React.Component<any, any> {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/home/">
              <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup/">
              <a className="nav-link">Register</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login/">
              <a className="nav-link">Log in</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
}