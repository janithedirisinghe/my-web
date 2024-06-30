/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import "./CSS/Home.css"

function Model(props) {
  const { scene } = useGLTF('/pumpkin_final_step.glb'); // Assuming you have a Halloween themed model
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
        <h1 className="text-5xl font-bold mb-6 halloween-font">
          Welcome to the Halloween Code Fest
        </h1>
        <p className="text-xl mb-12">
          Unleash the spooky side of coding with my eerie software engineering skills. Join me in a journey where code meets the supernatural.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Column: 3D Model */}
          <div className="flex justify-center items-center relative" style={{ height: '500px' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 100 }} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <PresentationControls speed={1} global zoom={1} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={"night"}>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </Suspense>
          </div>
          {/* Right Column: Code Block */}
          <div className="mt-8 md:mt-0">
            <pre className="bg-gray-800 p-4 rounded-lg shadow-lg text-left text-orange-400">
              {`
                const halloweenCodeFest = () => {
                  while(spooky) {
                    code();
                    scare();
                  }
                };
              `}
            </pre>
          </div>
        </div>
      </div>
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-900 to-transparent opacity-25 animate-pulse"></div>
    </section>
  );
}

export default Home;
