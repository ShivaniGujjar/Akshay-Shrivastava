import React, { useState } from 'react';

// 🟢 MAKE SURE NAVBAR IS IN COMPONENTS AND OTHERS ARE IN SECTIONS
import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import Editing from './sections/Editing';
import MotionDesign from './sections/MotionDesign';
import Direction from './sections/Direction';
import AboutMe from './sections/AboutMe';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Navbar sirf tabhi dikhega jab user Home pe nahi hoga, kyunki Home pe Hero.jsx ka apna custom navbar fixed hai */}
      {activeSection !== 'home' && (
        <Navbar onNavigate={handleNavigate} activeSection={activeSection} />
      )}
      
      <main className="flex-1 w-full flex flex-col">
        {renderActiveSection()}
      </main>
    </div>
  );
}