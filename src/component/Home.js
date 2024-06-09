/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/zombie.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

function Home() {
  return (
    <section id="home" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the Code Apocalypse
        </h1>
        <p className="text-xl mb-12">
          Survive the tech apocalypse with my cutting-edge coding skills. Join me in my journey through the world of software engineering, where creativity meets the undead.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Column: 3D Model */}
          <div className="flex justify-center items-center relative" style={{ height: '500px' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={"sunset"}>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </Suspense>
          </div>
          {/* Right Column: Code Block */}
          <div className="mt-8 md:mt-0">
            <pre className="bg-gray-800 p-4 rounded-lg shadow-lg text-left text-green-400">
              {`
                const apocalypse = () => {
                  while(alive) {
                    code();
                    survive();
                  }
                };
              `}
            </pre>
          </div>
        </div>
      </div>
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse"></div>
    </section>
  );
}

export default Home;
