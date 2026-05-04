import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`studio-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Decorative Corners */}
        <div className="nav-frame-corner tl"></div>
        <div className="nav-frame-corner tr"></div>
        <div className="nav-frame-corner bl"></div>
        <div className="nav-frame-corner br"></div>

        {/* Branding */}
        <div className="nav-logo">
          <span className="logo-main">AKSHAY SHRIVASTAVA</span>
          <span className="logo-tag">CREATIVE EDITOR</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {/* Normal Hover Links */}
          <a href="#work" className="nav-link-standard">WORK</a>
          <a href="#about" className="nav-link-standard">ABOUT</a>
          
          {/* Only Button gets the Rolling Animation */}
          <a href="#contact" className="talk-btn roll-link">
            <div className="roll-container">
              <span className="roll-text primary">INITIATE TALK</span>
              <span className="roll-text secondary">INITIATE TALK</span>
            </div>
          </a>
        </div>

        {/* Hamburger Toggle */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar top"></div>
          <div className="bar mid"></div>
          <div className="bar bot"></div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <div className="mobile-content">
              <a href="#work" onClick={() => setIsMenuOpen(false)}>WORK</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
              <a href="#contact" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>INITIATE TALK</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;