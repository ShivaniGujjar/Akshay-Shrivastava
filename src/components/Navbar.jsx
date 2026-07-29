import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Editing', id: 'editing' },
  { label: 'Direction', id: 'direction' },
  { label: 'Motion design', id: 'motion' },
  { label: 'About me', id: 'about' }
];

export default function Navbar({ onNavigate, activeSection }) {
  const [isVisible, setIsVisible] = useState(true);
  const isHome = activeSection === 'home';

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
    <header 
      className={`fixed top-6 left-0 w-full flex items-center justify-between z-[9999] px-6 sm:px-10 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-[250%] opacity-0'
      }`}
    >
      {/* 🏠 LEFT: MATCHING ROYAL BLUE GLASS HOME BUTTON */}
      <div className="pointer-events-auto">
        {!isHome && (
          <button
            onClick={() => {
              if (onNavigate) onNavigate('home');
            }}
            aria-label="Go to Home"
            className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] flex items-center justify-center rounded-full bg-[#2b66e3]/90 text-white border border-white/25 backdrop-blur-md transition-all duration-300 ease-out shadow-[0_10px_30px_rgba(43,102,227,0.35)] hover:shadow-[0_15px_40px_rgba(43,102,227,0.5)] hover:text-amber-300 hover:scale-110 cursor-pointer"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
        )}
      </div>

      {/* 🧭 CENTER / RIGHT: SECTION NAVIGATION PILL */}
      <div className="pointer-events-auto bg-[#2b66e3]/90 border border-white/25 px-5 py-2 sm:px-8 sm:py-2.5 rounded-full flex items-center shadow-[0_10px_30px_rgba(43,102,227,0.35)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_40px_rgba(43,102,227,0.5)] hover:border-white/40">
        <div className="flex items-center gap-2 sm:gap-3.5">
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
                  className={`font-['Denebola','Dekko','Architects_Daughter','Comic_Sans_MS',sans-serif] text-[12px] sm:text-[14px] capitalize tracking-wide font-bold px-1.5 py-0.5 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-amber-300 scale-105 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)] underline underline-offset-4 decoration-2 decoration-amber-300 font-extrabold' 
                      : 'text-white/90 hover:text-amber-300 hover:scale-105'
                  }`}
                >
                  {item.label}
                </a>

                {idx < NAV_ITEMS.length - 1 && (
                  <span className="font-sans text-[10px] sm:text-[12px] font-bold text-white/50 select-none pointer-events-none -translate-y-[0.5px]">
                    •
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Spacer div to keep the centered pill perfectly balanced when Home button is visible */}
      <div className="w-[44px] sm:w-[48px] hidden sm:block pointer-events-none" />
    </header>
  );
}