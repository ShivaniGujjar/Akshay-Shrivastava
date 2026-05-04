import React from 'react';
import { motion } from 'framer-motion';
import './WorkShowcase.css';

const workImages = [
  "https://images.unsplash.com/photo-1492691523569-7379e40b4625?auto=format&fit=crop&q=80&w=600", // Cinematic Camera
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600", // Video Editing Suite
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600", // Motion Graphics vibe
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600", // Tech Setup
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600", // Film Clapper
  "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=600", // Post Production
];

const WorkShowcase = () => {
  // Duplicating array for seamless loop
  const duplicatedWork = [...workImages, ...workImages];

  return (
    <div className="work-showcase-wrapper">
      <div className="showcase-title-area">
        <h2>IT'S TIME TO</h2>
        <div className="title-box">DOUBLE DOWN</div>
      </div>

      <div className="marquee-container">
        <motion.div 
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, 
            repeat: Infinity 
          }}
        >
          {duplicatedWork.map((img, index) => (
            <div className="work-card" key={index}>
              <img src={img} alt="Work Sample" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="btn-center">
         <button className="our-work-btn">OUR WORK</button>
      </div>
    </div>
  );
};

export default WorkShowcase;