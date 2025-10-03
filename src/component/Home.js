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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 pb-20 bg-gray-900 text-white relative overflow-hidden p-3">
      <div className="container mx-auto text-center relative z-10">
        <h1 className={`text-5xl md:text-6xl font-bold mb-6 shiny-text transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Welcome
        </h1>
        <p className={`text-xl md:text-2xl mb-12 subtext-shimmer transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Unleash the spooky side of coding with my software engineering skills. Join me in a journey where code meets the supernatural.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: 3D Model */}
          <div className={`flex justify-center items-center relative transition-all duration-1000 delay-300 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`} style={{ height: '500px' }}>
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
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
          </div>
          {/* Right Column: Code Block with Typewriter Effect */}
          <div className={`mt-8 md:mt-0 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <pre className="bg-gray-800 p-6 rounded-lg shadow-2xl text-left text-orange-400 whitespace-pre-wrap border border-orange-900/30 hover:border-orange-500/50 transition-all duration-300 hover:shadow-orange-500/20">
              <Typewriter
                words={[
                  `const Portfolio = () => {\n  while(successful) {\n    innovate();\n    create();\n  }\n};`
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </pre>
          </div>
        </div>
      </div>
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-900 to-transparent opacity-25 animate-pulse"></div>
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>
    </section>
  );
}

export default Home;
