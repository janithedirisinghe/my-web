import React, { useState, useEffect } from 'react';

const researchData = [
  {
    id: 1,
    title: 'Real-Time Monitoring of Gas Station Underground Fuel Tanks Using IoT Technology',
    conference: '17th International Research Conference – 2024, KDU',
    description: 'This research introduces an IoT-based system for real-time monitoring of underground fuel tanks in gas stations, enhancing precision, safety, and data management. The system uses advanced sensors and cloud integration to modernize fuel station operations.',
    type: 'Published Research',
    icon: '📝',
    color: 'orange'
  },
  {
    id: 2,
    title: 'Optimization Of Service Procurement in the Wedding Industry: A Centralized Digital Marketplace for Vendor Discovery and Management',
    conference: 'International Conference on Multidisciplinary Approaches – 2026, University of Sri Jayewardenepura',
    description: 'Investigated the development of a centralized web-based marketplace for the wedding industry aimed at improving vendor accessibility and service discovery efficiency. Analyzed the integration of advanced search, vendor management, and AI-driven recommendation systems to enhance customer decision-making and optimize the wedding service ecosystem.',
    type: 'Published Research',
    icon: '📄',
    color: 'red'
  }
];

const hackathonData = [
  {
    id: 1,
    name: 'GENESIZ \'24',
    year: '2024',
    achievement: 'Finalists',
    level: 'finalist',
    icon: '🏆'
  },
  {
    id: 2,
    name: 'DEV thon 2024',
    organizer: 'University of Moratuwa',
    category: 'Web Design and Development',
    year: '2024',
    achievement: 'Final Round',
    level: 'finalist',
    icon: '💻'
  },
  {
    id: 3,
    name: 'IDEALIZE\'24 Delegates',
    category: 'Idea Hackathon',
    year: '2024',
    achievement: 'Final Round',
    level: 'finalist',
    icon: '💡'
  },
  {
    id: 4,
    name: 'HackX-IdeaX 2023',
    organizer: 'University of Kelaniya',
    category: 'Idea Hackathon',
    year: '2023',
    achievement: 'Semifinalist',
    level: 'semifinalist',
    icon: '🎯'
  },
  {
    id: 5,
    name: 'RealHack 4.0',
    organizer: 'University of Kelaniya',
    year: '2023',
    achievement: 'Participant',
    level: 'participant',
    icon: '🚀'
  },
  {
    id: 6,
    name: 'CYPHER Hackathon Competition',
    organizer: 'KDU',
    year: '2023',
    achievement: 'Participant',
    level: 'participant',
    icon: '⚡'
  }
];

const getLevelBadge = (level) => {
  const badges = {
    finalist: { bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500/50', glow: 'shadow-yellow-500/20' },
    semifinalist: { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/50', glow: 'shadow-orange-500/20' },
    participant: { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/50', glow: 'shadow-blue-500/20' }
  };
  return badges[level] || badges.participant;
};

function Achievements() {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('achievements');
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
    <section id="achievements" className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/10"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className={`text-5xl font-extrabold mb-4 text-center text-orange-500 drop-shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Achievements & Recognition
        </h2>
        <p className={`text-xl mb-16 text-center text-gray-300 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Research publications and competitive programming accomplishments
        </p>

        {/* Research Section */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold mb-8 text-red-500 flex items-center justify-center transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Research Publications
          </h3>

          <div className="max-w-4xl mx-auto">
            {researchData.map((research, index) => (
              <div
                key={research.id}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 hover:border-red-500/70 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {research.icon}
                </div>

                <div className="ml-8">
                  {/* Badge */}
                  <div className="flex items-center mb-4">
                    <span className="px-4 py-1.5 bg-red-500/20 text-red-300 text-sm font-semibold rounded-full border border-red-500/50">
                      {research.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-relaxed">
                    {research.title}
                  </h4>

                  {/* Conference */}
                  <p className="text-orange-400 text-lg mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {research.conference}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {research.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons Section */}
        <div>
          <h3 className={`text-3xl font-bold mb-8 text-red-500 flex items-center justify-center transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Hackathon Participations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {hackathonData.map((hackathon, index) => {
              const badge = getLevelBadge(hackathon.level);
              return (
                <div
                  key={hackathon.id}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl border-2 border-gray-700 hover:border-orange-500/70 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">
                      {hackathon.icon}
                    </div>
                    <span className="text-orange-400 text-sm font-semibold">
                      {hackathon.year}
                    </span>
                  </div>

                  {/* Hackathon Name */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {hackathon.name}
                  </h4>

                  {/* Organizer */}
                  {hackathon.organizer && (
                    <p className="text-gray-400 text-sm mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {hackathon.organizer}
                    </p>
                  )}

                  {/* Category */}
                  {hackathon.category && (
                    <p className="text-gray-400 text-sm mb-3">
                      {hackathon.category}
                    </p>
                  )}

                  {/* Achievement Badge */}
                  <div className="mt-auto pt-4">
                    <span className={`inline-block px-3 py-1.5 ${badge.bg} ${badge.text} text-sm font-semibold rounded-full border ${badge.border} ${badge.glow} shadow-lg`}>
                      {hackathon.achievement}
                    </span>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-orange-500/30 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">2</div>
            <div className="text-gray-300 text-sm">Published Research</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-yellow-500/30 text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">3</div>
            <div className="text-gray-300 text-sm">Final Round Achievements</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-red-500/30 text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">6</div>
            <div className="text-gray-300 text-sm">Hackathons Participated</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-full border border-orange-500/50">
            <p className="text-orange-300 text-sm font-semibold">
              Driven by innovation, powered by competition
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-20 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}

export default Achievements;
