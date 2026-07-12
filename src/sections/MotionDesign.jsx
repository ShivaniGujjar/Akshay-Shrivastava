import React from 'react';
import './InnerPagesShared.css';

export default function MotionDesign({ onBack }) {
  return (
    <div className="inner-editorial-page">
      <div className="inner-hero-banner motion-bg">
        <button className="back-home-pill-btn" onClick={onBack}>← Back to Home</button>
        <h1 className="inner-banner-title">Motion Design</h1>
        <div className="inner-banner-torn-divider" />
      </div>

      <div className="inner-white-canvas-body">
        <h2 className="canvas-welcome-headline">Welcome to motion section</h2>
        <p className="canvas-intro-narrative">
          Crafting modern, high-energy intros, commercial promos, and dynamic brand assets.
        </p>

        <div className="canvas-feature-box-media" />

        <div className="content-editorial-segment">
          <h3 className="segment-micro-title">Key Work</h3>
          <p className="segment-sub-info">Product Promos, Explainer Reels, Logo Animations</p>
          <div className="segment-flex-row-cards">
            <div className="placeholder-grey-box wide-box" />
            <div className="placeholder-grey-box wide-box" />
          </div>
        </div>
      </div>

      {/* BLUE TESTIMONIAL AREA */}
      <div className="inner-blue-testimonial-zone">
        <div className="inner-banner-torn-divider-top-blue" />
        <h2 className="testimonial-section-headline">Reel Feedback</h2>
        <div className="testimonial-cards-wrapper-row">
          <div className="testimonial-card-white-stub" />
          <div className="testimonial-card-white-stub" />
        </div>
        <div className="inner-banner-torn-divider-bottom-blue" />
      </div>
    </div>
  );
}