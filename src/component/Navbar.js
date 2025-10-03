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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className={`container mx-auto transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-800/90 backdrop-blur-xl shadow-2xl shadow-orange-500/20 border border-orange-500/30' 
          : 'bg-gray-800/80 backdrop-blur-lg shadow-xl shadow-orange-500/10 border border-gray-700/50'
      } rounded-2xl px-6 py-4`}>
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:from-orange-300 hover:to-red-400 transition-all duration-300 cursor-pointer"
            >
              JE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'home' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Home
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'projects' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Projects
            </a>
            <a 
              href="#websites" 
              onClick={(e) => scrollToSection(e, 'websites')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'websites' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Websites
            </a>
            <a 
              href="#what-i-do" 
              onClick={(e) => scrollToSection(e, 'what-i-do')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'what-i-do' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Skills
            </a>
            <a 
              href="#galary" 
              onClick={(e) => scrollToSection(e, 'galary')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'galary' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Gallery
            </a>
            <a 
              href="#education" 
              onClick={(e) => scrollToSection(e, 'education')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'education' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Education
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => scrollToSection(e, 'achievements')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'achievements' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Achievements
            </a>
            <a 
              href="#about-me" 
              onClick={(e) => scrollToSection(e, 'about-me')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'about-me' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              About
            </a>
            <a 
              href="#contacts" 
              onClick={(e) => scrollToSection(e, 'contacts')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'contacts' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="https://github.com/janithedirisinghe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
            <a 
              href="https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'home' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Home
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'projects' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Projects
            </a>
            <a 
              href="#websites" 
              onClick={(e) => scrollToSection(e, 'websites')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'websites' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Websites
            </a>
            <a 
              href="#what-i-do" 
              onClick={(e) => scrollToSection(e, 'what-i-do')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'what-i-do' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Skills
            </a>
            <a 
              href="#galary" 
              onClick={(e) => scrollToSection(e, 'galary')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'galary' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Gallery
            </a>
            <a 
              href="#education" 
              onClick={(e) => scrollToSection(e, 'education')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'education' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Education
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => scrollToSection(e, 'achievements')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'achievements' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Achievements
            </a>
            <a 
              href="#about-me" 
              onClick={(e) => scrollToSection(e, 'about-me')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'about-me' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              About Me
            </a>
            <a 
              href="#contacts" 
              onClick={(e) => scrollToSection(e, 'contacts')}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === 'contacts' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Contact
            </a>
            
            {/* Mobile Social Icons */}
            <div className="flex space-x-3 pt-4 justify-center border-t border-gray-700/50 mt-2">
              <a 
                href="https://github.com/janithedirisinghe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
