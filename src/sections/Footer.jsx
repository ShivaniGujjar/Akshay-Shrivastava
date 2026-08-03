import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  { 
    id: 'Instagram', 
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round shrink-0 text-[#FFFFFF]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  { 
    id: 'Gmail', 
    name: 'Gmail',
    url: 'mailto:client@email.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round shrink-0 text-[#FFFFFF]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  { 
    id: 'YouTube', 
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] sm:w-[30px] sm:h-[32px] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round shrink-0 text-[#FFFFFF]">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = window.scrollY / totalHeight;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAtCenter = scrollProgress > 0.88;
  const isNameReveal = scrollProgress > 0.94;

  return (
    <footer className="fixed bottom-0 left-0 w-screen max-w-full box-border z-[9999] h-20 pointer-events-none overflow-visible bg-transparent pb-4 sm:pb-6">
      <div className="w-full relative h-full z-[15] overflow-visible">
        
        <motion.div 
          initial={false}
          animate={{
            x: isAtCenter ? 'calc(-50vw + 50%)' : '0px',
            scale: isAtCenter ? 1.05 : 0.95,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 90, 
            damping: 22, 
            mass: 1 
          }}
          style={{ 
            fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            letterSpacing: '-0.5px' 
          }}
          className="absolute right-5 bottom-4 flex items-center justify-center bg-[#144BFF] border border-white/20 px-4 sm:px-5 h-11 sm:h-12 rounded-2xl pointer-events-auto gap-3 sm:gap-4 shadow-xl will-change-transform"
        >
          {/* CONNECT NOW TEXT - ONLY SHOWN WHEN AT CENTER */}
          {isAtCenter && (
            <>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ letterSpacing: '-0.5px' }}
                className="text-[#FFC822] font-black text-xs sm:text-sm uppercase select-none hover:text-[#FFC822] transition-colors"
              >
                Connect Now
              </motion.span>

              <span className="text-[#FFC822] text-xs select-none font-bold">
  •
</span>
            </>
          )}

          {SOCIAL_LINKS.map((social, idx) => (
            <React.Fragment key={social.id}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.id}
                className="text-[#FFFFFF] flex items-center gap-2 no-underline py-1 px-1 cursor-pointer group"
              >
                {social.icon}
                <span 
                  style={{ letterSpacing: '-0.5px' }}
                  className="inline-flex overflow-hidden whitespace-nowrap text-xs sm:text-sm font-black uppercase text-[#FFFFFF] group-hover:text-[#FFC822] transition-colors"
                >
                  {social.name.split('').map((char, charIdx) => (
                    <span
                      key={charIdx}
                      style={{
                        opacity: isNameReveal ? 1 : 0,
                        maxWidth: isNameReveal ? '24px' : '0px',
                        transform: isNameReveal ? 'translateY(0px)' : 'translateY(4px)',
                        transition: `opacity 0.3s ease ${charIdx * 0.03}s, max-width 0.3s ease ${charIdx * 0.03}s, transform 0.3s ease ${charIdx * 0.03}s`
                      }}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </a>
              {idx < SOCIAL_LINKS.length - 1 && (
                <span className="text-xs text-[#FFC822] select-none pointer-events-none font-bold">
  •
</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </footer>
  );
}