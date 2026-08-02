import React, { useState, useRef, useEffect } from 'react';
import SocialProof from '../components/SocialProof';
import Footer from './Footer'; // 👈 Animation wala footer yahan properly imported hai

// 🎬 REAL SHOWCASE DATA
const LONG_FORMS = [
  { id: 'lf1', title: 'The Founder Journey', category: 'Podcast', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678593/Campus_film_compressed_2_otok6t.mp4', poster: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600' },
  { id: 'lf2', title: 'Tech Masterclass Loop', category: 'Edutainment', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678044/After_effects_compressed_jxplaf.mp4', poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' },
  { id: 'lf3', title: 'Campus Uncut Documentary', category: 'Documentary', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678011/Ifolder_with_grade_final_lzq260.mp4', poster: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600' },
  { id: 'lf4', title: 'Talking Head Masterclass', category: 'Vlog', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785674839/Perfectionism_compressed_isgrjo.mp4', poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600' },
];

const SHORT_FORMS_ROW1 = [
  { id: 'sf1', title: 'UGC Retention Hook', brand: 'Waywen', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785674839/Perfectionism_compressed_isgrjo.mp4', poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600' },
  { id: 'sf2', title: '3D Product Reel', brand: "Master's Union", videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678011/Ifolder_with_grade_final_lzq260.mp4', poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600' },
  { id: 'sf3', title: 'Viral Podcast Clip', brand: 'Edutainment', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678044/After_effects_compressed_jxplaf.mp4', poster: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600' },
  { id: 'sf4', title: 'App Promo Reel', brand: 'Media Hub', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678593/Campus_film_compressed_2_otok6t.mp4', poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600' },
];

const SHORT_FORMS_ROW2 = [
  { id: 'sf5', title: 'Brand Story Reel', brand: 'Kolkata Media', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678044/After_effects_compressed_jxplaf.mp4', poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600' },
  { id: 'sf6', title: 'High-Retention Ad', brand: 'SaaS Launch', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678593/Campus_film_compressed_2_otok6t.mp4', poster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600' },
  { id: 'sf7', title: 'Fashion Motion Edit', brand: 'Studio Luxe', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678011/Ifolder_with_grade_final_lzq260.mp4', poster: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600' },
  { id: 'sf8', title: 'Fitness Campaign', brand: 'Fit Tribe', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1785674839/Perfectionism_compressed_isgrjo.mp4', poster: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600' },
];

const duplicateList = (arr, count = 4) => {
  let output = [];
  for (let i = 0; i < count; i++) {
    output = [...output, ...arr];
  }
  return output;
};

