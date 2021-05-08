import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media-container">
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
      <p>© 2021 Florencia Petrone. All rights reserved.</p>
    </div>
  );
};

export default Footer;
