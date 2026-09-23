import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Sections on the single-page portfolio, in nav order.
const sectionLinks = [
  { id: 'home', label: 'Home', mobileLabel: 'Home' },
  { id: 'projects', label: 'Projects', mobileLabel: 'Projects' },
  { id: 'websites', label: 'Websites', mobileLabel: 'Websites' },
  { id: 'what-i-do', label: 'Skills', mobileLabel: 'Skills' },
  { id: 'galary', label: 'Gallery', mobileLabel: 'Gallery' },
  { id: 'education', label: 'Education', mobileLabel: 'Education' },
  { id: 'achievements', label: 'Achievements', mobileLabel: 'Achievements' },
  { id: 'about-me', label: 'About', mobileLabel: 'About Me' },
  { id: 'contacts', label: 'Contact', mobileLabel: 'Contact' }
];

const socialIcons = [
  { href: 'https://github.com/janithedirisinghe', icon: faGithub, label: 'GitHub Profile' },
  {
    href: 'https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220',
    icon: faLinkedin,
    label: 'LinkedIn Profile'
  }
];

const activeClasses =
  'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50';
const inactiveClasses = 'text-gray-300 hover:text-white hover:bg-gray-700/50';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  const onPortfolio = location.pathname === '/';
  const onResearch = location.pathname.startsWith('/research');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!onPortfolio) return;

      // Update active section based on scroll position
      const current = sectionLinks
        .map((link) => link.id)
        .find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onPortfolio]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    // From a sub-route, go back to the portfolio and let it handle the hash.
    if (!onPortfolio) {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isSectionActive = (sectionId) => onPortfolio && activeSection === sectionId;

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
            {sectionLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isSectionActive(link.id) ? activeClasses : inactiveClasses
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/research"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                onResearch ? activeClasses : inactiveClasses
              }`}
            >
              Research
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-110"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="text-lg" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            {sectionLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  isSectionActive(link.id)
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : inactiveClasses
                }`}
              >
                {link.mobileLabel}
              </a>
            ))}
            <Link
              to="/research"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                onResearch
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : inactiveClasses
              }`}
            >
              Research
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex space-x-3 pt-4 justify-center border-t border-gray-700/50 mt-2">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 flex items-center justify-center text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
