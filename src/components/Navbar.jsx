import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Editing', id: 'editing' },
  { label: 'Motion Design', id: 'motion' },
  { label: 'Direction', id: 'direction' },
  { label: 'About Me', id: 'about' }
];

export default function Navbar({ onNavigate, activeSection = 'editing' }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 5) setIsVisible(false);
      else if (e.deltaY < -5) setIsVisible(true);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header 
      className={`fixed top-4 left-0 w-screen max-w-full box-border z-[9999] px-4 sm:px-8 md:px-12 pointer-events-none transition-all duration-400 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'
      }`}
    >
      <div className="w-full flex items-center justify-between">
        
        {/* LEFT: NAME LOGO */}
        <a 
          href="/"
          onClick={handleHomeClick}
          className="pointer-events-auto flex items-center gap-1.5 select-none cursor-pointer group transition-transform duration-200 hover:scale-105"
        >
          <span 
            style={{ 
              fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 'bold',
              letterSpacing: '-0.5px',
              WebkitTextStroke: '1px #2F89FC',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(47,137,252,0.4)'
            }}
            className="text-[#2F89FC] text-base sm:text-lg tracking-wide transition-colors duration-200 hover:text-[#B39322]"
          >
            akshay shrivastav
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F89FC] inline-block mb-0.5 animate-pulse shadow-[0_0_6px_#2F89FC]" />
        </a>

        {/* CENTER: CAPSULE NAVIGATION (MATCHED TO HERO LAYOUT) */}
        <div className="pointer-events-auto bg-[#2F89FC] border border-white/20 px-2.5 h-9 rounded-lg flex items-center justify-center gap-0.5 shadow-xl backdrop-blur-md">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.id;

            return (
              <React.Fragment key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(item.id);
                  }}
                  style={{ 
                    fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", 
                    fontWeight: 500,
                    letterSpacing: '-0.3px'
                  }}
                  className={`relative inline-flex items-center text-xs sm:text-sm uppercase transition-all duration-200 cursor-pointer h-full px-2 text-white hover:text-[#B39322] ${
                    isActive ? 'text-[#B39322] font-bold' : ''
                  }`}
                >
                  <span className="translate-y-[1px] leading-none">{item.label}</span>
                </a>

                {idx < NAV_ITEMS.length - 1 && (
                  <span className="text-white/40 text-[10px] leading-none select-none pointer-events-none translate-y-[0.5px] flex items-center mx-0.5">•</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* RIGHT: CONNECT BUTTON (MATCHED TO HERO LAYOUT) */}
        <div className="pointer-events-auto">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('connect');
            }}
            style={{ 
              fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif", 
              fontWeight: 500,
              letterSpacing: '-0.3px'
            }}
            className="bg-[#2F89FC] hover:bg-[#2575dc] text-white hover:text-[#B39322] border border-white/20 px-3.5 h-9 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
          >
            <span className="translate-y-[1px] leading-none">Let's Connect ↗</span>
          </a>
        </div>

      </div>
    </header>
  );
}