import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Smart ID Portal</div>

      <ul className="nav-links">
        <li>
          <Link to="/login" className="login-btn">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
