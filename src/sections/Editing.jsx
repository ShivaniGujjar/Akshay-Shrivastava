import React from 'react';
import './InnerPagesShared.css';

export default function Editing({ onBack }) {
  const longFormsData = ["Podcasts", "Youtube Documentaries", "Talking head", "Campus film"];
  const shortFormsRow1 = ["UGC Ads", "Talking head", "Podcast Shorts", "Reels Edit"];
  const shortFormsRow2 = ["Brand Promos", "Creative Cut", "Corporate Short", "Music Promos"];
  
  const brandStubs = ["Brand Alpha", "Startup Beta", "Studio Delta", "Network Gamma"];
  
  const testimonialData = [
    "Mind-blowing editing transitions!",
    "Brought our brand vision to absolute premium life.",
    "Retentions hooked completely through the roof!",
    "Highly cooperative and insane speed runs."
  ];

  // Forcing heavy element repeat logic for seamless infinite translate loops
  const duplicateList = (arr, count = 8) => {
    let output = [];
    for (let i = 0; i < count; i++) {
      output = [...output, ...arr];
    }
    return output;
  };

  return (
    <div className="inner-editorial-page">
      <div className="inner-hero-banner editing-bg">
        <button className="back-home-pill-btn" onClick={onBack}>← Back to Home</button>
        <h1 className="inner-banner-title">Editing Work</h1>
        <div className="inner-banner-torn-divider" />
      </div>

      <div className="inner-white-canvas-body">
        <h2 className="canvas-welcome-headline">Welcome to editing section</h2>
        <p className="canvas-intro-narrative">
          I have worked with multiple startups and influencers on various kind of edits like UGC ads.
        </p>

        <div className="canvas-feature-box-media" />
      </div>

      {/* 🔄 LONG FORMS TICKER LAYER */}
      <div className="ticker-editorial-segment-isolated">
        <div className="ticker-heading-wrapper">
          <h3 className="segment-micro-title">Long Forms</h3>
          <p className="segment-sub-info">Podcasts, Youtube Documentaries, Talking head, Campus film</p>
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

      {/* 🔄 SHORT FORMS TICKER LAYERS */}
      <div className="ticker-editorial-segment-isolated">
        <div className="ticker-heading-wrapper">
          <h3 className="segment-micro-title">Short Forms</h3>
          <p className="segment-sub-info">UGC Ads, Talking head, Podcast Shorts, Etc.</p>
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

      {/* 🔄 WORKED WITH INFINITE RUNNING TICKER */}
      <div className="ticker-editorial-segment-isolated center-text-adjust extra-vertical-space">
        <h3 className="segment-micro-title font-blue">Worked with</h3>
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

      {/* 🔄 BLUE TESTIMONIAL AREA MOVING INFINITE REVERSE LOOP */}
      <div className="inner-blue-testimonial-zone">
        <div className="inner-banner-torn-divider-top-blue" />
        <h2 className="testimonial-section-headline">Testimonial</h2>
        
        <div className="ticker-wrapper-container full-width-blue-override">
          <div className="ticker-track-moving move-right">
            {duplicateList(testimonialData).map((text, idx) => (
              <div key={`testi-${idx}`} className="testimonial-card-white-stub">
                <p className="testimonial-card-quote">{text}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="inner-banner-torn-divider-bottom-blue" />
      </div>

      <div className="canvas-contact-zone">
        <h2 className="segment-micro-title font-blue">Contact now</h2>
        <div className="contact-capsule-links-pill">
          <span>Instagram</span> • <span>Gmail</span> • <span>Linkedin</span>
        </div>
      </div>
    </div>
  );
}