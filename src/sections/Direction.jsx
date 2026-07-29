import React, { useRef } from 'react';
import SocialProof from '../components/SocialProof';

// 🎬 DIRECTION PROJECTS DATA
const DIRECTION_PROJECTS = [
  {
    id: 'dp1',
    num: '01',
    title: 'Brand Commercial Direction',
    description: 'A high-impact brand campaign focusing on narrative pacing, emotional resonance, and high retention.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4',
    tag: 'Commercial'
  },
  {
    id: 'dp2',
    num: '02',
    title: 'Short Film Narrative',
    description: 'Exploratory visual storytelling with structured lighting, precise camera movement, and cinematic color grading.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4',
    tag: 'Narrative'
  },
  {
    id: 'dp3',
    num: '03',
    title: 'Startup Launch Film',
    description: 'Directing on-set talent and seamless motion graphics integration for modern tech positioning.',
    videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4',
    tag: 'Promo'
  }
];

// 📸 SCRAPBOOK POLAROID GALLERY COMPONENT
function ScrapbookGallery() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (idx) => {
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].play().catch(() => {});
    }
  };

  const handleMouseLeave = (idx) => {
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].pause();
    }
  };

  return (
    <div className="w-full max-w-[900px] my-10 sm:my-16 flex flex-col items-center justify-center relative select-none">
      
      {/* TAPE LABEL HEADER */}
      <div className="relative z-30 mb-8 px-6 py-2 bg-[#f4ebd0] text-[#2b66e3] font-['Comic_Sans_MS',sans-serif] text-sm sm:text-lg font-black uppercase tracking-widest shadow-md rounded-sm rotate-[-1deg] border border-[#e2d5b0]/60">
        🎬 DIRECTOR'S CUT • BTS & STORYBOARD
      </div>

      {/* 3 POLAROID FRAMES CONTAINER */}
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full pt-2 pb-6">
        
        {/* FRAME 1 (LEFT - TILTED) */}
        <div 
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          className="relative w-[180px] sm:w-[240px] md:w-[260px] bg-white p-3 pt-3 pb-8 rounded-md shadow-[0_15px_30px_rgba(0,0,0,0.2)] -rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 border border-black/5 cursor-pointer"
        >
          {/* Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-[#f4ebd0]/80 shadow-sm border border-black/5 rotate-[-3deg] z-20 pointer-events-none" />
          
          <div className="w-full aspect-[3/4] bg-black rounded overflow-hidden relative">
            <video 
              ref={(el) => (videoRefs.current[0] = el)}
              src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4" 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-0.5 rounded font-['Comic_Sans_MS',sans-serif] text-[10px] sm:text-xs font-extrabold uppercase">
              On-Set BTS
            </span>
          </div>
        </div>

        {/* FRAME 2 (CENTER - ELEVATED) */}
        <div 
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          className="relative w-[190px] sm:w-[250px] md:w-[270px] bg-white p-3 pt-3 pb-8 rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.25)] z-20 hover:scale-105 transition-all duration-300 -translate-y-4 border border-black/5 cursor-pointer"
        >
          {/* Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#f4ebd0]/80 shadow-sm border border-black/5 rotate-[2deg] z-20 pointer-events-none" />

          <div className="w-full aspect-[3/4] bg-black rounded overflow-hidden relative">
            <video 
              ref={(el) => (videoRefs.current[1] = el)}
              src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4" 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-black/70 text-amber-300 px-2 py-0.5 rounded font-['Comic_Sans_MS',sans-serif] text-[10px] sm:text-xs font-extrabold uppercase">
              Storyboard
            </span>
          </div>
        </div>

        {/* FRAME 3 (RIGHT - TILTED) */}
        <div 
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          className="relative w-[180px] sm:w-[240px] md:w-[260px] bg-white p-3 pt-3 pb-8 rounded-md shadow-[0_15px_30px_rgba(0,0,0,0.2)] rotate-[5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 border border-black/5 cursor-pointer"
        >
          {/* Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-[#f4ebd0]/80 shadow-sm border border-black/5 rotate-[-1deg] z-20 pointer-events-none" />

          <div className="w-full aspect-[3/4] bg-black rounded overflow-hidden relative">
            <video 
              ref={(el) => (videoRefs.current[2] = el)}
              src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4" 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-0.5 rounded font-['Comic_Sans_MS',sans-serif] text-[10px] sm:text-xs font-extrabold uppercase">
              Cam Cut
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

// 🎥 SINGLE DIRECTION PROJECT CARD
function DirectionVideoCard({ project }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full md:w-[48%] h-[260px] sm:h-[340px] md:h-[380px] bg-black rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative border border-black/10 transition-transform duration-500 hover:scale-[1.02]"
    >
      <video 
        ref={videoRef}
        src={project.videoUrl} 
        controls 
        playsInline 
        loop
        muted
        className="w-full h-full object-cover rounded-3xl" 
      />
      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-black font-['Comic_Sans_MS',sans-serif] text-xs font-extrabold uppercase tracking-wide shadow-sm pointer-events-none z-10">
        {project.tag}
      </span>
    </div>
  );
}

export default function Direction() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] relative overflow-x-hidden pb-12 font-sans tracking-tight">
      
      {/* 🎬 100VH CINEMATIC HERO BANNER */}
      <div className="relative w-full h-screen bg-[#0c0c0e] flex flex-col justify-center items-center overflow-hidden m-0 p-0"> 
        
        {/* FLUID BACKDROP VIDEO */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-screen object-cover z-0 filter brightness-[0.65] contrast-105"
        >
          <source src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4" type="video/mp4" />
        </video>

        {/* LIGHT GRADIENT VIGNETTE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1] pointer-events-none" />
        
        {/* CENTERED BANNER TYPOGRAPHY */}
        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <h1 className="font-['Comic_Sans_MS','Chalkboard_SE',sans-serif] text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] font-[950] uppercase text-white m-0 text-center leading-none tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Direction Work
          </h1>
          <p className="font-['Comic_Sans_MS',sans-serif] text-amber-300 font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-[2.5px] mt-3.5 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            STORYBOARDING • FILMMAKING • CREATIVE DIRECTION
          </p>
        </div>

        {/* Bottom Torn Canvas Divider Layer */}
        <div className="absolute -bottom-[2px] left-0 w-full h-[70px] sm:h-[90px] z-[15] bg-[url('/bottom.png')] bg-repeat-x bg-[length:auto_100%] bg-bottom" />
      </div>

      {/* 🏛️ CORE SHOWCASE CANVAS BODY */}
      <div className="max-w-[1200px] w-full mx-auto pt-16 sm:pt-24 pb-12 px-6 flex flex-col items-center relative">
        
        {/* Subtle Brand Color Accent Glow Behind Title */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-32 bg-[#2b66e3]/10 blur-3xl rounded-full pointer-events-none" />

        {/* Category Chip Badge */}
        <div className="mb-4 px-4 py-1.5 bg-[#2b66e3]/10 border border-[#2b66e3]/20 rounded-full text-[#2b66e3] font-['Comic_Sans_MS',sans-serif] text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
          🎬 Creative Direction
        </div>

        {/* Main Title */}
        <h2 className="font-['Comic_Sans_MS',sans-serif] text-[#2b66e3] text-4xl sm:text-5xl md:text-[3.6rem] font-black tracking-tight text-center relative z-10 leading-tight drop-shadow-sm">
          Welcome to Direction section
        </h2>

        {/* Subtitle Card Wrapper */}
        <div className="mt-5 max-w-[680px] bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-black/5 shadow-sm text-center">
          <p className="text-[#4a5568] text-base sm:text-lg font-medium leading-relaxed m-0">
            I craft compelling visual narratives, combining script analysis, intentional blocking, and precise post-direction to build high-converting brand stories.
          </p>
        </div>

        {/* 📸 SCRAPBOOK POLAROID GALLERY */}
        <ScrapbookGallery />

        {/* 🔀 ZIG-ZAG ALTERNATING LAYOUT WITH STYLISH PROJECT HEADINGS */}
        <div className="w-full flex flex-col gap-16 md:gap-24 mb-12 sm:mb-16">
          {DIRECTION_PROJECTS.map((project, idx) => {
            const isReverse = idx % 2 !== 0;

            return (
              <div 
                key={project.id}
                className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-8 md:gap-12 w-full group`}
              >
                {/* Video Container */}
                <DirectionVideoCard project={project} />

                {/* Description Column with Styled Heading */}
                <div className="w-full md:w-[48%] flex flex-col justify-center text-center md:text-left">
                  
                  {/* Overhead Index Pill Badge */}
                  <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#2b66e3]/10 text-[#2b66e3] rounded-full font-['Comic_Sans_MS',sans-serif] text-xs font-black uppercase tracking-wider">
                      PROJECT {project.num}
                    </span>
                    <span className="text-[#a0aec0] font-sans text-xs uppercase font-bold tracking-widest">
                      • {project.tag}
                    </span>
                  </div>

                  {/* Clean Accent Title */}
                  <h3 className="font-['Comic_Sans_MS',sans-serif] text-[#2b66e3] text-2xl sm:text-3xl md:text-[2.2rem] font-black m-0 leading-tight tracking-tight relative md:pl-4 md:border-l-4 md:border-[#2b66e3]">
                    {project.title}
                  </h3>

                  {/* Description Box */}
                  <p className="text-[#4a5568] text-base sm:text-lg mt-4 m-0 leading-relaxed font-medium md:pl-4">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🚀 REUSABLE SOCIAL PROOF COMPONENT (WORKED WITH + TESTIMONIALS) */}
      <SocialProof />

      {/* Embedded Slow Keyframe Animations */}
      <style>{`
        @keyframes slowMarqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}