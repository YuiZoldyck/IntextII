import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div>
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
          </ul>
        </nav>
      </div>
      <div className="navbar-expand-md p-2 color-nav navbar-dark navbarspecial">
        <a>BRIGHAM YOUNG UNIVERSITY</a><br/>
        <a>PROVO,UT 84062, USA</a>
      </div>
    </>
  );
};

export default Navbar;
