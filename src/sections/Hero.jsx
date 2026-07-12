import React, { useState } from 'react';
import './Hero.css';

const COLUMNS = [
  { id: 'editing', title: 'Editing', videoUrl: '/editing.mp4' },
  { id: 'motion', title: 'Motion Design', videoUrl: '/motion.mp4' },
  { id: 'direction', title: 'Direction', videoUrl: '/direction.mp4' },
  { id: 'about', title: 'About me', videoUrl: '/about.mp4' }
];

export default function Hero({ onColumnClick }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="hero-split-container">
      {COLUMNS.map((col, index) => {
        const isAnyHovered = hoveredId !== null;
        const isCurrentHovered = hoveredId === col.id;

        let flexWidth = '25%';
        if (isAnyHovered) {
          flexWidth = isCurrentHovered ? '35%' : '21.66%';
        }

        return (
          <div
            key={col.id}
            className="hero-split-column"
            style={{ 
              width: flexWidth,
              zIndex: index + 1,
              cursor: 'pointer' /* Explicit indicator for active links click functionality */
            }}
            onMouseEnter={() => setHoveredId(col.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => {
              if (onColumnClick) onColumnClick(col.id); /* 🔥 Fires immediate route standard switch */
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="column-video-bg"
            >
              <source src={col.videoUrl} type="video/mp4" />
            </video>

            <div className="column-text-overlay">
              <span className="column-title-link">
                {col.title}
              </span>
            </div>

            {index < COLUMNS.length - 1 && (
              <div className="premium-vertical-rip-dark" />
            )}
          </div>
        );
      })}

      <div className="scraped-paper-bottom-mask-dark" />
    </section>
  );
}