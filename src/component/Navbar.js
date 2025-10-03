import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'websites', 'what-i-do', 'galary', 'education', 'achievements', 'about-me', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navLinkClass = (section) => {
    return `text-white hover:text-orange-400 transition-all duration-300 relative group ${
      activeSection === section ? 'text-orange-400' : ''
    }`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
      scrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-lg' : 'bg-gray-800'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={navLinkClass('home')}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={navLinkClass('projects')}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#websites" 
              onClick={(e) => scrollToSection(e, 'websites')}
              className={navLinkClass('websites')}
            >
              Websites
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#what-i-do" 
              onClick={(e) => scrollToSection(e, 'what-i-do')}
              className={navLinkClass('what-i-do')}
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#galary" 
              onClick={(e) => scrollToSection(e, 'galary')}
              className={navLinkClass('galary')}
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#education" 
              onClick={(e) => scrollToSection(e, 'education')}
              className={navLinkClass('education')}
            >
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => scrollToSection(e, 'achievements')}
              className={navLinkClass('achievements')}
            >
              Achievements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about-me" 
              onClick={(e) => scrollToSection(e, 'about-me')}
              className={navLinkClass('about-me')}
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contacts" 
              onClick={(e) => scrollToSection(e, 'contacts')}
              className={navLinkClass('contacts')}
            >
              Contacts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <a 
            href="https://github.com/janithedirisinghe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-orange-400 transition-colors duration-300 text-xl"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-orange-400 transition-colors duration-300 text-xl"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-2xl hover:text-orange-400 transition-colors">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col space-y-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg mt-4">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Home
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Projects
          </a>
          <a 
            href="#websites" 
            onClick={(e) => scrollToSection(e, 'websites')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Websites
          </a>
          <a 
            href="#what-i-do" 
            onClick={(e) => scrollToSection(e, 'what-i-do')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Skills
          </a>
          <a 
            href="#galary" 
            onClick={(e) => scrollToSection(e, 'galary')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Gallery
          </a>
          <a 
            href="#education" 
            onClick={(e) => scrollToSection(e, 'education')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Education
          </a>
          <a 
            href="#achievements" 
            onClick={(e) => scrollToSection(e, 'achievements')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            Achievements
          </a>
          <a 
            href="#about-me" 
            onClick={(e) => scrollToSection(e, 'about-me')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2 border-b border-gray-700 hover:border-orange-400"
          >
            About Me
          </a>
          <a 
            href="#contacts" 
            onClick={(e) => scrollToSection(e, 'contacts')}
            className="text-white hover:text-orange-400 transition-colors duration-300 py-2"
          >
            Contacts
          </a>
          <div className="flex space-x-4 pt-2 justify-center">
            <a 
              href="https://github.com/janithedirisinghe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-orange-400 transition-colors duration-300 text-xl"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-orange-400 transition-colors duration-300 text-xl"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
