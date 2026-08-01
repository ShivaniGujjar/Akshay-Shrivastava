import React from 'react';

const SOCIAL_LINKS = [
  { 
    id: 'Instagram', 
    url: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
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
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  { 
    id: 'YouTube', 
    url: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-0 w-full px-4 sm:px-8 z-[9999] pointer-events-none flex items-center justify-between">
      
      {/* 🟢 BOTTOM-LEFT: AVAILABLE FOR WORK BADGE */}
      <div 
        style={{ fontFamily: "'GourmetEatery', cursive, sans-serif" }}
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0a0a0c]/85 text-white border border-white/10 backdrop-blur-md shadow-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:border-amber-400/30 group cursor-pointer"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fcd34d]" />
        <span className="uppercase text-neutral-200 transition-colors group-hover:text-amber-400">
          AVAILABLE FOR WORK
        </span>
      </div>

      {/* 🌐 BOTTOM-RIGHT: SOCIAL LINKS CONTAINER */}
      <div className="flex items-center justify-center bg-[#0a0a0c]/85 border border-white/10 px-4 py-2 rounded-lg shadow-xl backdrop-blur-md pointer-events-auto transition-all duration-300 gap-3 hover:border-amber-400/30">
        {SOCIAL_LINKS.map((social, idx) => (
          <React.Fragment key={social.id}>
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.id}
              className="text-neutral-300 flex items-center justify-center no-underline transition-all duration-200 ease-out p-1 cursor-pointer hover:text-amber-400 hover:scale-125"
            >
              {social.icon}
            </a>
            {idx < SOCIAL_LINKS.length - 1 && (
              <span className="text-[10px] text-neutral-600 select-none pointer-events-none">
                •
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

    </footer>
  );
}