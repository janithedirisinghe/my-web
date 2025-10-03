import React, { useState, useEffect } from 'react';

const educationData = [
  {
    id: 1,
    degree: 'B.Sc. (Hons) in Information Technology and Management',
    institution: 'Faculty of Information Technology, University of Moratuwa',
    period: '2021 - Present',
    type: 'Undergraduate',
    achievements: [
      'L1S1 - Dean\'s List',
      'L2S2 - Dean\'s List',
      'CGPA - 3.73/4.00'
    ],
    icon: '🎓',
    color: 'orange'
  },
  {
    id: 2,
    degree: 'Diploma in Technology',
    institution: 'Esoft Metro Campus, Gampaha',
    period: 'Completed',
    type: 'Diploma',
    achievements: [],
    icon: '📜',
    color: 'red'
  },
  {
    id: 3,
    degree: 'GCE A/L (Physical Science Stream)',
    institution: 'Walisinghe Harischandra College, Anuradhapura',
    period: '2011 - 2020',
    type: 'Secondary Education',
    achievements: [],
    icon: '🏫',
    color: 'orange'
  }
];

const experienceData = [
  {
    id: 1,
    position: 'Intern Software Engineer',
    company: 'hSenid Business Solutions',
    period: 'Current',
    type: 'Internship',
    description: 'Gaining hands-on experience in software development, working with modern technologies and contributing to real-world projects.',
    icon: '💼',
    color: 'red'
  }
];

function Education() {
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

    const section = document.getElementById('education');
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
    <section id="education" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className={`text-5xl font-extrabold mb-4 text-center text-red-700 drop-shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Education & Qualifications
        </h2>
        <p className={`text-xl mb-12 text-center text-gray-300 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          My academic journey and professional experience
        </p>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold mb-8 text-orange-500 flex items-center justify-center transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Professional Experience
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 hover:border-orange-500/70 transition-all duration-500 hover:scale-105 mb-6 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {exp.icon}
                </div>

                <div className="ml-8">
                  {/* Badge */}
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full border border-orange-500/50 mr-3">
                      {exp.type}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {exp.period}
                    </span>
                  </div>

                  {/* Position & Company */}
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {exp.position}
                  </h4>
                  <p className="text-orange-400 text-lg mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className={`text-3xl font-bold mb-8 text-orange-500 flex items-center justify-center transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Academic Background
          </h3>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 opacity-30"></div>

            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative mb-12 transition-all duration-1000 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content Card */}
                  <div className={`group w-full md:w-5/12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-gray-700 hover:border-${edu.color}-500/70 transition-all duration-500 hover:scale-105 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {/* Badge */}
                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className={`px-3 py-1 bg-${edu.color}-500/20 text-${edu.color}-300 text-xs font-semibold rounded-full border border-${edu.color}-500/50`}>
                        {edu.type}
                      </span>
                    </div>

                    {/* Degree */}
                    <h4 className={`text-xl font-bold text-white mb-2 group-hover:text-${edu.color}-400 transition-colors`}>
                      {edu.degree}
                    </h4>

                    {/* Institution */}
                    <p className="text-gray-300 mb-3 flex items-center">
                      <svg className={`w-4 h-4 ${index % 2 === 0 ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.institution}
                    </p>

                    {/* Period */}
                    <p className={`text-${edu.color}-400 text-sm mb-4 flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <svg className={`w-4 h-4 ${index % 2 === 0 ? 'md:ml-1 mr-1 md:mr-0' : 'mr-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </p>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                      <div className={`mt-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h5 className="text-sm font-semibold text-orange-400 mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className={`text-sm text-gray-300 flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <svg className={`w-4 h-4 text-green-500 ${index % 2 === 0 ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${edu.color}-500/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000`}></div>
                    </div>
                  </div>

                  {/* Timeline Icon (centered) */}
                  <div className="hidden md:flex w-2/12 justify-center my-4 md:my-0">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${edu.color}-600 to-red-600 rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-gray-900 relative z-10 transform hover:scale-110 transition-transform duration-300`}>
                      {edu.icon}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-full border border-orange-500/50">
            <p className="text-orange-300 text-sm font-semibold">
              Committed to continuous learning and professional growth
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}

export default Education;
