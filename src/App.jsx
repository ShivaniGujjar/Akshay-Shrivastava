import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

// Importing the four clean independent layout components
import Editing from './sections/Editing';
import MotionDesign from './sections/MotionDesign';
import Direction from './sections/Direction';
import AboutMe from './sections/AboutMe';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'editing':
        return <Editing onBack={() => setActiveSection('home')} />;
      case 'motion':
        return <MotionDesign onBack={() => setActiveSection('home')} />;
      case 'direction':
        return <Direction onBack={() => setActiveSection('home')} />;
      case 'about':
        return <AboutMe onBack={() => setActiveSection('home')} />;
      default:
        return <Hero onColumnClick={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      
      <main className="main-viewport-holder">
        {renderActiveSection()}
      </main>

      <Footer />
    </div>
  );
}