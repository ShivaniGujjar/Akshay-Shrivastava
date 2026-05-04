import React from 'react';
import { motion } from 'framer-motion';
import './WorkGrid.css';

const projects = [
  {
    id: 1,
    title: "Master's Union Masterclass",
    category: "EDUTAINMENT / YT",
    image: "akshay-profile.jpeg",
    videoId: "dQw4w9WgXcQ",
    description: "Lead editor for the flagship edutainment series at Master's Union.",
    size: "large" 
  },
  // Add more projects here...
];

const WorkGrid = ({ onProjectClick }) => {
  return (
    <section className="work-grid-section" id="work">
      <div className="work-container">
        <header className="work-header">
          <h2 className="work-title-premium">
            FEATURED <span className="text-outline">WORK</span>
          </h2>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.size}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }} // Mobile friendly interaction
              onClick={() => onProjectClick(project)}
            >
              <div className="card-image-container">
                <img src={project.image} alt={project.title} />
                <div className="card-vignette"></div>
              </div>
              
              <div className="card-content-overlay">
                <div className="category-pill">{project.category}</div>
                <h3 className="project-title-text">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;