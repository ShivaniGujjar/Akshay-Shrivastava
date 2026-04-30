import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const Stats = () => {
  const statsData = [
    { number: "05+", label: "YRS EXPERIENCE" },
    { number: "500M+", label: "VIEWS GENERATED" },
    { number: "150+", label: "PROJECTS DELIVERED" }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
            
            {/* Divider logic: Don't show after the last item */}
            {index < statsData.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;