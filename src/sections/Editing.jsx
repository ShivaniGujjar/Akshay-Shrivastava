import React, { useState, useRef, useEffect } from 'react';
import SocialProof from '../components/SocialProof';

// 🎬 REAL SHOWCASE DATA
const LONG_FORMS = [
  { id: 'lf1', title: 'The Founder Journey', category: 'Podcast', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4', poster: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600' },
  { id: 'lf2', title: 'Tech Masterclass Loop', category: 'Edutainment', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4', poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' },
  { id: 'lf3', title: 'Campus Uncut Documentary', category: 'Documentary', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4', poster: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600' },
  { id: 'lf4', title: 'Talking Head Masterclass', category: 'Vlog', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4', poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600' },
];

const SHORT_FORMS_ROW1 = [
  { id: 'sf1', title: 'UGC Retention Hook', brand: 'Waywen', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4' },
  { id: 'sf2', title: '3D Product Reel', brand: "Master's Union", videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4' },
  { id: 'sf3', title: 'Viral Podcast Clip', brand: 'Edutainment', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4' },
  { id: 'sf4', title: 'App Promo Reel', brand: 'Media Hub', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4' },
];

const SHORT_FORMS_ROW2 = [
  { id: 'sf5', title: 'Brand Story Reel', brand: 'Kolkata Media', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4' },
  { id: 'sf6', title: 'High-Retention Ad', brand: 'SaaS Launch', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4' },
  { id: 'sf7', title: 'Fashion Motion Edit', brand: 'Studio Luxe', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4' },
  { id: 'sf8', title: 'Fitness Campaign', brand: 'Fit Tribe', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4' },
];

const duplicateList = (arr, count = 4) => {
  let output = [];
  for (let i = 0; i < count; i++) {
    output = [...output, ...arr];
  }
  return output;
};

function VideoCard({ item, aspectRatio = "wide" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const cardDimensions = aspectRatio === "wide" 
    ? "w-[320px] sm:w-[400px] h-[200px] sm:h-[240px]" 
    : "w-[210px] sm:w-[250px] h-[310px] sm:h-[370px]";

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group rounded-md overflow-hidden cursor-pointer bg-black/90 border border-white/10 shadow-xl transition-all duration-500 ease-out hover:scale-[1.03] hover:border-amber-400/40 hover:shadow-2xl ${cardDimensions} shrink-0`}
    >
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter brightness-90 group-hover:brightness-100 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-75" />

      {item.category && (
        <div 
          style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-sm text-black text-[11px] font-bold uppercase tracking-wide shadow-sm"
        >
          {item.category}
        </div>
      )}

      <div className={`absolute top-3 right-3 w-7 h-7 rounded-sm bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 ${isPlaying ? 'scale-110 bg-amber-300 text-black' : 'text-white'}`}>
        {isPlaying ? (
          <span className="w-2 h-2 bg-black rounded-xs animate-pulse" />
        ) : (
          <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover:translate-y-0">
        <h4 
          style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
          className="text-white text-base sm:text-lg leading-snug drop-shadow-md"
        >
          {item.title}
        </h4>
        {item.brand && (
          <p className="text-amber-300 font-sans text-xs font-semibold uppercase tracking-wider mt-0.5">
            {item.brand}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Editing() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#1a1c23] relative overflow-x-hidden pb-12 font-sans tracking-tight text-white">
      
      {/* 🎨 LOCAL FONT DECLARATIONS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        @font-face {
          font-family: 'RoseryStudio';
          src: url('/RoseryStudio-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* REFINED YELLOW STROKE EFFECT FOR EDITING WORK TITLE */
        .yellow-stroke-title {
          color: #ffffff;
          -webkit-text-stroke: 1.5px #facc15;
          text-shadow: 2px 2px 0px #facc15, 0 4px 25px rgba(0,0,0,0.9);
        }
      `}</style>

      {/* 🎬 100VH CINEMATIC HERO BANNER */}
      <div className="relative w-full h-screen bg-[#08080a] flex flex-col justify-center items-center overflow-hidden m-0 p-0"> 
        
        {/* FLUID BACKDROP VIDEO */}
        <video 
          src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-screen object-cover z-0 filter brightness-[0.55] contrast-105"
        />

        {/* GRADIENT VIGNETTE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 z-[1] pointer-events-none" />

        {/* CENTERED BANNER TYPOGRAPHY */}
        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <h1 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] uppercase m-0 text-center leading-none tracking-tight yellow-stroke-title"
          >
            Editing Work
          </h1>
          <p 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-amber-300 text-xs sm:text-sm md:text-base uppercase tracking-[2.5px] mt-4 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] bg-black/60 backdrop-blur-md px-6 py-2 rounded-md border border-amber-400/30 shadow-lg"
          >
            POST-PRODUCTION • RETENTION EDITING • UGC ADS
          </p>
        </div>

        {/* ✂️ CSS MASKED TORN EDGE */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[90px] z-[15] pointer-events-none bg-[#1a1c23]"
          style={{
            maskImage: "url('/bottom.png')",
            WebkitMaskImage: "url('/bottom.png')",
            maskSize: "auto 100%",
            WebkitMaskSize: "auto 100%",
            maskRepeat: "repeat-x",
            WebkitMaskRepeat: "repeat-x",
            maskPosition: "bottom",
            WebkitMaskPosition: "bottom"
          }}
        />
      </div>

      {/* 🎨 HEADER SECTION */}
      <div className="max-w-[1200px] w-full mx-auto pt-12 sm:pt-20 pb-8 px-6 flex flex-col items-center relative z-20">
        
        {/* Category Chip Badge */}
        

        {/* Main Title */}
        <h2 
          style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
          className="text-amber-400 text-4xl sm:text-5xl md:text-[3.6rem] tracking-tight text-center relative z-10 leading-tight drop-shadow-sm uppercase"
        >
          Welcome to editing section
        </h2>

        {/* Subtitle Card Wrapper */}
        <div className="mt-5 max-w-[680px] bg-[#0c0c0e]/80 backdrop-blur-md px-6 py-4 rounded-md border border-white/10 shadow-sm text-center">
          <p className="text-neutral-300 text-base sm:text-lg font-medium leading-relaxed m-0">
            I craft high-retention visual storytelling, high-fidelity edutainment loops, and performance-driven UGC ads, scaling digital brands across social networks.
          </p>
        </div>
      </div>

      {/* 🔄 LONG FORMS TICKER (SUBTLE CURVED BADGE) */}
      <div className="w-full max-w-full relative overflow-hidden my-10 sm:my-14">
        <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col items-center text-center">
          
          {/* SLIGHTLY CURVED BADGE */}
          <div 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#0a0a0c]/90 border-2 border-amber-400/50 rounded-md text-amber-300 text-lg sm:text-2xl uppercase shadow-[0_4px_20px_rgba(251,191,36,0.15)] cursor-pointer mb-3"
          >
            <div className="p-1.5 bg-amber-400/20 rounded-sm border border-amber-400/40 text-amber-400 flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H9l2 4H8L6 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zM8 17H4v-3h4v3zm0-5H4V9h4v3zm6 5h-4v-3h4v3zm0-5h-4V9h4v3zm6 5h-4v-3h4v3zm0-5h-4V9h4v3z"/>
              </svg>
            </div>
            <span>LONG FORMS</span>
          </div>

          <p 
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            className="text-neutral-300 text-xs sm:text-sm tracking-wider uppercase opacity-85 mt-1"
          >
            PODCASTS • YOUTUBE DOCUMENTARIES • TALKING HEAD • MASTERCLASSES
          </p>
        </div>

        <div className="w-full max-w-full overflow-hidden pt-6 pb-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeLeft_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(LONG_FORMS).map((item, idx) => (
              <div key={`long-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard item={item} aspectRatio="wide" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔄 SHORT FORMS TICKERS (SUBTLE CURVED BADGE) */}
      <div className="w-full max-w-full relative overflow-hidden my-14 sm:my-18">
        <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col items-center text-center">
          
          {/* SLIGHTLY CURVED BADGE */}
          <div 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#0a0a0c]/90 border-2 border-amber-400/50 rounded-md text-amber-300 text-lg sm:text-2xl uppercase shadow-[0_4px_20px_rgba(251,191,36,0.15)] cursor-pointer mb-3"
          >
            <div className="p-1.5 bg-amber-400/20 rounded-sm border border-amber-400/40 text-amber-400 flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-7.5-2l6-4.5-6-4.5v9z"/>
              </svg>
            </div>
            <span>SHORT FORMS</span>
          </div>

          <p 
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            className="text-neutral-300 text-xs sm:text-sm tracking-wider uppercase opacity-85 mt-1"
          >
            UGC ADS • RETENTION HOOKS • PODCAST SHORTS • REELS
          </p>
        </div>
        
        {/* ROW 1: LEFT SLOW TICKER */}
        <div className="w-full max-w-full overflow-hidden pt-6 pb-4 mb-6 sm:mb-8 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeLeft_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(SHORT_FORMS_ROW1).map((item, idx) => (
              <div key={`short1-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard item={item} aspectRatio="tall" />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: RIGHT SLOW TICKER */}
        <div className="w-full max-w-full overflow-hidden py-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeRight_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(SHORT_FORMS_ROW2).map((item, idx) => (
              <div key={`short2-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard item={item} aspectRatio="tall" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🚀 REUSABLE SOCIAL PROOF COMPONENT */}
      <SocialProof />

      {/* 🍿 FULLSCREEN VIDEO MODAL POPUP */}
      {selectedVideo && (
        <div 
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#0c0c0e] rounded-md overflow-hidden shadow-2xl border border-white/20 cursor-default"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-sm bg-white/20 text-white hover:bg-amber-400 hover:text-black flex items-center justify-center font-bold text-xl transition-all"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full object-contain" />
            </div>
            <div className="p-6 bg-[#0c0c0e] text-white flex items-center justify-between border-t border-white/10">
              <h3 
                style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
                className="text-xl sm:text-2xl font-bold text-amber-300 uppercase"
              >
                {selectedVideo.title}
              </h3>
              {selectedVideo.brand && (
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 bg-white/5 px-3 py-1 rounded-sm border border-white/10">
                  {selectedVideo.brand}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Embedded Smooth Marquee Keyframe Animations */}
      <style>{`
        @keyframes slowMarqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes slowMarqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
}