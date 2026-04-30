import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
import './Footer.css';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "shivanibuttargujjar@gmail.com"; 

  const handleContactClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="cta-wrapper"
        >
          <h2 className="footer-title">
            Let's craft <br />
            <span className="text-outline-gradient">the next viral hit.</span>
          </h2>
          
          <div className="contact-btn-wrapper">
            <a 
              href={`mailto:${email}`} 
              className="big-contact-link"
              onClick={handleContactClick}
            >
              Contact Akshay
              <div className="link-underline"></div>
              
              <AnimatePresence>
                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 35 }} 
                    exit={{ opacity: 0, y: 20 }}
                    className="copy-feedback-container"
                  >
                    <span className="copy-feedback-text">Email Copied!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p className="copyright-text">© 2026 AKSHAY SHRIVASTAVA</p>
          
          <div className="social-icons-wrapper">
            <a href="#" className="social-icon-box" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon-box" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon-box" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-ambient-glow"></div>
    </footer>
  );
};

export default Footer;