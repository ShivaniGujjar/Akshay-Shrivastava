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
      className={`fixed top-4 left-0 w-full z-[9999] px-4 sm:px-8 md:px-12 pointer-events-none transition-all duration-400 ease-out ${
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
            style={{ fontFamily: "'GourmetEatery', cursive, sans-serif" }}
            className="text-amber-400 text-base sm:text-lg tracking-wide transition-colors group-hover:text-amber-300 drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)]"
          >
            akshay shrivastav
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block mb-0.5 shadow-[0_0_8px_#fcd34d]" />
        </a>

        {/* CENTER: CAPSULE NAVIGATION */}
        <div className="pointer-events-auto bg-[#0a0a0c]/85 border border-white/10 px-4 h-9 rounded-lg flex items-center justify-center gap-2 backdrop-blur-md shadow-xl">
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
                  style={{ fontFamily: "'GourmetEatery', cursive, sans-serif" }}
                  className={`relative inline-flex items-center text-xs sm:text-sm tracking-normal transition-colors duration-200 cursor-pointer h-full ${
                    isActive ? 'text-amber-300 font-medium' : 'text-white hover:text-amber-400'
                  }`}
                >
                  <span className="translate-y-[1.5px] leading-none">{item.label}</span>
                </a>

                {idx < NAV_ITEMS.length - 1 && (
                  <span className="text-white/40 text-xs leading-none select-none pointer-events-none px-0.5 translate-y-[0.5px] flex items-center">•</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* RIGHT: CONNECT BUTTON */}
        <div className="pointer-events-auto">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('connect');
            }}
            style={{ fontFamily: "'GourmetEatery', cursive, sans-serif" }}
            className="bg-[#0a0a0c]/85 border border-white/15 text-amber-400 hover:text-amber-300 hover:border-amber-400/30 px-3.5 h-9 rounded-lg text-xs sm:text-sm font-medium tracking-wide flex items-center gap-1.5 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
          >
            <span className="translate-y-[1px] leading-none">Let's Connect ↗</span>
          </a>
        </div>

      </div>
    </header>
  );
}