import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.png" alt="EnviroEarth Logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mission" className="nav-link">
              Mission
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/join-us" className="nav-link join-us">
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
