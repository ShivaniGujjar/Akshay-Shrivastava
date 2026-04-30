import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats'; //
import WorkGrid from './sections/WorkGrid';
import Experience from './sections/Experience';
import ClientTicker from './components/ClientTicker';
import Footer from './sections/Footer';
import CinemaModal from './components/CinemaModal';

import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    return () => lenis.destroy();
  }, [])

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      <Navbar />
      <Hero />

      {/* The Big Emerald Stat Cards Section */}
      <Stats /> {/* */}
      
      <div id="work">
        <WorkGrid onProjectClick={handleOpenProject} />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <ClientTicker />
      <Footer />

      {selectedProject && (
        <CinemaModal 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      )}
    </main>
  );
}

export default App;