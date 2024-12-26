/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, useAnimations } from '@react-three/drei';
import fullStackImage from './images/FullStack.png';
import frontEndImage from './images/FrontEnd.png';
import backendImage from './images/backend.png';
import langvageImage from './images/proLan.png';
import versionImage from './images/versionImage.jpg';
import dataBaseImage from './images/dataBase.png';
import "./CSS/Home.css"; // Custom CSS file for styles

function Model({ path, scale, ...props }) {
  const { scene, animations } = useGLTF(path);
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

  return <primitive ref={modelRef} object={scene} scale={scale} {...props} />;
}

const Skills = () => {
  const skills = [
    {
      name: 'Full Stack Development',
      path: '/walleanimated.glb',
      scale: 0.4,
      description: `I have strong skills in both frontend and backend development...`,
      image: fullStackImage,
    },
    {
      name: 'Front-End Development',
      path: '/a.i._c.o.r.e.glb',
      scale: 2,
      description: `I have extensive experience in frontend development using HTML and CSS...`,
      image: frontEndImage,
    },
    {
      name: 'Back-End Development',
      path: '/robot_carton.glb',
      scale: 1.5,
      description: `On the backend, I work with technologies such as NestJS, Express.js...`,
      image: backendImage,
    },
    {
      name: 'Programming Languages',
      path: '/magnetbot_animated.glb',
      scale: 0.4,
      description: `I am proficient in various programming languages including C, Java, JavaScript...`,
      image: langvageImage,
    },
    {
      name: 'Version Control and Collaboration',
      path: '/stylized_robot_transform.glb',
      scale: 0.4,
      description: `I use GitHub for version control, allowing me to track changes...`,
      image: versionImage,
    },
    {
      name: 'Database and Data Management',
      path: '/trebble_-_ratchet_and_clank_npc.glb',
      scale: 2,
      description: `For database management, I am skilled in both MySQL and MongoDB...`,
      image: dataBaseImage,
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const handleClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white relative overflow-hidden p-3">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">Skills</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3 overflow-y-auto h-96 mb-8 md:mb-0 no-scrollbar rounded-lg border border-gray-700">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 cursor-pointer border-b border-gray-700 transition-all duration-200 ${selectedSkill.name === skill.name ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                onClick={() => handleClick(skill)}
              >
                <p className="text-lg font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full md:w-2/3 h-96 rounded-lg bg-gray-800 bg-opacity-50 p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment="studio">
                    <Model path={selectedSkill.path} scale={selectedSkill.scale} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </Suspense>
          </div>
        </div>
        {selectedSkill && (
          <div className="mt-10 p-4 bg-gray-800 bg-opacity-75 rounded-lg text-left shadow-lg animate__animated animate__fadeIn animate__delay-2s">
            <div className="flex items-center justify-center mb-4">
              <img src={selectedSkill.image} alt={selectedSkill.name} className="w-20 h-20 rounded-full border-4 border-gray-700 shadow-md" />
            </div>
            <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
            <p className="mt-2">{selectedSkill.description}</p>
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse"></div>
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
