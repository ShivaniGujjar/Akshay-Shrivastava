import React from 'react';
import './Experience.css';

const Experience = () => {
  const roles = [
    {
      company: "Freelance / Personal Projects",
      role: "Video Editor & Designer",
      period: "2021 - 2022",
      description: "Explored visual storytelling and motion design through high-energy freelance projects and personal branding experiments.",
      accent: "#df311a" // Neon Rose
    },
    {
      company: "Waywen (Startup)",
      role: "Social Media Manager",
      period: "2022 - 2025",
      description: "Strategized and managed the official Instagram account, scaling brand presence through targeted content creation and community engagement for the startup.",
      accent: "#0091ff" // Cyan Punch
    },
    {
      company: "Master's Union",
      role: "Lead Video Editor",
      period: "2025 - Present",
      description: "Directing high-fidelity video production and edutainment content for YouTube. Managing visual storytelling that drives engagement across a massive creator ecosystem.",
      accent: "#ADFF00" // Electric Lime
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="exp-container">
        {/* HEADING: Solid 'EXP' and Outlined 'ERIENCE' to match Featured Work */}
        <h2 className="exp-title-premium">
          EXP<span className="text-outline">ERIENCE</span>
        </h2>
        
        <div className="stack-wrapper">
          {roles.map((item, index) => (
            <div 
              key={index} 
              className="stack-card" 
              style={{ 
                top: `calc(12% + ${index * 35}px)`, 
                '--card-accent': item.accent 
              }}
            >
              <div className="card-inner">
                <div className="card-header">
                  <div className="period-group">
                    <div className="accent-glow-dot"></div>
                    <span className="card-period">{item.period}</span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-company">{item.company}</h3>
                  <h4 className="card-role">{item.role}</h4>
                  <p className="card-description">{item.description}</p>
                </div>

                <div className="card-light-leak"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;