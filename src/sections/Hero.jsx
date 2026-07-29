import React, { useRef } from 'react';

const COLUMNS = [
  { 
    id: 'editing', 
    title: 'Editing', 
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4' 
  },
  { 
    id: 'direction', 
    title: 'Direction', 
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4' 
  },
  { 
    id: 'motion', 
    title: 'Motion Design', 
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4' 
  },
  { 
    id: 'about', 
    title: 'About me', 
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4' 
  }
];

export default function Hero({ onColumnClick }) {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch((err) => console.log("Playback interrupted:", err));
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="w-full h-screen bg-black overflow-hidden relative m-0 p-0 select-none">
      
      {/* STATIC ROUGH SHADER MATRIX */}
      <svg className="absolute w-0 h-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="static-pencil-tear">
          <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* FULL-SCREEN 4-COLUMN FLEX GRID */}
      <div className="flex flex-row items-stretch w-[calc(100vw+135px)] h-full [mask-image:url('/home-mask-desktop.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat]">
        {COLUMNS.map((col, index) => {
          const zIndices = ['z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'];
          const isMaskedCol = index < 3;

          return (
            <div
              key={col.id}
              className={`group relative h-full w-[25%] shrink-0 min-w-0 cursor-pointer overflow-hidden ${zIndices[index]} ${
                isMaskedCol 
                  ? 'pr-[45px] -mr-[45px] [mask-image:url(\'/home-mask-desktop.svg\')] [mask-size:auto_100vh] [mask-repeat:no-repeat] [mask-position:right_center]' 
                  : 'grow'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => {
                if (onColumnClick) onColumnClick(col.id);
              }}
            >
              {/* Background Cinematic Video Loop (Guaranteed 100% Fill) */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.5] contrast-[1.05] grayscale transition-all duration-[800ms] cubic-[bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:brightness-[0.7] group-hover:grayscale-0 z-0"
              >
                <source src={col.videoUrl} type="video/mp4" />
              </video>

              {/* GRANULAR NOISE OVERLAY */}
              <div 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-[url('/noise.gif')] bg-[size:160px_160px] bg-repeat mix-blend-soft-light opacity-20 transition-opacity duration-500 group-hover:opacity-0" 
              />

              {/* TYPOGRAPHY CONTENT LINK OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center z-20 px-4 text-center">
                <h1 className="font-['Comic_Sans_MS','Chalkboard_SE',sans-serif] text-white text-2xl sm:text-3xl md:text-4xl font-[950] uppercase tracking-wider leading-snug drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:text-amber-400 group-hover:scale-105 relative px-6 py-3 before:content-[''] before:absolute before:-inset-x-3 before:-inset-y-1.5 before:border-[3.5px] before:border-white before:border-b-[4.5px] before:border-l-[2.5px] before:bg-transparent before:rounded-[48%_52%_47%_53%/43%_40%_60%_57%] before:opacity-0 before:pointer-events-none before:[filter:url('#static-pencil-tear')] before:[mask-image:conic-gradient(from_-90deg,#000_0%,transparent_0%)] group-hover:before:opacity-100 group-hover:before:animate-[notebookPenCircleReveal_0.5s_cubic-bezier(0.4,0,0.2,1)_forwards]">
                  {col.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Embedded Keyframes for Notebook Sketch Oval Animation */}
      <style>{`
        @keyframes notebookPenCircleReveal {
          0% {
            -webkit-mask-image: conic-gradient(from -90deg, #000 0%, transparent 0%);
            mask-image: conic-gradient(from -90deg, #000 0%, transparent 0%);
          }
          100% {
            -webkit-mask-image: conic-gradient(from -90deg, #000 100%, transparent 100%);
            mask-image: conic-gradient(from -90deg, #000 100%, transparent 100%);
          }
        }
      `}</style>
    </section>
  );
}