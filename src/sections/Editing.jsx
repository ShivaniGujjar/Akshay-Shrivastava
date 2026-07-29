import React, { useState, useRef } from 'react';
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
      className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-black/90 border border-black/10 shadow-xl transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl ${cardDimensions} shrink-0`}
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
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-black font-['Comic_Sans_MS',sans-serif] text-[11px] font-extrabold uppercase tracking-wide shadow-sm">
          {item.category}
        </div>
      )}

      <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 ${isPlaying ? 'scale-110 bg-amber-300 text-black' : 'text-white'}`}>
        {isPlaying ? (
          <span className="w-2.5 h-2.5 bg-black rounded-sm animate-pulse" />
        ) : (
          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover:translate-y-0">
        <h4 className="text-white font-['Comic_Sans_MS',sans-serif] font-bold text-base sm:text-lg leading-snug drop-shadow-md">
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

  return (
    <div className="w-full min-h-screen bg-[#fafafa] relative overflow-x-hidden pb-12 font-sans tracking-tight">
      
      {/* 🎬 100VH CINEMATIC HERO BANNER */}
      <div className="relative w-full h-screen bg-[#0c0c0e] flex flex-col justify-center items-center overflow-hidden m-0 p-0"> 
        
        {/* FLUID BACKDROP VIDEO */}
        <video 
          src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-screen object-cover z-0 filter brightness-[0.65] contrast-105"
        />

        {/* LIGHT GRADIENT VIGNETTE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1] pointer-events-none" />

        {/* CENTERED BANNER TYPOGRAPHY */}
        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <h1 className="font-['Comic_Sans_MS','Chalkboard_SE',sans-serif] text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] font-[950] uppercase text-white m-0 text-center leading-none tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Editing Work
          </h1>
          <p className="font-['Comic_Sans_MS',sans-serif] text-amber-300 font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-[2.5px] mt-3.5 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            POST-PRODUCTION • RETENTION EDITING • UGC ADS
          </p>
        </div>

        <div className="absolute -bottom-[2px] left-0 w-full h-[70px] sm:h-[90px] z-[15] bg-[url('/bottom.png')] bg-repeat-x bg-[length:auto_100%] bg-bottom" />
      </div>

      {/* 🎨 VISUALLY ENHANCED HEADER (SAME CLEAN TEXT, BETTER UI) */}
      <div className="max-w-[1200px] w-full mx-auto pt-16 sm:pt-24 pb-8 px-6 flex flex-col items-center relative">
        
        {/* Subtle Brand Color Accent Glow Behind Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-32 bg-[#2b66e3]/10 blur-3xl rounded-full pointer-events-none" />

        {/* Category Chip Badge */}
        <div className="mb-4 px-4 py-1.5 bg-[#2b66e3]/10 border border-[#2b66e3]/20 rounded-full text-[#2b66e3] font-['Comic_Sans_MS',sans-serif] text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
          ⚡ Showcase Engine
        </div>

        {/* Main Title */}
        <h2 className="font-['Comic_Sans_MS',sans-serif] text-[#2b66e3] text-4xl sm:text-5xl md:text-[3.6rem] font-black tracking-tight text-center relative z-10 leading-tight drop-shadow-sm">
          Welcome to editing section
        </h2>

        {/* Subtitle Card Wrapper */}
        <div className="mt-5 max-w-[680px] bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-black/5 shadow-sm text-center">
          <p className="text-[#4a5568] text-base sm:text-lg font-medium leading-relaxed m-0">
            I craft high-retention visual storytelling, high-fidelity edutainment loops, and performance-driven UGC ads, scaling digital brands across social networks.
          </p>
        </div>
      </div>

      {/* 🔄 LONG FORMS TICKER */}
      <div className="w-full max-w-full relative overflow-hidden my-10 sm:my-16">
        <div className="max-w-[1100px] w-full mx-auto px-6 text-center">
          {/* Section Tag */}
          <span className="inline-block px-3 py-1 bg-amber-300/20 text-amber-700 font-extrabold text-[11px] uppercase tracking-wider rounded-md mb-2 font-['Comic_Sans_MS',sans-serif]">
            01. Long Form
          </span>

          <h3 className="font-['Comic_Sans_MS',sans-serif] text-[#2b66e3] text-3xl sm:text-4xl font-black m-0 tracking-tight">
            Long Forms
          </h3>

          <p className="text-[#718096] text-xs sm:text-sm md:text-base mt-2 mb-8 font-sans font-semibold tracking-wide uppercase opacity-80">
            Podcasts • YouTube Documentaries • Talking Head • Masterclasses
          </p>
        </div>

        <div className="w-full max-w-full overflow-hidden py-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeLeft_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(LONG_FORMS).map((item, idx) => (
              <div key={`long-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard item={item} aspectRatio="wide" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔄 SHORT FORMS TICKERS */}
      <div className="w-full max-w-full relative overflow-hidden my-14 sm:my-20">
        <div className="max-w-[1100px] w-full mx-auto px-6 text-center">
          {/* Section Tag */}
          <span className="inline-block px-3 py-1 bg-amber-300/20 text-amber-700 font-extrabold text-[11px] uppercase tracking-wider rounded-md mb-2 font-['Comic_Sans_MS',sans-serif]">
            02. Short Form
          </span>

          <h3 className="font-['Comic_Sans_MS',sans-serif] text-[#2b66e3] text-3xl sm:text-4xl font-black m-0 tracking-tight">
            Short Forms
          </h3>

          <p className="text-[#718096] text-xs sm:text-sm md:text-base mt-2 mb-8 font-sans font-semibold tracking-wide uppercase opacity-80">
            UGC Ads • Retention Hooks • Podcast Shorts • Reels
          </p>
        </div>
        
        {/* ROW 1: LEFT SLOW TICKER */}
        <div className="w-full max-w-full overflow-hidden py-4 mb-8 sm:mb-10 group">
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

      {/* 🚀 REUSABLE SOCIAL PROOF COMPONENT (WORKED WITH + TESTIMONIALS) */}
      <SocialProof />

      {/* 🍿 FULLSCREEN VIDEO MODAL POPUP */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center font-bold text-xl transition-all"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full object-contain" />
            </div>
            <div className="p-6 bg-[#0c0c0e] text-white">
              <h3 className="font-['Comic_Sans_MS',sans-serif] text-xl sm:text-2xl font-bold">{selectedVideo.title}</h3>
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