import React from 'react';
import './Footer.css';

const SOCIAL_LINKS = [
  
  
  { id: 'Instagram', label: 'Instagram', url: 'https://instagram.com' },
  { id: 'Gmail', label: 'Mail', url: 'mailto:client@email.com' },
  { id: 'LinkedIn', label: 'YouTube', url: 'https://youtube.com' }
];

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content-wrapper">
        {/* Only Centered Social Handles Grid Area */}
        <div className="footer-social-zone">
          {SOCIAL_LINKS.map((social, idx) => (
            <React.Fragment key={social.id}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                {social.label}
              </a>
              {idx < SOCIAL_LINKS.length - 1 && (
                <span className="footer-dot-separator">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}