/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import React, { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import langvageImage from './images/proLan.png';
import backendImage from './images/backend.png';
import fullStackImage from './images/FullStack.png';
import frontEndImage from './images/FrontEnd.png';
import versionImage from './images/versionImage.jpg';
import dataBaseImage from './images/dataBase.png';

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
    {
      name: 'Full Stack Development',
      path: '/Full-Stack.glb',
      scale: 0.4,
      description: `I have strong skills in both frontend and backend development, which allows me to build complete web applications. On the frontend, I use JavaScript, TypeScript, and HTML/CSS, along with frameworks like Angular, React, and Next.js to create interactive and user-friendly interfaces. For the backend, I work with NestJS, Express.js, and PHP to develop APIs and manage server-side logic.

I am experienced in using MySQL and MongoDB for handling databases, ensuring that data is stored and accessed efficiently. This allows me to manage the entire process, from creating the user interface to making sure the backend works smoothly with the database.

I use GitHub for version control and VS Code or IntelliJ IDEA as my development tools to ensure my projects are well-organized and easy to manage. With these skills, I can handle both the frontend and backend, delivering complete web applications from start to finish.`,
      image: fullStackImage,
    },
    {
      name: 'Front-End Development',
      path: '/front-end.glb',
      scale: 0.4,
      description: `I have extensive experience in frontend development using HTML and CSS for creating responsive and visually appealing interfaces. I am skilled in frameworks like Angular, React, and Next.js, which allow me to build dynamic, user-friendly web applications with a focus on performance and modern design principles.`,
      image: frontEndImage,
    },
    {
      name: 'Back-End Development',
      path: '/Back-end.glb',
      scale: 0.4,
      description: `On the backend, I work with technologies such as NestJS, Express.js, and PHP. I am comfortable creating robust and secure server-side logic, handling APIs, and integrating databases to ensure that the application’s data flow and functionality are well-structured and efficient.`,
      image: backendImage,
    },
    {
      name: 'Programming Languages',
      path: '/Program.glb',
      scale: 0.4,
      description: `I am proficient in various programming languages, including C, Java, JavaScript, and TypeScript. These languages form the foundation of my software development expertise, enabling me to build everything from basic applications to more complex systems with a focus on efficiency and clean code.`,
      image: langvageImage,
    },
    {
      name: 'Version Control and Collaboration',
      path: '/Version.glb',
      scale: 0.4,
      description: `I use GitHub for version control, allowing me to track changes in code, collaborate with teams, and manage different project versions seamlessly. My understanding of Git makes it easy to handle complex codebases and collaborate in team environments effectively.`,
      image: versionImage,
    },
    {
      name: 'Database and Data Management',
      path: '/Database.glb',
      scale: 0.4,
      description: `For database management, I am skilled in both MySQL and MongoDB. My experience includes designing relational database schemas, optimizing queries, and working with NoSQL databases to manage data efficiently, whether in structured or unstructured formats.`,
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
        <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg">Skills</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3 overflow-y-auto h-96 mb-8 md:mb-0 no-scrollbar rounded-lg border border-gray-700">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 cursor-pointer border-b border-gray-700 transition-all duration-200 ${
                  selectedSkill.name === skill.name ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'
                }`}
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
                  <Stage environment="">
                    <Model path={selectedSkill.path} scale={selectedSkill.scale} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </Suspense>
          </div>
        </div>
        {selectedSkill && (
          <div className="mt-10 p-4 bg-gray-800 bg-opacity-75 rounded-lg text-left shadow-lg">
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
