import React, { useRef } from 'react';

const COLUMNS = [
  { 
    id: 'editing', 
    title: 'EDITING', 
    subtitle: 'Crafting stories that keep people watching.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4' 
  },
  { 
    id: 'motion', 
    title: 'MOTION DESIGN', 
    subtitle: 'Adding motion that brings stories to life.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785674839/Perfectionism_compressed_isgrjo.mp4' 
  },
  { 
    id: 'direction', 
    title: 'DIRECTION', 
    subtitle: 'Turning ideas into visual experiences.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678011/Ifolder_with_grade_final_lzq260.mp4' 
  },
  { 
    id: 'about', 
    title: 'ABOUT ME', 
    subtitle: 'The person behind the projects.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678044/After_effects_compressed_jxplaf.mp4' 
  }
];

export default function Hero({ onColumnClick }) {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="w-full h-screen bg-[#08080a] overflow-hidden relative m-0 p-0 select-none">
      
      {/* 🎨 FONT DECLARATIONS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        @font-face {
          font-family: 'RoseryStudio';
          src: url('/RoseryStudio-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* ORGANIC TORN PAPER OVERLAP MASK (NO STRAIGHT LINES) */
        .organic-torn-mask {
          mask-image: url('/home-mask-desktop.svg');
          -webkit-mask-image: url('/home-mask-desktop.svg');
          mask-size: auto 100vh;
          -webkit-mask-size: auto 100vh;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: right center;
          -webkit-mask-position: right center;
        }
      `}</style>

      {/* 🎬 GLOBAL CORNER VIGNETTE SHADOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.85)_100%)] pointer-events-none z-[12]" />
      
      {/* EXPANDED CONTAINER WITH SEAMLESS OVERLAP TO ELIMINATE STRAIGHT LINES */}
      <div className="flex flex-row items-stretch w-[calc(100vw+140px)] h-full relative z-[1]">
        {COLUMNS.map((col, index) => {
          const zIndices = ['z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'];
          const isTornCol = index < 3;

          // Custom Widths matching sequence: Editing (23%), Motion (27%), Direction (27%), About Me (23%)
          const columnWidths = ['w-[23%]', 'w-[27%]', 'w-[27%]', 'w-[23%]'];

          return (
            <div
              key={col.id}
              className={`group relative h-full ${columnWidths[index]} shrink-0 min-w-0 cursor-pointer overflow-hidden ${zIndices[index]} ${
                isTornCol ? 'organic-torn-mask pr-[50px] -mr-[50px] [filter:drop-shadow(-15px_0_20px_rgba(0,0,0,0.95))]' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => onColumnClick && onColumnClick(col.id)}
            >
              {/* 🎥 Background Video */}
              <video
                key={col.videoUrl}
                ref={(el) => {
                  videoRefs.current[index] = el;
                  if (el) el.load();
                }}
                loop
                muted
                playsInline
                preload="auto"
                src={col.videoUrl}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.55] contrast-[1.1] grayscale group-hover:grayscale-0 group-hover:brightness-[0.85] transition-all duration-700 ease-out group-hover:scale-[1.03] z-0"
              />

              {/* Bottom Text Protection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-60" />

              {/* 🎞️ ULTRA SUBTLE NOISE OVERLAY */}
              <div className="absolute inset-0 bg-[url('/noise.gif')] bg-repeat opacity-[0.05] pointer-events-none z-15 mix-blend-overlay" />

              {/* 🔤 TEXT BLOCK (FIXED CENTERED ALIGNMENT FOR ALL COLUMNS - SLIGHT LEFT SHIFT FOR EDITING) */}
              <div className={`absolute inset-x-0 top-[58%] z-20 flex flex-col items-center justify-start text-center pointer-events-none mx-auto max-w-[95%] px-2 ${index === 0 ? '-translate-x-3' : ''}`}>

                {/* Main Heading */}
                <h1 
                  style={{ 
                    fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif", 
                    fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)',
                    letterSpacing: '0.03em'
                  }}
                  className="text-white uppercase tracking-tight leading-[1.0] drop-shadow-[0_8px_16px_rgba(0,0,0,0.95)] transition-all duration-300 group-hover:text-amber-300 mb-2.5 font-normal"
                >
                  {col.title}
                </h1>

                {/* Subtitle Description */}
                <p 
                  style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
                  className="text-neutral-300 text-xs sm:text-sm font-normal max-w-[160px] sm:max-w-[200px] leading-tight transition-colors duration-300 group-hover:text-white"
                >
                  {col.subtitle}
                </p>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}