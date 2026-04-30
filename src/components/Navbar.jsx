// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-blur-bg"></div>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">About</a></li>
        <li className="nav-cta"><a href="mailto:your@email.com">Let's Talk</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;