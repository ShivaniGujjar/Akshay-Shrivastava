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
        
        {/* LEFT: NAME LOGO WITH INCREASED SIZE & BLUE STROKE */}
        <a 
          href="/"
          onClick={handleHomeClick}
          className="pointer-events-auto flex items-center gap-1.5 select-none cursor-pointer group transition-transform duration-200 hover:scale-105"
        >
          <span 
            style={{ 
              fontFamily: "'Permanent Marker', cursive, sans-serif",
              WebkitTextStroke: '1px #144bff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(20,75,255,0.4)'
            }}
            className="text-[#e6dec9] text-lg sm:text-xl tracking-wide transition-colors group-hover:text-white"
          >
            akshay shrivastav
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#144bff] inline-block mb-0.5 animate-pulse shadow-[0_0_6px_#144bff]" />
        </a>

        {/* CENTER: CAPSULE NAVIGATION */}
        <div className="pointer-events-auto bg-[#144bff] border border-white/20 px-4 h-10 rounded-xl flex items-center justify-center gap-2 shadow-xl">
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
                  style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
                  className={`relative inline-flex items-center text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer h-full px-1 ${
                    isActive ? 'text-white font-bold scale-105' : 'text-[#e6dec9] hover:text-white'
                  }`}
                >
                  <span className="translate-y-[1px] leading-none">{item.label}</span>
                </a>

                {idx < NAV_ITEMS.length - 1 && (
                  <span className="text-[#e6dec9]/40 text-xs leading-none select-none pointer-events-none px-0.5 translate-y-[1px] flex items-center">•</span>
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
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            className="bg-[#144bff] hover:bg-[#103ce6] text-[#e6dec9] hover:text-white border border-white/20 px-4 h-10 rounded-xl text-xs sm:text-sm font-medium tracking-wide flex items-center gap-1.5 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
          >
            <span className="translate-y-[1px] leading-none">Let's Connect ↗</span>
          </a>
        </div>

      </div>
    </header>
  );
}