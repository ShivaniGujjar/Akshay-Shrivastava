import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Editing', id: 'editing' },
  
  { label: 'Direction', id: 'direction' },
  { label: 'Motion design', id: 'motion' },
  { label: 'About me', id: 'about' }
];

export default function Navbar({ onNavigate, activeSection }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 5) setIsVisible(false);
      else if (e.deltaY < -5) setIsVisible(true);
    };

    let touchStart = 0;
    const handleTouchStart = (e) => { touchStart = e.touches[0].clientY; };
    const handleTouchMove = (e) => {
      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;
      if (diff > 10) setIsVisible(false);
      else if (diff < -10) setIsVisible(true);
      touchStart = touchEnd;
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <nav 
      className="portfolio-navbar-fixed"
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '0 1rem',
        boxSizing: 'border-box',
        transform: isVisible ? 'translateY(0)' : 'translateY(-250%)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease-out'
      }}
    >
      <div className="navbar-pill-capsule">
        <div className="navbar-links-track">
          {NAV_ITEMS.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`nav-capsule-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate(item.id);
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