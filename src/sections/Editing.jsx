import React from 'react';
import './Editing.css'
export default function Editing({ onBack }) {
  const longFormsData = ["Podcasts", "Masterclass Loops", "Talking Head", "Campus Documentaries"];
  const shortFormsRow1 = ["UGC Ads", "Retention Hooks", "Podcast Shorts", "Reels Edit"];
  const shortFormsRow2 = ["Brand Promos", "Creative Pacing", "Corporate Shorts", "Social Media Hooks"];
  
  const brandStubs = ["Master's Union", "Waywen", "Edutainment Networks", "Startup Media Hubs"];
  
  const testimonialData = [
    "Retentions hooked completely through the roof!",
    "Brought our brand vision to absolute premium life.",
    "Mind-blowing editing transitions and insane pacing!",
    "Highly cooperative and incredible execution speed."
  ];

  const duplicateList = (arr, count = 8) => {
    let output = [];
    for (let i = 0; i < count; i++) {
      output = [...output, ...arr];
    }
    return output;
  };

  return (
    <div className="inner-editorial-page" style={{ backgroundColor: '#ffffff' }}>
      
      {/* 🎬 FULL-SCREEN FLUID HERO VIDEO BANNER */}
      <div className="inner-hero-banner" style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', /* Take full viewport height just like the reference */
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
      }}>
        
        {/* 🌟 100% VISUAL RAW BACKGROUND VIDEO LOOP */}
        <video 
          src="/editing.mp4" /* Public folder ka path match kar lena bhai */
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Smooth Aesthetic Gradient Overlay Sheet (Matches image presence) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1
        }} />

        {/* Top Left Navigation Back Control (Like your site logo/back track location) */}
        <button 
          className="back-home-pill-btn" 
          onClick={onBack}
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.5rem',
            zIndex: 20
          }}
        >
          ← Back to Home
        </button>
        
        {/* CENTERED TITLES AREA (Exact match to Filmkid 16 style layout) */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          marginTop: '-2rem' /* Subtle center balancing tweak */
        }}>
          <h1 className="inner-banner-title" style={{ 
            fontSize: 'calc(2.5rem + 2vw)', 
            fontWeight: 950, 
            color: '#ffffff',
            textShadow: '0 4px 12px rgba(0,0,0,0.35)',
            margin: '0 0 1rem 0'
          }}>
            Editing Work
          </h1>
          
          <button style={{
            backgroundColor: '#2B66E3', /* Clean punchy red color matching user preferences */
            color: '#ffffff',
            fontFamily: '"Comic Sans MS", sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: '1rem',
            letterSpacing: '1px',
            padding: '0.75rem 2.25rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Explore Reels
          </button>
        </div>

        {/* Bottom Jagged/Torn Border Canvas Separator Layer */}
        <div className="inner-banner-torn-divider" style={{ zIndex: 5 }} />
      </div>

      {/* CORE SHOWCASE CANVAS BODY */}
      <div className="inner-white-canvas-body" style={{ padding: '5rem 2rem 3rem 2rem' }}>
        <h2 className="canvas-welcome-headline">Welcome to Editing Section</h2>
        <p className="canvas-intro-narrative">
          I craft high-retention visual storytelling, high-fidelity edutainment loops, and performance-driven UGC ads, having scaled brand presence across startups and digital networks.
        </p>

        {/* MAIN VIDEO SCREEN PLAYER */}
        <div className="canvas-feature-box-media">
          <video 
            src="/showreel.mp4" 
            poster="/showreel-thumbnail.jpg" 
            controls 
            className="w-full h-full object-cover rounded-lg"
            playsInline
          />
        </div>
      </div>

      {/* 🔄 LONG FORMS TICKER */}
      <div className="ticker-editorial-segment-isolated">
        <div className="ticker-heading-wrapper">
          <h3 className="segment-micro-title">Long Forms</h3>
          <p className="segment-sub-info">High-fidelity podcasts, structured documentaries, and conversational hooks</p>
        </div>
        <div className="ticker-wrapper-container">
          <div className="ticker-track-moving move-left">
            {duplicateList(longFormsData).map((item, idx) => (
              <div key={`long-${idx}`} className="placeholder-grey-box wide-box">
                <span className="box-inner-tag-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔄 SHORT FORMS TICKERS */}
      <div className="ticker-editorial-segment-isolated">
        <div className="ticker-heading-wrapper">
          <h3 className="segment-micro-title">Short Forms</h3>
          <p className="segment-sub-info">Retention-focused micro-content, brand promos, and direct UGC advertisement frameworks</p>
        </div>
        <div className="ticker-wrapper-container margin-bottom-lg">
          <div className="ticker-track-moving move-left">
            {duplicateList(shortFormsRow1).map((item, idx) => (
              <div key={`short1-${idx}`} className="placeholder-grey-box tall-box">
                <span className="box-inner-tag-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ticker-wrapper-container">
          <div className="ticker-track-moving move-right">
            {duplicateList(shortFormsRow2).map((item, idx) => (
              <div key={`short2-${idx}`} className="placeholder-grey-box tall-box">
                <span className="box-inner-tag-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔄 WORKED WITH */}
      <div className="ticker-editorial-segment-isolated center-text-adjust extra-vertical-space">
        <h3 className="segment-micro-title font-blue">Worked With</h3>
        <div className="ticker-wrapper-container margin-top-tweak">
          <div className="ticker-track-moving move-left">
            {duplicateList(brandStubs).map((brand, idx) => (
              <div key={`brand-${idx}`} className="logo-box-stub">
                <span className="brand-stub-text">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔄 TESTIMONIALS */}
      <div className="inner-blue-testimonial-zone">
        <div className="inner-banner-torn-divider-top-blue" />
        <h2 className="testimonial-section-headline">Testimonials</h2>
        
        <div className="ticker-wrapper-container full-width-blue-override">
          <div className="ticker-track-moving move-right">
            {duplicateList(testimonialData).map((text, idx) => (
              <div key={`testi-${idx}`} className="testimonial-card-white-stub">
                <p className="testimonial-card-quote">"{text}"</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="inner-banner-torn-divider-bottom-blue" />
      </div>

      {/* CONTACT */}
      <div className="canvas-contact-zone">
        <h2 className="segment-micro-title font-blue">Contact Now</h2>
        <div className="contact-capsule-links-pill">
          <span>Instagram</span> • <span>Gmail</span> • <span>YouTube</span>
        </div>
      </div>
    </div>
  );
}