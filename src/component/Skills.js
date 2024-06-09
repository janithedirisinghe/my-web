/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model({ path, scale, ...props }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return <primitive ref={modelRef} object={scene} scale={scale} {...props} />;
}

const Skills = () => {
  const skills = [
    { name: 'Skill 1', path: '/wep1.glb', scale: 0.02, description: 'Description for Skill 1', image: '/skill1.jpg' },
    { name: 'Skill 2', path: '/wep2.glb', scale: 0.02, description: 'Description for Skill 2', image: '/skill2.jpg' },
    { name: 'Skill 3', path: '/wep3.glb', scale: 0.4, description: 'Description for Skill 3', image: '/skill3.jpg' },
    { name: 'Skill 4', path: '/wep4.glb', scale: 0.4, description: 'Description for Skill 4', image: '/skill4.jpg' },
    { name: 'Skill 5', path: '/wep5.glb', scale: 1, description: 'Description for Skill 5', image: '/skill5.jpg' },
    { name: 'Skill 6', path: '/wep6.glb', scale: 0.01, description: 'Description for Skill 6', image: '/skill6.jpg' },
    { name: 'Skill 7', path: '/wep7.glb', scale: 0.01, description: 'Description for Skill 7', image: '/skill7.jpg' },
    { name: 'Skill 8', path: '/wep8.glb', scale: 0.01, description: 'Description for Skill 8', image: '/skill8.jpg' },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const handleClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-white">Skills</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="w-full md:w-1/3 overflow-y-auto h-96 mb-8 md:mb-0 no-scrollbar rounded-lg border border-gray-700">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 cursor-pointer border-b border-gray-700 ${selectedSkill.name === skill.name ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                onClick={() => handleClick(skill)}
              >
                <p className="text-lg font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full md:w-2/3 h-96 rounded-lg bg-gray-800 bg-opacity-50 p-4 ms-3">
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={"sunset"}>
                    <Model path={selectedSkill.path} scale={selectedSkill.scale} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </Suspense>
          </div>
        </div>
        {selectedSkill && (
          <div className="mt-10 p-4 bg-gray-800 bg-opacity-75 rounded-lg text-left shadow-lg transition transform hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <img src={selectedSkill.image} alt={selectedSkill.name} className="w-20 h-20 rounded-full border-4 border-gray-700 shadow-md" />
            </div>
            <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
            <p className="mt-2">{selectedSkill.description}</p>
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse rotate-180"></div>
    </section>
  );
};

export default Skills;

// CSS for hiding scrollbar
const style = document.createElement('style');
style.innerHTML = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
document.head.appendChild(style);
