import React from 'react';

const DEFAULT_BRANDS = [
  "MASTER'S UNION",
  "WAYWEN",
  "EDUTAINMENT HUB",
  "MEDIA NETWORK",
  "STARTUP LABS",
  "KOLKATA MEDIA"
];

const DEFAULT_TESTIMONIALS = [
  {
    quote: "Retention graphs spiked by 42% after Akshay redid our video pacing! Absolute editing wizard.",
    client: "Founder",
    company: "Waywen"
  },
  {
    quote: "Brought our podcast clips to viral tier status with incredible visual energy and pacing.",
    client: "Media Lead",
    company: "Master's Union"
  },
  {
    quote: "High-energy cuts, slick animation overlays, sound design on point, and super fast turnarounds.",
    client: "Creator",
    company: "Edutainment Hub"
  },
  {
    quote: "Remarkable directional clarity on set and top-tier execution in post-production.",
    client: "Executive Producer",
    company: "Media Network"
  }
];

const duplicateList = (arr, count = 4) => {
  let output = [];
  for (let i = 0; i < count; i++) {
    output = [...output, ...arr];
  }
  return output;
};

export default function SocialProof({ brands = DEFAULT_BRANDS, testimonials = DEFAULT_TESTIMONIALS }) {
  return (
    <section className="w-full relative overflow-hidden pt-12 pb-24 font-sans select-none bg-[#1a1c23] text-white">
      
      {/* 🎨 LOCAL FONT DECLARATION */}
      <style>{`
        @font-face {
          font-family: 'RoseryStudio';
          src: url('/RoseryStudio-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* ────────────────── 1. WORKED WITH SECTION ────────────────── */}
      <div className="w-full relative overflow-hidden mb-16 sm:mb-24 text-center">
        
        {/* Section Heading with subtle accent line */}
        <div className="inline-flex flex-col items-center mb-8">
          <h3 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-amber-400 text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider m-0 drop-shadow-[0_4px_12px_rgba(251,191,36,0.2)]"
          >
            Worked With
          </h3>
          <div className="w-12 h-1 bg-amber-400/60 rounded-sm mt-2 shadow-[0_0_8px_#fcd34d]" />
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden py-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-8 w-max will-change-transform animate-[slowMarqueeLeft_65s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(brands).map((brand, idx) => (
              <div 
                key={`brand-${idx}`} 
                style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
                className="px-7 py-3 bg-[#0c0c0e]/90 text-white rounded-md inline-flex items-center justify-center shrink-0 shadow-lg text-xs sm:text-sm tracking-widest border border-white/15 backdrop-blur-md hover:border-amber-400/50 hover:text-amber-300 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span className="text-amber-400 mr-2.5">✦</span>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ────────────────── 2. TESTIMONIALS CINEMATIC BAND ────────────────── */}
      <div className="w-full bg-[#0c0c0e] relative py-28 sm:py-36 flex flex-col items-center overflow-hidden shadow-2xl border-y border-white/10">
        
        {/* Top Torn Canvas Divider */}
        <div 
          className="absolute -top-[2px] left-0 w-full h-[55px] sm:h-[75px] z-[12] bg-[#1a1c23]"
          style={{
            maskImage: "url('/bottom.png')",
            WebkitMaskImage: "url('/bottom.png')",
            maskSize: "auto 100%",
            WebkitMaskSize: "auto 100%",
            maskRepeat: "repeat-x",
            WebkitMaskRepeat: "repeat-x",
            transform: "scaleY(-1)"
          }}
        />

        {/* Header */}
        <div className="relative z-[15] text-center mb-12 px-4">
          <h2 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-amber-400 text-3xl sm:text-4xl md:text-5xl uppercase drop-shadow-md m-0"
          >
            Testimonials
          </h2>
          <p className="text-neutral-400 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[2px] mt-2">
            What clients & directors say about my work
          </p>
        </div>

        {/* Ticker Cards Wrapper */}
        <div className="w-full overflow-hidden py-4 group relative z-[15]">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-10 w-max will-change-transform animate-[slowMarqueeLeft_85s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(testimonials).map((testi, idx) => (
              <div 
                key={`testi-${idx}`} 
                className="relative bg-[#16171d] text-white w-[320px] sm:w-[420px] p-8 sm:p-9 rounded-md inline-flex flex-col justify-between shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-normal border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-1"
              >
                {/* Decorative Quote Mark */}
                <span className="text-amber-400/20 font-serif text-6xl leading-none absolute top-4 right-6 select-none pointer-events-none">
                  “
                </span>

                <p 
                  style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
                  className="text-white/95 text-base sm:text-lg leading-relaxed m-0 relative z-10"
                >
                  "{testi.quote}"
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-amber-400 font-sans font-black text-xs sm:text-sm uppercase tracking-wider m-0">
                      — {testi.client}
                    </p>
                    {testi.company && (
                      <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wide mt-0.5 m-0">
                        {testi.company}
                      </p>
                    )}
                  </div>
                  <div className="w-2 h-2 rounded-sm bg-amber-400 shadow-[0_0_8px_#fcd34d]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Torn Canvas Divider */}
        <div 
          className="absolute -bottom-[2px] left-0 w-full h-[55px] sm:h-[75px] z-[12] bg-[#1a1c23]"
          style={{
            maskImage: "url('/bottom.png')",
            WebkitMaskImage: "url('/bottom.png')",
            maskSize: "auto 100%",
            WebkitMaskSize: "auto 100%",
            maskRepeat: "repeat-x",
            WebkitMaskRepeat: "repeat-x"
          }}
        />
      </div>

    </section>
  );
}