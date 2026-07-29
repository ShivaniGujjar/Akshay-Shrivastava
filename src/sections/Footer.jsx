import React from 'react';

const SOCIAL_LINKS = [
  { 
    id: 'Instagram', 
    url: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
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
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  { 
    id: 'YouTube', 
    url: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="fixed bottom-[20px] sm:bottom-[24px] left-0 w-full px-4 sm:px-8 z-[9999] pointer-events-none flex flex-col sm:flex-row items-center justify-between gap-3">
      
      {/* 🟢 BOTTOM-LEFT: AVAILABILITY STATUS PILL */}
      <div className="pointer-events-auto flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#2b66e3]/90 text-white border border-white/25 backdrop-blur-md shadow-[0_10px_30px_rgba(43,102,227,0.35)] font-['Comic_Sans_MS',sans-serif] text-[11px] sm:text-xs font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-[0_15px_40px_rgba(43,102,227,0.5)] hover:border-white/40">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <span>Available for Work</span>
      </div>

      {/* 🌐 BOTTOM-RIGHT: SOCIAL LINKS BAR */}
      <div className="flex items-center justify-center bg-[#2b66e3]/90 border border-white/25 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full shadow-[0_10px_30px_rgba(43,102,227,0.35)] backdrop-blur-md pointer-events-auto relative transition-all duration-300 gap-3 sm:gap-3.5 hover:shadow-[0_15px_40px_rgba(43,102,227,0.5)] hover:border-white/40">
        {SOCIAL_LINKS.map((social, idx) => (
          <React.Fragment key={social.id}>
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.id}
              className="text-white flex items-center justify-center no-underline transition-all duration-200 ease-out p-1 cursor-pointer hover:text-amber-300 hover:scale-125 hover:drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]"
            >
              {social.icon}
            </a>
            {idx < SOCIAL_LINKS.length - 1 && (
              <span className="font-sans text-[10px] sm:text-[12px] font-bold text-white/50 select-none pointer-events-none -translate-y-[0.5px]">
                •
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

    </footer>
  );
}