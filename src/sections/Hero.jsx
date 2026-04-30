import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 35);
      mouseY.set((e.clientY - window.innerHeight / 2) / 35);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  // Coordinates brought closer to the center for "contact" feel
  const skills = [
    { name: 'Color Grading', color: '#00ff88', top: '25%', left: '18%', offX: -30 },
    { name: 'Sound Design', color: '#00d1ff', top: '28%', right: '15%', offX: 30 },
    { name: 'Motion Graphics', color: '#00d1ff', bottom: '35%', left: '22%', offX: -30 },
    { name: 'Storyboarding', color: '#ffcc00', bottom: '32%', right: '20%', offX: 30 }
  ];

  return (
    <section className="hero">
      <div className="scanline-overlay"></div>
      <div className="vignette"></div>
      <div className="grain-texture"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hero-top-left-brand"
      >
        <span className="brand-dot"></span>
        <p className="brand-name">AKSHAY SHRIVASTAVA</p>
      </motion.div>

      <div className="mesh-gradient-v2">
        <div className="blob-v2 neon-green-v2"></div>
        <div className="blob-v2 midnight-blue-v2"></div>
      </div>

      <div className="hero-content-v2">
        {/* FIRST: Title appears */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="typo-group-v2"
        >
          <h1 className="h-solid shimmer-text">CREATIVE</h1>
          <h1 className="h-outline">VIDEO EDITOR</h1>
        </motion.div>

        {/* SECOND: Pills appear */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hero-pills-v2"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="p-item white-p">
            Editor @ Master's Union
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-item neon-p">
            500M+ VIEWS
          </motion.div>
        </motion.div>
      </div>

      {/* THIRD: Skills appear with contact-alignment */}
      <motion.div style={{ x: mouseX, y: mouseY }} className="skill-overlay-v2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: skill.offX, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 1.2 + index * 0.2, // Starts after title and pills
              duration: 0.7, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)" }}
            className="tech-brick-v2"
            style={{ 
              top: skill.top, left: skill.left, right: skill.right, bottom: skill.bottom,
              '--brick-accent': skill.color 
            }}
          >
            <div className="brick-status-v2"></div>
            <span className="brick-text-v2">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      
    </section>
  );
};

export default Hero;