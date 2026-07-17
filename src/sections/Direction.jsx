import React from 'react';
import './InnerPagesShared.css';

export default function Direction({ onBack }) {
  return (
    <div className="inner-editorial-page">
      {/* HERO BANNER WITH CINEMATIC VIDEO BACKGROUND (100VH) */}
      <div className="inner-hero-banner direction-bg">
        <video 
          className="banner-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content layout layered on top of the video */}
        <div className="banner-content">
          <button className="back-home-pill-btn" onClick={onBack}>← Back to Home</button>
          <h1 className="inner-banner-title">Direction</h1>
        </div>
        
        <div className="inner-banner-torn-divider" />
      </div>

      {/* WHITE CANVAS BODY SECTION */}
      <div className="inner-white-canvas-body">
        <h2 className="canvas-welcome-headline">Welcome to direction section</h2>
        <p className="canvas-intro-narrative">
          Executing absolute cinematic visions from storyboard sets to final sequence output tracks.
        </p>

        <div className="canvas-feature-box-media" />
      </div>
    </div>
  );
}