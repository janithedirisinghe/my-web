import React, { useState } from 'react';
import ProjectModal from './Models/ProjectsModel';
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS imported
import './CSS/Project.css';

const projects = [
  {
    id: 1,
    title: 'Resource Portfolio Management System for Tapro Technology',
    description: `The Resource Portfolio Management System for Tapro Technology is a comprehensive solution aimed at optimizing resource allocation and management within the company's industrial projects. Leveraging cutting-edge technologies such as SPA, Angular, TypeScript, Bootstrap, Nest.js, and MySQL, along with innovative methodologies, this system enhances productivity, streamlines operations, and maximizes resource utilization across various departments and projects.`,
    smallDescription: 'Description of Project 1',
    videoUrl: 'dQw4w9WgXcQ', // Replace with actual video ID
    technologies: ['SPA', 'Angular', 'TypeScript', 'Bootstrap', 'Nest.js', 'MySQL']
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    smallDescription: 'Description of Project 2',
    videoUrl: 'https://www.youtube.com', // Replace with actual video URL
    technologies: ['SPA', 'Angular', 'TypeScript', 'Bootstrap', 'Nest.js', 'MySQL']
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3',
    smallDescription: 'Description of Project 3',
    videoUrl: 'https://www.youtube.com/embed/example3', // Replace with actual video URL
    technologies: ['SPA', 'Angular', 'TypeScript', 'Bootstrap', 'Nest.js', 'MySQL']
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="animated-bg absolute inset-0 z-0"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-20 text-white">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transform transition duration-300 hover:scale-105 p-4"
              style={{ width: '300px', height: '400px', border: '2px solid #444', cursor: 'pointer' }} // Fixed size for project containers
              onClick={() => openModal(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
              <div className="absolute top-0 left-0 w-full bg-opacity-75 p-4">
                <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                <div className="text-gray-200 overflow-y-scroll h-50 custom-scrollbar p-2 rounded">
                  {project.smallDescription}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />
    </section>
  );
}

export default Projects;
