import React, { useState, useEffect } from 'react';

const websites = [
  {
    id: 1,
    title: 'Sri Lankan Tuskers',
    url: 'https://www.srilankantusckers.com/',
    description: 'A comprehensive blog platform dedicated to Sri Lankan Tuskers, featuring articles, insights, and stories about these magnificent creatures. Built with modern web technologies for optimal performance and user experience.',
    shortDescription: 'Blog platform about Sri Lankan Tuskers with admin panel for content management.',
    technologies: ['Vue.js', 'NestJS', 'Admin Panel'],
    type: 'Blog Platform',
    features: ['Blog Articles', 'Admin Dashboard', 'Content Management', 'Responsive Design']
  },
  {
    id: 2,
    title: 'Tech Toolkit Hub',
    url: 'https://www.techtoolkithub.com/',
    description: 'A modern blog website where I share insights about tech tools, frameworks, and technology-related articles. Features an intuitive admin panel for seamless article management and publishing.',
    shortDescription: 'Technology blog featuring articles about tech tools and modern development practices.',
    technologies: ['Next.js', 'Admin Panel', 'Blog Management'],
    type: 'Tech Blog',
    features: ['Tech Articles', 'Tool Reviews', 'Admin Panel', 'Article Management']
  }
];

function Websites() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('websites');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="websites" className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className={`text-5xl font-extrabold mb-4 text-orange-500 drop-shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          My Websites & Projects
        </h2>
        <p className={`text-xl mb-12 text-gray-300 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Live platforms and tools I&apos;ve built and maintain
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {websites.map((website, index) => (
            <div
              key={website.id}
              className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-orange-500/70 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(website.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header with Type Badge */}
              <div className="relative p-6 pb-4 bg-gradient-to-br from-orange-900/30 to-red-900/30">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full border border-orange-500/50">
                    {website.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 pr-20">
                  {website.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-4">
                <p className="text-gray-300 text-sm leading-relaxed mb-4 min-h-[80px]">
                  {website.shortDescription}
                </p>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-orange-400 mb-2 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {website.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <svg className="w-3 h-3 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {website.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-red-900/40 text-red-300 text-xs rounded-full border border-red-700/50 group-hover:bg-red-800/60 group-hover:border-red-500/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 text-center"
                >
                  <span className="flex items-center justify-center">
                    Visit Website
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Shine effect */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
                hoveredCard === website.id ? 'opacity-100' : ''
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400 text-lg">
            Want to collaborate or have a project in mind?{' '}
            <a href="#contacts" className="text-orange-400 hover:text-orange-300 font-semibold underline transition-colors">
              Let&apos;s talk!
            </a>
          </p>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}

export default Websites;
