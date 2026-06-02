import React, { useState, useEffect } from 'react';
const myPicture = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images/profile-pic.png";

function AboutMe() {
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
      { threshold: 0.2 }
    );

    const section = document.getElementById('about-me');
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
    <section id='about-me' className="py-20 bg-gray-900 text-white px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className={`text-5xl font-extrabold mb-12 text-center text-red-700 drop-shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className={`md:w-1/2 w-full flex justify-center transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative group">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div> */}
              <img 
                src={myPicture} 
                alt="Profile" 
                className="relative rounded-2xl shadow-2xl max-w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className={`md:w-1/2 w-full transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                I&apos;m a final-year BSc. Information Technology &amp; Management student at the University of Moratuwa (CGPA 3.787/4.00, expected 2026) with hands-on full-stack experience spanning enterprise software, community platforms, and product tools.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I interned at <span className="text-orange-400 font-semibold">HSenid Business Solutions</span>, contributing to <span className="text-orange-400 font-semibold">People&apos;s HR</span> — a large-scale enterprise HR platform used across multiple organizations — using C# .NET MVC and Vue.js. I have published at two international research conferences (KDU 2024, USJ 2026).
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I deliver production applications using <span className="text-orange-400 font-semibold">TypeScript, Angular, Vue.js, NestJS, Spring Boot,</span> and <span className="text-orange-400 font-semibold">.NET</span>. Based in Gampaha, Sri Lanka — always eager to take on challenges that push both my technical and collaborative skills.
              </p>
              
              <a
                href="https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images/Janith%20Edirisinghe%20-%20Software%20Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 py-4 px-8 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
