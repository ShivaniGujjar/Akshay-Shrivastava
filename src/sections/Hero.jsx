import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';

const SoftwareIcon = ({ type }) => {
  const iconAssets = {
    Pr: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    Ae: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
    Ps: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    Dr: "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
  };
  return <img src={iconAssets[type]} alt={type} className="tool-image-actual" />;
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const workImages = [
    "https://images.unsplash.com/photo-1492691523569-7379e40b4625?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=600",
  ];
  const duplicatedWork = [...workImages, ...workImages, ...workImages];

  useEffect(() => {
    // 1. GSAP for Text Reveal (Lines sliding up)
    gsap.fromTo(".line-hider span", 
      { y: "110%" }, 
      { y: 0, duration: 1.4, stagger: 0.15, ease: "power4.out", delay: 0.4 }
    );

    // 2. GSAP for the Background Grid and Dots (Fading in)
    gsap.fromTo(".vfx-dots, .grain-overlay", 
      { opacity: 0 }, 
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    );
  }, []);

  return (
    <section className="hero-studio-red">
      <div className="vfx-dots"></div>
      <div className="grain-overlay"></div>
      
      {/* 3. Floating Icons with Staggered Entrance */}
      {['Pr', 'Ae', 'Ps', 'Dr'].map((tool, i) => (
        <motion.div 
          key={tool} className={`tool-palette tp-${i+1}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { delay: 1.2 + (i * 0.1), duration: 0.8 },
            scale: { delay: 1.2 + (i * 0.1), duration: 0.8 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
          }}
        >
          <SoftwareIcon type={tool} />
          <div className="tool-label-mini">{tool === 'Dr' ? 'RESOLVE' : tool}</div>
          <div className="tool-line"></div>
        </motion.div>
      ))}

      <div className="hero-container">
        <div className="hero-main">
          <h1 className="hero-main-title">
            <div className="line-hider"><span>CRAFTING</span></div>
            <div className="line-hider"><span className="red-text">HIGH-IMPACT</span></div>
            <div className="line-hider"><span>NARRATIVES</span></div>
          </h1>
          
          {/* 4. Sub-text and Button Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <p className="hero-sub">PRECISE MOTION. ELITE EDITING. ZERO COMPROMISE.</p>
            <div className="hero-footer-cta">
              <button className="hero-primary-btn hero-roll" onClick={() => setIsOpen(true)}>
                <div className="roll-container">
                  <span className="roll-text primary">▶ WATCH SHOWREEL</span>
                  <span className="roll-text secondary">▶ WATCH SHOWREEL</span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* 5. Timeline Entrance (Slides up from bottom) */}
        <motion.div 
          className="permanent-timeline"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "circOut" }}
        >
          <div className="infinite-reel-container">
            <motion.div 
              className="reel-track"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {duplicatedWork.map((img, index) => (
                <div className="reel-item" key={index}>
                  <img src={img} alt="Work Sample" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="scrubber-line"></div>
        </motion.div>

        
      </div>

      {/* Modal remains the same */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setIsOpen(false)}>✕ CLOSE</button>
              <div className="video-responsive">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Showreel" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;