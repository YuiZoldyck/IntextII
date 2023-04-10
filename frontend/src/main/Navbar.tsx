import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md p-2 color-nav navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/burial" className="nav-link">
            Burial Summary
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/supervised" className="nav-link">
            Supervised Analysis
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/unsupervised" className="nav-link">
            Unsupervised Analysis
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/privacy" className="nav-link">
            Privacy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
