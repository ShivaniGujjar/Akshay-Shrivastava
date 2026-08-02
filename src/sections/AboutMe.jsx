import React from 'react';
import SocialProof from '../components/SocialProof';

export default function AboutMe() {
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
          <source src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1785678044/After_effects_compressed_jxplaf.mp4" />
        </video>

        {/* LIGHT GRADIENT VIGNETTE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-[1] pointer-events-none" />
        
        {/* CENTERED BANNER TYPOGRAPHY */}
        <div className="relative z-10 flex flex-col justify-center items-center px-4">
          <h1 className="font-['Comic_Sans_MS','Chalkboard_SE',sans-serif] text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] font-[950] uppercase text-white m-0 text-center leading-none tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            About Me
          </h1>
          <p className="font-['Comic_Sans_MS',sans-serif] text-amber-300 font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-[2.5px] mt-3.5 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            BIOGRAPHY • EXPERIENCE • CREATIVE VISION
          </p>
        </div>

        {/* Bottom Torn Canvas Divider Layer */}
        <div className="absolute -bottom-[2px] left-0 w-full h-[70px] sm:h-[90px] z-[15] bg-[url('/bottom.png')] bg-repeat-x bg-[length:auto_100%] bg-bottom" />
      </div>

      {/* 🏛️ CORE SHOWCASE CANVAS BODY */}
      <div className="max-w-[950px] w-full mx-auto pt-16 sm:pt-24 pb-12 px-6 flex flex-col items-start text-left relative">
        
        {/* Subtle Brand Color Accent Glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-[#2b66e3]/10 blur-3xl rounded-full pointer-events-none" />

        {/* Category Chip Badge */}
        <div className="mb-4 px-4 py-1.5 bg-[#2b66e3]/10 border border-[#2b66e3]/20 rounded-full text-[#2b66e3] font-['Comic_Sans_MS',sans-serif] text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
          👤 Creative Profile
        </div>

        {/* 🚀 CLEANED & BALANCED NAME TITLE */}
        <h1 className="font-['Comic_Sans_MS',sans-serif] text-[#2b66e3] text-5xl sm:text-6xl md:text-[4.8rem] font-black leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
          Akshay<br />
          <span className="text-[#1a49b8]">Shrivastava</span>
        </h1>
        
        {/* Glassmorphic Bio Card */}
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-black/5 shadow-sm text-[#2d3748] text-base sm:text-lg md:text-xl leading-relaxed font-medium space-y-6 w-full mb-16 relative z-10">
          <p className="m-0">
            I am a video editor, motion designer, and creative director obsessed with high-retention storytelling and high-fidelity visuals.
          </p>
          <p className="m-0">
            Having worked across startups, digital media networks, and content creators, I specialize in transforming raw footage into engaging podcasts, high-energy UGC ads, cinematic promos, and fluid 2D/3D motion graphics.
          </p>
          <p className="m-0">
            Whether it’s directing on-set, scripting narratives, or fine-tuning post-production pacing, my focus is always on building content that hooks audiences and elevates brand vision.
          </p>
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