import React from 'react';
import './InnerPagesShared.css';

export default function AboutMe({ onBack }) {
  return (
    <div className="inner-editorial-page">
      <div className="inner-hero-banner about-bg">
        <button className="back-home-pill-btn" onClick={onBack}>← Back to Home</button>
        <h1 className="inner-banner-title">About Me</h1>
        <div className="inner-banner-torn-divider" />
      </div>

      <div className="inner-white-canvas-body">
        <h2 className="canvas-welcome-headline">Creative Biography</h2>
        <p className="canvas-intro-narrative">
          Lead Video Editor and graduate student specialized in edutainment media engineering.
        </p>

        <div className="content-editorial-segment">
          <h3 className="segment-micro-title">Core Capability Stack</h3>
          <div className="segment-flex-row-cards-grid">
            <div className="placeholder-grey-box tall-box" style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>Premiere Pro</div>
            <div className="placeholder-grey-box tall-box" style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>After Effects</div>
            <div className="placeholder-grey-box tall-box" style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>Resolve</div>
            <div className="placeholder-grey-box tall-box" style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>Photoshop</div>
          </div>
        </div>
      </div>
    </div>
  );
}