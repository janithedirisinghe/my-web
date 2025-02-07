import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-white">Home</a>
            <a href="#projects" className="text-white">Projects</a>
            <a href="#what-i-do" className="text-white">Skills</a>
            <a href="#contacts" className="text-white">Contacts</a>
            <a href="#galary" className="text-white">Gallery</a>
            <a href="#about-me" className="text-white">AboutMe</a>
          </div>
        </div>
        <div className="md:flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <a href="#home" className="text-white" onClick={toggleMenu}>Home</a>
            <a href="#projects" className="text-white" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="text-white" onClick={toggleMenu}>Skills</a>
            <a href="#Gallery" className="text-white" onClick={toggleMenu}>Gallery</a>
            <a href="#AboutMe" className="text-white" onClick={toggleMenu}>AboutMe</a>
            <a href="#contacts" className="text-white" onClick={toggleMenu}>Contacts</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
