import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  const { pathname } = useLocation();
  const getClassName = (path) => {
    return `nav-link${pathname === path ? "-active" : ""}`;
  };

  return (
    <div className="navbar-container">
      <Link to="/" className="home-icon">
        <i className="fas fa-utensils fa-2x"></i>
      </Link>
      <div className="links-container">
        <Link to="/" className={getClassName("/")}>
          Home
        </Link>
        <Link to="/search" className={getClassName("/search")}>
          Search
        </Link>
        <Link to="/contact" className={getClassName("/contact")}>
          Contact
        </Link>
      </div>
      <div className="social-media-container-header">
        <a href="https://github.com/FlorenciaPetrone" target="_blank">
          <i className="fab fa-github-square fa-1x" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/florencia-petrone/"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-1x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
