import React, { useRef } from 'react';

const COLUMNS = [
  { 
    id: 'editing', 
    title: 'EDITING', 
    subtitle: 'Crafting stories that keep people watching.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4' 
  },
  { 
    id: 'direction', 
    title: 'DIRECTION', 
    subtitle: 'Turning ideas into visual experiences.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4' 
  },
  { 
    id: 'motion', 
    title: 'MOTION DESIGN', 
    subtitle: 'Adding motion that brings stories to life.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4' 
  },
  { 
    id: 'about', 
    title: 'ABOUT ME', 
    subtitle: 'The person behind the projects.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4' 
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
      
      {/* 🎨 LOCAL FONT DECLARATION & HANDWRITTEN ACCENT FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        @font-face {
          font-family: 'RoseryStudio';
          src: url('/RoseryStudio-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* 🎬 GLOBAL CORNER VIGNETTE SHADOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.85)_100%)] pointer-events-none z-[12]" />
      
      {/* 4-COLUMN FLEX GRID */}
      <div className="flex flex-row items-stretch w-[calc(100vw+135px)] h-full [mask-image:url('/home-mask-desktop.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat]">
        {COLUMNS.map((col, index) => {
          const zIndices = ['z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'];
          const isMaskedCol = index < 3;
          const isAboutMe = col.id === 'about';

          return (
            <div
              key={col.id}
              className={`group relative h-full w-[25%] shrink-0 min-w-0 cursor-pointer overflow-hidden ${zIndices[index]} ${
                isMaskedCol 
                  ? 'pr-[45px] -mr-[45px] [mask-image:url(\'/home-mask-desktop.svg\')] [mask-size:auto_100vh] [mask-repeat:no-repeat] [mask-position:right_center] [filter:drop-shadow(-12px_0_15px_rgba(0,0,0,0.85))]' 
                  : 'grow'
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

              {/* 🔤 TEXT BLOCK (ABOUT ME MEIN RIGHT MARGIN / PADDING ADD KIYA HAI) */}
              <div 
                className={`absolute inset-x-0 top-[58%] z-20 flex flex-col items-center justify-start text-center pointer-events-none mx-auto max-w-[95%] ${
                  isAboutMe ? 'pr-8 sm:pr-12 md:pr-16 pl-2' : 'px-2'
                }`}
              >

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