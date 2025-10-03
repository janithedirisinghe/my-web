import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, useAnimations } from '@react-three/drei';
import { Typewriter } from 'react-simple-typewriter';
import "./CSS/Home.css";

function Model(props) {
  const { scene, animations } = useGLTF('/robort.glb'); // Ensure the file path is correct
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Optional: Keeps the model rotating
    }
  });

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play(); // Play the first animation
    }
  }, [actions]);

  // eslint-disable-next-line react/no-unknown-property
  return <primitive ref={modelRef} object={scene} {...props} />;
}

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringModel, setIsHoveringModel] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'IoT Enthusiast',
    'Tech Blogger',
    'Problem Solver'
  ];

  const stats = [
    // { number: '7+', label: 'Projects', icon: '💻' },
    // { number: '3', label: 'Live Websites', icon: '🌐' },
    // { number: '3.73', label: 'CGPA', icon: '📚' },
    // { number: '6+', label: 'Hackathons', icon: '🏆' }
  ];

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowStats(true), 1500);

    // Rotate roles
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10 px-4">
        {/* Main Heading with Dynamic Role */}
        <div className={`mb-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 shiny-text">
            Hi, I&apos;m Janith
          </h1>
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-orange-400 font-semibold animate-fadeIn">
              {roles[currentRole]}
            </h2>
          </div>
        </div>

        <p className={`text-lg md:text-xl mb-12 subtext-shimmer max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Passionate about building innovative solutions and exploring cutting-edge technologies.
          Let&apos;s create something amazing together! 🚀
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 flex items-center gap-2"
          >
            View My Work
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={scrollToContacts}
            className="group px-8 py-4 bg-transparent border-2 border-orange-500 hover:bg-orange-500/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Column: 3D Model */}
          <div 
            className={`flex justify-center items-center relative transition-all duration-1000 delay-400 transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            onMouseEnter={() => setIsHoveringModel(true)}
            onMouseLeave={() => setIsHoveringModel(false)}
            style={{ 
              height: '500px',
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`
            }}
          >
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mb-4"></div>
                <p className="text-orange-400 text-sm">Loading 3D Model...</p>
              </div>
            }>
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 90 }} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <PresentationControls speed={1} global zoom={2} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={"night"}>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </Suspense>
            
            {/* Interaction hint */}
            {!isHoveringModel && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/90 px-4 py-2 rounded-full text-xs text-gray-300 backdrop-blur-sm border border-orange-500/30 animate-pulse">
                🖱️ Drag to rotate
              </div>
            )}
          </div>

          {/* Right Column: Interactive Code Block */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Code Editor Header */}
            <div className="bg-gray-800 rounded-t-lg p-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-2">portfolio.js</span>
            </div>

            {/* Code Block */}
            <pre className="bg-gray-800 p-6 rounded-b-lg shadow-2xl text-left text-orange-400 whitespace-pre-wrap border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300 hover:shadow-orange-500/20 font-mono text-sm">
              <Typewriter
                words={[
                  `const developer = {\n  name: "Janith Edirisinghe",\n  role: "Full Stack Developer",\n  location: "Sri Lanka 🇱🇰",\n  skills: ["React", "Node.js", "IoT"],\n  passion: "Building the future"\n};`
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </pre>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://github.com/janithedirisinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-orange-500/50"
              >
                <svg className="w-5 h-5 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/janith-chathusanka-edirisinghe-591179220"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-orange-500/50"
              >
                <svg className="w-5 h-5 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-1000 delay-700 transform ${
          showStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-400 mb-1 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Dynamic Background */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20 transition-opacity duration-1000"
        style={{ 
          opacity: isHoveringModel ? 0.4 : 0.2,
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      ></div>

      {/* Enhanced Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-orange-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Home;
