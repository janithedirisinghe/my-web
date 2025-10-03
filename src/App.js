import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import AboutMe from './component/AboutMe';
import Home from './component/Home';
import Skills from './component/Skills';
import Gallery from './component/Gallery';
import Websites from './component/Websites';
import Education from './component/Education';
import Achievements from './component/Achievements';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <Projects />
      <Websites />
      <Skills />
      <Gallery />
      <Education />
      <Achievements />
      <AboutMe />
      <Contacts />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-red-500/50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default App;
