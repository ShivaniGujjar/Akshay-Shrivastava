import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const roles = [
    {
      company: "Master's Union",
      role: "Lead Video Editor",
      period: "2025 - Present",
      description: "Directing high-fidelity video production and edutainment content for YouTube. Managing visual storytelling that drives engagement across a massive creator ecosystem.",
      accent: "#FF0000"
    },
    {
      company: "Waywen (Startup)",
      role: "Social Media Manager",
      period: "2022 - 2025",
      description: "Strategized and managed official social channels, scaling brand presence through targeted content creation and high-impact visual storytelling.",
      accent: "#0091ff"
    },
    {
      company: "Freelance / Projects",
      role: "Video Editor & Designer",
      period: "2021 - 2022",
      description: "Explored visual storytelling and motion design through high-energy freelance projects and personal branding experiments.",
      accent: "#ADFF00"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="vfx-dots-exp"></div>
      <div className="exp-container">
        <h2 className="exp-title-premium">
          EXP<span className="text-outline">ERIENCE</span>
        </h2>
        
        <div className="stack-wrapper">
          {roles.map((item, index) => (
            <div 
              key={index} 
              className="stack-card-holder"
              style={{ 
                // Card thoda niche se start hoga aur upar aake "stick" ho jayega
                top: `calc(15% + ${index * 40}px)`, 
                zIndex: index // Har naya card purane ke upar dikhega
              }}
            >
              <motion.div 
                className="stack-card" 
                style={{ '--card-accent': item.accent }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-inner">
                  <div className="card-header">
                    <div className="period-box">
                      <span className="card-period">{item.period}</span>
                    </div>
                    <div className="card-index">0{index + 1}</div>
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-company">{item.company}</h3>
                    <h4 className="card-role">{item.role}</h4>
                    <div className="card-divider"></div>
                    <p className="card-description">{item.description}</p>
                  </div>
                  
                  {/* Skill/Progress indicator like video */}
                  <div className="card-visual-footer">
                    <div className="progress-label">CAPABILITY</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: '90%' }}></div>
                    </div>
                    <span className="pct">90%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;