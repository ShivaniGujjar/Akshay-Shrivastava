import React from 'react';
import './InnerPagesShared.css';

export default function Direction({ onBack }) {
  return (
    <div className="inner-editorial-page">
      <div className="inner-hero-banner direction-bg">
        <button className="back-home-pill-btn" onClick={onBack}>← Back to Home</button>
        <h1 className="inner-banner-title">Direction Suite</h1>
        <div className="inner-banner-torn-divider" />
      </div>

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