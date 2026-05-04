import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      // Extract numeric part (e.g., "500" from "500M+")
      const numericValue = parseInt(value.match(/\d+/)[0]);
      animate(count, numericValue, { duration: 2, ease: "circOut" });
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="stat-number">
      {/* motion.span is necessary to render MotionValue */}
      <motion.span>{rounded}</motion.span>
      <span className="stat-suffix">{value.replace(/\d+/g, '')}</span>
    </span>
  );
};

const Stats = () => {
  const statsData = [
    { number: "05+", label: "YRS EXPERIENCE" },
    { number: "500M+", label: "VIEWS GENERATED" },
    { number: "150+", label: "PROJECTS DELIVERED" }
  ];

  return (
    <section className="stats-section">
      <div className="vfx-dots-stats"></div>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-num-box">
                <Counter value={stat.number} />
              </div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
            
            {/* Divider: Desktop horizontal / Mobile vertical */}
            {index < statsData.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;