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
    <section className="w-full relative overflow-hidden pt-12 pb-24 font-sans select-none bg-[#e6dec9] text-[#14120e]">
      
      {/* 🎨 LOCAL FONT DECLARATION */}
      <style>{`
        @font-face {
          font-family: 'RoseryStudio';
          src: url('/RoseryStudio-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* BLUE STROKE FOR HEADINGS */
        .blue-stroke-header {
          color: #e6dec9;
          -webkit-text-stroke: 1.2px #144bff;
          text-shadow: 2px 2px 0px #144bff, 0 4px 20px rgba(20,75,255,0.25);
        }
      `}</style>

      {/* ────────────────── 1. WORKED WITH SECTION ────────────────── */}
      <div className="w-full relative overflow-hidden mb-16 sm:mb-24 text-center">
        
        {/* Section Heading with subtle accent line */}
        <div className="inline-flex flex-col items-center mb-8">
          <h3 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider m-0 blue-stroke-header"
          >
            Worked With
          </h3>
          <div className="w-12 h-1 bg-[#144bff] rounded-sm mt-2 shadow-[0_0_8px_#144bff]" />
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden py-4 group">
          <div className="inline-flex whitespace-nowrap gap-6 sm:gap-8 w-max will-change-transform animate-[slowMarqueeLeft_65s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(brands).map((brand, idx) => (
              <div 
                key={`brand-${idx}`} 
                style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
                className="px-7 py-3 bg-[#faf8f5] text-[#14120e] rounded-md inline-flex items-center justify-center shrink-0 shadow-md text-xs sm:text-sm tracking-widest border border-[#144bff]/20 backdrop-blur-md hover:border-[#144bff] hover:text-[#144bff] hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span className="text-[#144bff] mr-2.5">✦</span>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ────────────────── 2. TESTIMONIALS CINEMATIC BAND (VIBRANT BLUE WITH COMPACT HEIGHT & SEAMLESS TORN EDGE) ────────────────── */}
      <div className="w-full bg-[#144bff] relative py-20 sm:py-28 flex flex-col items-center overflow-hidden shadow-2xl">
        
        {/* Top Seamless Torn Edge Mask */}
        <div 
          className="absolute top-0 left-0 w-full h-[50px] sm:h-[75px] z-[12] bg-[#e6dec9]"
          style={{
            maskImage: "url('/bottom.png')",
            WebkitMaskImage: "url('/bottom.png')",
            maskSize: "auto 100%",
            WebkitMaskSize: "auto 100%",
            maskRepeat: "repeat-x",
            WebkitMaskRepeat: "repeat-x",
            maskPosition: "bottom",
            WebkitMaskPosition: "bottom",
            transform: "scaleY(-1)"
          }}
        />

        {/* Header */}
        <div className="relative z-[15] text-center mb-10 px-4 pt-2">
          <h2 
            style={{ fontFamily: "'RoseryStudio', var(--font-rosery), sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl uppercase m-0 text-white drop-shadow-md"
          >
            Testimonial
          </h2>
          <p className="text-white/80 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[2px] mt-1.5">
            What clients & directors say about my work
          </p>
        </div>

        {/* Ticker Cards Wrapper (Compact & Elegant Card Dimensions) */}
        <div className="w-full overflow-hidden py-2 group relative z-[15]">
          <div className="inline-flex whitespace-nowrap gap-5 sm:gap-7 w-max will-change-transform animate-[slowMarqueeLeft_75s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicateList(testimonials).map((testi, idx) => (
              <div 
                key={`testi-${idx}`} 
                className="relative bg-[#faf8f5] text-[#14120e] w-[300px] sm:w-[370px] p-6 sm:p-7 rounded-xl inline-flex flex-col justify-between shrink-0 shadow-lg whitespace-normal border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Decorative Quote Mark */}
                <span className="text-[#144bff]/20 font-serif text-5xl leading-none absolute top-3 right-5 select-none pointer-events-none">
                  “
                </span>

                <p 
                  style={{ fontFamily: "'Permanent Marker', cursive, sans-serif" }}
                  className="text-[#14120e] text-xs sm:text-sm leading-relaxed m-0 relative z-10"
                >
                  "{testi.quote}"
                </p>

                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
                  <div>
                    <p className="text-[#144bff] font-sans font-black text-[11px] sm:text-xs uppercase tracking-wider m-0">
                      — {testi.client}
                    </p>
                    {testi.company && (
                      <p className="text-neutral-500 text-[10px] font-semibold uppercase tracking-wide mt-0.5 m-0">
                        {testi.company}
                      </p>
                    )}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#144bff] shadow-[0_0_6px_#144bff]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Seamless Torn Edge Mask */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[75px] z-[12] bg-[#e6dec9]"
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

    </section>
  );
}