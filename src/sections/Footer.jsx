import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_LINKS = [
  { 
    id: 'Instagram', 
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round shrink-0 text-white">
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
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round shrink-0 text-white">
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
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round shrink-0 text-white">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let requestRunning = false;

    const checkScrollPosition = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 200;

      setIsAtBottom(scrollPosition >= threshold);
      requestRunning = false;
    };

    const onScroll = () => {
      if (!requestRunning) {
        window.requestAnimationFrame(checkScrollPosition);
        requestRunning = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    checkScrollPosition();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="fixed bottom-4 left-0 w-full z-[9999] pointer-events-none bg-transparent">
      <div className="w-full relative h-12 flex items-center">
        
        <motion.div 
          layout
          initial={false}
          animate={{
            /* 🎯 Adjusted offset so it shifts slightly more to the left and lands PERFECTLY in the center */
            left: isAtBottom ? '50%' : 'calc(100% - 1.5rem)',
            x: isAtBottom ? '-52%' : '-100%',
            scale: isAtBottom ? 1.08 : 0.95,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 130, 
            damping: 20, 
            mass: 0.8 
          }}
          style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          className="absolute top-0 flex items-center bg-[#2F89FC] border border-white/20 px-4 sm:px-5 h-10 sm:h-11 rounded-2xl pointer-events-auto gap-3 sm:gap-3.5 shadow-2xl will-change-transform overflow-hidden"
        >
          {/* CONNECT NOW TEXT */}
          <AnimatePresence>
            {isAtBottom && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden flex items-center pr-1 border-r border-white/25 shrink-0"
              >
                <span className="whitespace-nowrap text-[11px] sm:text-[12px] font-black uppercase text-white tracking-widest flex items-center gap-1.5 pr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  CONNECT NOW
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SOCIAL LINKS */}
          {SOCIAL_LINKS.map((social, idx) => (
            <React.Fragment key={social.id}>
              <motion.a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.id}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="text-white flex items-center gap-1.5 no-underline py-0.5 px-0.5 cursor-pointer group"
              >
                {social.icon}

                <AnimatePresence>
                  {isAtBottom && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden whitespace-nowrap text-[11px] sm:text-[12px] font-extrabold uppercase text-white tracking-wider"
                    >
                      {social.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>

              {idx < SOCIAL_LINKS.length - 1 && (
                <span className="text-[10px] text-white/40 select-none pointer-events-none font-bold">
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