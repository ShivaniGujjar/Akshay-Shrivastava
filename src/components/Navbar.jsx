import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Editing', id: 'editing' },
  { label: 'Motion design', id: 'motion' },
  { label: 'Direction', id: 'direction' },
  { label: 'About me', id: 'about' }
];

export default function Navbar({ onNavigate, activeSection }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Mouse wheel handler (For desktop)
    const handleWheel = (e) => {
      if (e.deltaY > 5) {
        setIsVisible(false); // User scrolled down -> Hide
      } else if (e.deltaY < -5) {
        setIsVisible(true);  // User scrolled up -> Show
      }
    };

    // 2. Touch movement handler (For mobile)
    let touchStart = 0;
    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;

      if (diff > 10) {
        setIsVisible(false); // Swiped down -> Hide
      } else if (diff < -10) {
        setIsVisible(true);  // Swiped up -> Show
      }
      touchStart = touchEnd;
    };

    // Attach to window globally but catches input no matter where the overflow is locked
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
        top: '1.25rem',
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
        transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s ease-out'
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