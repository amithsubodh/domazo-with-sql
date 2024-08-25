import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h1 className="footer-logo"><a href="#home">Domazo</a></h1>
      <pre>© All rights reserved, Domazo</pre>

      <ul className="social-media">
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
