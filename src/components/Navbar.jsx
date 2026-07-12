import React from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Editing', id: 'editing' },
  { label: 'Motion design', id: 'motion' },
  { label: 'Direction', id: 'direction' },
  { label: 'About me', id: 'about' }
];

export default function Navbar({ onNavigate, activeSection }) {
  return (
    <nav className="portfolio-navbar-fixed">
      <div className="navbar-pill-capsule">
        <div className="navbar-links-track">
          {NAV_ITEMS.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`nav-capsule-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate(item.id); /* 🔥 Triggers routing switcher */
                }}
              >
                {item.label}
              </a>
              {idx < NAV_ITEMS.length - 1 && (
                <span className="nav-accent-divider">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}