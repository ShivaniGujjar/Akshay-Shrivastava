import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CinemaModal.css';

const CinemaModal = ({ project, onClose }) => {
  // Return null if no project is active to prevent errors
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="cinema-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="cinema-container"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close interaction */}
          <button className="close-cinema-btn" onClick={onClose}>
            <span>CLOSE</span>
            <div className="close-icon">×</div>
          </button>
          
          <div className="video-viewport">
            {/* 
                This iframe uses the videoId passed from WorkGrid. 
                Ensure your project data objects include a 'videoId' property.
            */}
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&modestbranding=1&rel=0`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="cinema-meta">
            <div className="meta-left">
              <span className="cinema-category">{project.category}</span>
              <h2 className="cinema-project-title">{project.title}</h2>
            </div>
            <div className="meta-right">
              <p className="cinema-desc">
                {project.description || "Directing high-fidelity video production and cinematic storytelling."}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CinemaModal;