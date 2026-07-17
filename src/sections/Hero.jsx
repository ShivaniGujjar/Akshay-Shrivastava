import React, { useRef } from 'react';
import './Hero.css';

const COLUMNS = [
  { id: 'editing', title: 'Editing', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784312262/editing_ra4d0j.mp4' },
  { id: 'direction', title: 'Direction', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784316399/Ifolder_with_grade_final_vh9ygb.mp4' },
  { id: 'motion', title: 'Motion Design', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784024845/motion_gqgmye.mp4' },
  { id: 'about', title: 'About me', videoUrl: 'https://res.cloudinary.com/n1mfkfh4/video/upload/v1784318460/Learn_AE_in_a_single_day_1_vwktvg.mp4' }
];

export default function Hero({ onColumnClick }) {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch((err) => console.log("Playback interrupted:", err));
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="hero-split-container">
      {/* STATIC ROUGH SHADER MATRIX */}
      <svg className="scribble-hidden-filter-engine" xmlns="http://www.w3.org/2000/svg">
        <filter id="static-pencil-tear">
          <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="hero-split-grid-wrapper">
        {COLUMNS.map((col, index) => {
          return (
            <div
              key={col.id}
              className={`hero-split-column col-index-${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => {
                if (onColumnClick) onColumnClick(col.id);
              }}
            >
              {/* Background Cinematic Video Loop */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                loop
                muted
                playsInline
                preload="auto"
                className="column-video-bg"
              >
                <source src={col.videoUrl} type="video/mp4" />
              </video>

              {/* 🌟 THE GRANULAR NOISE LAYER OVERLAY */}
              <div className="column-noise-overlay" />

              {/* Typography Content Link Overlay */}
              <div className="column-text-overlay">
                <h1 className="column-title-link">
                  {col.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}