function VideoCard({ item, aspectRatio = "wide", hoveredId, setHoveredId }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHovered = hoveredId === item.id;
  const isAnyHovered = hoveredId !== null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (!isVisible) {
        videoRef.current.pause();
      } else if (isAnyHovered) {
        if (isHovered) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isVisible, isHovered, isAnyHovered]);

  const cardDimensions = aspectRatio === "wide" 
    ? "w-[340px] sm:w-[420px] h-[210px] sm:h-[260px]" 
    : "w-[300px] sm:w-[380px] h-[450px] sm:h-[550px]";

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      className={`relative group rounded-xl overflow-hidden cursor-pointer bg-[#14120e] border border-[#144bff]/30 shadow-xl transition-all duration-500 ease-out hover:scale-[1.03] hover:border-[#144bff] hover:shadow-[0_0_30px_rgba(20,75,255,0.4)] ${cardDimensions} shrink-0`}
    >
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#14120e]/90 via-[#14120e]/30 to-transparent transition-opacity duration-300 group-hover:opacity-75" />

      {item.category && (
        <div 
          style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
          className="absolute top-4 left-4 bg-[#144bff] backdrop-blur-md px-3 py-1 rounded-sm text-white text-xs font-bold uppercase tracking-wide shadow-sm"
        >
          {item.category}
        </div>
      )}

      <div className={`absolute top-4 right-4 w-9 h-9 rounded-sm backdrop-blur-md flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 bg-[#144bff] text-white shadow-[0_0_15px_#144bff]' : 'bg-black/40 text-[#e6dec9]'}`}>
        {isHovered ? (
          <span className="w-2.5 h-2.5 bg-white rounded-xs animate-pulse" />
        ) : (
          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
        <h4 
          style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
          className="text-[#e6dec9] text-xl sm:text-2xl leading-snug drop-shadow-md mb-1"
        >
          {item.title}
        </h4>
        {item.brand && (
          <p className="text-[#144bff] font-sans text-xs font-semibold uppercase tracking-wider bg-black/60 px-2.5 py-1 rounded-xs inline-block">
            {item.brand}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Editing() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredLongId, setHoveredLongId] = useState(null);
  const [hoveredShort1Id, setHoveredShort1Id] = useState(null);
  const [hoveredShort2Id, setHoveredShort2Id] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#e6dec9] relative overflow-x-hidden pb-32 font-sans tracking-tight text-[#14120e]">
      
      {/* 🎞️ SUBTLE CINEMATIC GRAIN OVERLAY */}
      <div 
        className="fixed inset-0 pointer-events-none z-[999] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        @font-face {
          font-family: 'RoseryStudio';
          src: url('/RoseryStudio-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .blue-stroke-title {
          color: #e6dec9;
          -webkit-text-stroke: 1.5px #144bff;
          text-shadow: 2px 2px 0px #144bff, 0 4px 25px rgba(20,75,255,0.3);
        }

        .blue-stroke-header {
          color: #e6dec9;
          -webkit-text-stroke: 1.2px #144bff;
          text-shadow: 2px 2px 0px #144bff, 0 4px 20px rgba(20,75,255,0.25);
          white-space: nowrap;
        }

        .editing-cutout-mask {
          mask-image: url('/editingcutout.svg');
          -webkit-mask-image: url('/editingcutout.svg');
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: bottom center;
          -webkit-mask-position: bottom center;
        }
      `}</style>

      {/* HERO BANNER */}
      <div className="relative w-full h-screen bg-[#14120e] flex flex-col justify-center items-center overflow-hidden m-0 p-0 editing-cutout-mask"> 
        <video 
          src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678593/Campus_film_compressed_2_otok6t.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-screen object-cover z-0 filter brightness-[0.55] contrast-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#14120e]/80 via-transparent to-[#14120e]/60 z-[1] pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <h1 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] uppercase m-0 text-center leading-none tracking-tight blue-stroke-title"
          >
            Editing Work
          </h1>
          <p 
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            className="text-[#144bff] text-sm sm:text-lg md:text-xl uppercase tracking-[2px] mt-6 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-6 py-2"
          >
            POST-PRODUCTION • RETENTION EDITING • UGC ADS
          </p>
        </div>
      </div>

      {/* HEADER SECTION */}
      <div className="w-full mx-auto pt-14 sm:pt-24 pb-8 px-4 flex flex-col items-center relative z-20 text-center overflow-x-hidden">
        <div className="inline-flex flex-col items-center">
          <h2 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-3xl sm:text-5xl md:text-6xl uppercase tracking-wider m-0 blue-stroke-header"
          >
            WELCOME TO EDITING SECTION
          </h2>
          <div className="w-16 h-1.5 bg-[#144bff] rounded-sm mt-2 shadow-[0_0_10px_#144bff]" />
        </div>

        <p 
          style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
          className="text-[#144bff] text-sm sm:text-lg tracking-[2px] uppercase mt-6 max-w-[800px] leading-relaxed px-4"
        >
          I CRAFT HIGH-RETENTION VISUAL STORYTELLING, HIGH-FIDELITY EDUTAINMENT LOOPS, AND PERFORMANCE-DRIVEN UGC ADS, SCALING DIGITAL BRANDS ACROSS SOCIAL NETWORKS.
        </p>
      </div>

      {/* FEATURED VIDEO */}
      <div className="max-w-[1100px] w-full mx-auto px-6 mb-16 relative z-20">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#14120e] border-2 border-[#144bff]/40 shadow-2xl group">
          <video 
            src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678593/Campus_film_compressed_2_otok6t.mp4" 
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#144bff] text-white px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md pointer-events-none" style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}>
            Featured Masterpiece
          </div>
        </div>
      </div>

      {/* LONG FORMS */}
      <div className="w-full max-w-full relative overflow-hidden my-14 sm:my-20">
        <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col items-center text-center mb-8">
          <div className="inline-flex flex-col items-center">
            <h3 
              style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
              className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider m-0 blue-stroke-header"
            >
              LONG FORMS
            </h3>
            <div className="w-12 h-1 bg-[#144bff] rounded-sm mt-2 shadow-[0_0_8px_#144bff]" />
          </div>

          <p 
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            className="text-[#144bff] text-sm sm:text-lg tracking-[2px] uppercase mt-4"
          >
            PODCASTS • YOUTUBE DOCUMENTARIES • TALKING HEAD • MASTERCLASSES
          </p>
        </div>

        <div className="w-full max-w-full overflow-hidden pt-4 pb-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeLeft_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(LONG_FORMS).map((item, idx) => (
              <div key={`long-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard 
                  item={item} 
                  aspectRatio="wide" 
                  hoveredId={hoveredLongId} 
                  setHoveredId={setHoveredLongId} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SHORT FORMS */}
      <div className="w-full max-w-full relative overflow-hidden my-16 sm:my-24">
        <div className="max-w-[1100px] w-full mx-auto px-6 flex flex-col items-center text-center mb-8">
          <div className="inline-flex flex-col items-center">
            <h3 
              style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
              className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider m-0 blue-stroke-header"
            >
              SHORT FORMS
            </h3>
            <div className="w-12 h-1 bg-[#144bff] rounded-sm mt-2 shadow-[0_0_8px_#144bff]" />
          </div>

          <p 
            style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
            className="text-[#144bff] text-sm sm:text-lg tracking-[2px] uppercase mt-4"
          >
            UGC ADS • RETENTION HOOKS • PODCAST SHORTS • REELS
          </p>
        </div>
        
        <div className="w-full max-w-full overflow-hidden pt-4 pb-4 mb-6 sm:mb-8 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeLeft_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(SHORT_FORMS_ROW1).map((item, idx) => (
              <div key={`short1-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard 
                  item={item} 
                  aspectRatio="tall" 
                  hoveredId={hoveredShort1Id} 
                  setHoveredId={setHoveredShort1Id} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-full overflow-hidden py-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeRight_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(SHORT_FORMS_ROW2).map((item, idx) => (
              <div key={`short2-${idx}`} onClick={() => setSelectedVideo(item)}>
                <VideoCard 
                  item={item} 
                  aspectRatio="tall" 
                  hoveredId={hoveredShort2Id} 
                  setHoveredId={setHoveredShort2Id} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div className="mb-24 sm:mb-32">
        <SocialProof />
      </div>

      {/* FULLSCREEN VIDEO MODAL */}
      {selectedVideo && (
        <div 
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#faf8f5] rounded-md overflow-hidden shadow-2xl border border-[#144bff]/30 cursor-default"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-sm bg-[#14120e] text-white hover:bg-[#144bff] flex items-center justify-center font-bold text-xl transition-all"
            >
              ✕
            </button>
            <div className="aspect-video w-full bg-black">
              <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full object-contain" />
            </div>
            <div className="p-6 bg-[#faf8f5] text-[#14120e] flex items-center justify-between border-t border-black/10">
              <h3 
                style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
                className="text-xl sm:text-2xl font-bold text-[#144bff] uppercase"
              >
                {selectedVideo.title}
              </h3>
              {selectedVideo.brand && (
                <span className="text-xs font-semibold uppercase tracking-wider text-[#554f46] bg-[#e8e2d5] px-3 py-1 rounded-sm border border-black/10">
                  {selectedVideo.brand}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 🚀 ANIMATED SCROLL FOOTER */}
      <Footer />

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