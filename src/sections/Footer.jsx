import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SOCIAL_LINKS = [
  { 
    id: 'Instagram', 
    url: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  { 
    id: 'Gmail', 
    url: 'mailto:client@email.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  { 
    id: 'YouTube', 
    url: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function Footer() {
  const { scrollYProgress } = useScroll();

  const socialX = useTransform(scrollYProgress, [0.92, 1], [0, -window.innerWidth / 2.7 + 25]);
  const socialScale = useTransform(scrollYProgress, [0.92, 1], [1, 1.45]);
  const socialY = useTransform(scrollYProgress, [0.92, 1], [0, -10]);

  const badgeX = useTransform(scrollYProgress, [0.92, 1], [0, window.innerWidth / 2.7 - 15]);
  const badgeScale = useTransform(scrollYProgress, [0.92, 1], [1, 1.35]);
  const badgeY = useTransform(scrollYProgress, [0.92, 1], [0, -78]);

  return (
    <footer className="fixed bottom-0 left-0 w-screen max-w-full box-border z-[9999] h-80 sm:h-96 px-4 sm:px-8 md:px-12 pointer-events-none flex items-end pb-10">
      <div className="w-full flex items-center justify-between relative">
        
        {/* 🟢 BOTTOM-LEFT: AVAILABLE FOR WORK BADGE (Hover scale effect removed) */}
        <motion.div 
          style={{ 
            x: badgeX, 
            scale: badgeScale, 
            y: badgeY,
            fontFamily: "'GourmetEatery', cursive, sans-serif" 
          }}
          className="pointer-events-auto flex items-center gap-2 px-3.5 h-9 rounded-lg bg-[#144bff] text-white border border-white/20 backdrop-blur-md shadow-xl text-xs sm:text-sm font-medium tracking-wide cursor-pointer origin-left"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
          <span className="uppercase text-white translate-y-[1px]">
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* 🌐 BOTTOM-RIGHT: SOCIAL LINKS CONTAINER */}
        <motion.div 
          style={{ x: socialX, scale: socialScale, y: socialY }}
          className="flex items-center justify-center bg-[#144bff] border border-white/20 px-5 h-11 sm:h-12 rounded-xl shadow-2xl backdrop-blur-md pointer-events-auto transition-all duration-300 gap-4 origin-right"
        >
          {SOCIAL_LINKS.map((social, idx) => (
            <React.Fragment key={social.id}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.id}
                className="text-white flex items-center justify-center no-underline transition-all duration-200 ease-out p-1.5 cursor-pointer hover:scale-125"
              >
                {social.icon}
              </a>
              {idx < SOCIAL_LINKS.length - 1 && (
                <span className="text-xs text-white/50 select-none pointer-events-none">
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