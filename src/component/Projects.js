import React, { useState, useEffect } from 'react';
import ProjectModal from './Models/ProjectsModel';
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS imported
import './CSS/Project.css';
const pic1 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro1.png';
const pic2 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro1a.png';
const pic3 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro1b.png';
const pic4 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro1c.png';
const pic5 = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro1d.png';
const pr2a = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro2a.jpeg';
const pr2b = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro2b.jpeg';
const pr2c = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro2c.jpeg';
const pr2d = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro2d.png';
const pr2e = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//pro2e.jpeg';

const projects = [
  {
    id: 1,
    title: 'Resource Portfolio Management System for Tapro Technology',
    description: `In the dynamic landscape of project management, the allocation and management of resources remain a significant challenge for organizations striving for efficiency and optimal outcomes. 
This challenge typically involves resource planning and scheduling decisions. Tapro 
Technologies, a crucial unit within the organizational framework of Direct FN, operates within 
an agile Scrum framework for project management. Despite leveraging existing off-the-shelf 
project management systems, Tapro Technologies faces persistent hurdles in effectively 
managing resources across multiple projects, lacking a dedicated portfolio management system 
to show project details. This gap has underscored the need for a comprehensive Resource 
Portfolio Management (RPM) system.
The motivation for this project arises from the necessity identified by higher management 
within Tapro Technologies. The objective is to establish a robust mechanism that not only 
enables efficient resource allocation but also enhances the representation of project data for 
informed decision-making. Solving this problem is significant as it has the potential to 
streamline operations, optimize resource utilization, and improve overall project efficiency.
The primary objectives of the RPM system are to:
• Efficiently allocate resources across multiple projects.
• Improve the representation of critical project information.
• Manage resource availability and schedules.
• Incorporate variables such as project priority.
The proposed solution, the Resource Portfolio Management system, is designed to address these 
objectives comprehensively. The system will be utilized by project managers and higher 
management within Tapro Technologies. Inputs to the system will include data on project 
requirements, resource availability, resource details, sprint planning, and project schedules. The 
outputs will consist of optimized resource allocation plans, detailed project data visualization, 
visual representation of sprint management, and visual representations of resource utilization.
Through the implementation of the RPM system, Tapro Technologies aims to overcome its 
current resource management challenges, thereby achieving enhanced project efficiency and 
informed decision-making. `,
    smallDescription: `In the dynamic landscape of project management, the allocation and management of resources remain a significant challenge for organizations striving for efficiency and optimal outcomes. 
This challenge typically involves resource planning and scheduling decisions.`,
    technologies: ['SPA', 'Angular', 'TypeScript', 'Bootstrap', 'Nest.js', 'MySQL'],
    images: [
      pic1,
      pic2,
      pic3,
      pic4,
      pic5
    ]
  },
  {
    id: 2,
    title: 'Real-Time Monitoring of Gas Station Underground Fuel Tanks Using IoT Technology',
    description: 'This project focuses on developing an IoT-based solution for real-time monitoring of underground fuel tanks in gas stations. By integrating temperature sensors (DS18B20), IoT devices, and cloud-based systems, the project enables continuous monitoring of fuel levels, temperature, and tank conditions, ensuring operational safety and efficiency. The system is scalable and can be deployed in various gas station sizes and geographic locations, offering fuel station operators a more reliable and automated method for tracking tank performance and preventing potential hazards. The project was successfully presented and published at the 17th International Research Conference – IRC KDU 2024.',
    smallDescription: 'This project focuses on developing an IoT-based solution for real-time monitoring of underground fuel tanks in gas stations. By integrating temperature sensors (DS18B20), IoT devices, and cloud-based systems, the project enables continuous monitoring of fuel levels, temperature, and tank conditions, ensuring operational safety and efficiency.',
    technologies: ['HTML', 'CSS', 'JawaScript', 'ESP32', 'Firebase', 'Arduino'],
    images: [
      pr2a,
      pr2b,
      pr2c,
      pr2d,
      pr2e
    ]
  },
  {
    id: 3,
    title: 'Personalized Portfolio Platform ',
    description: `I developed a dynamic and interactive portfolio platform using React for a fast and scalable user interface, Tailwind CSS for modern and responsive design, and Three.js for 3D graphics. The platform showcases my projects, skills, and experiences through a clean, minimalistic interface with fluid animations and engaging visual elements. The integration of Three.js adds a unique touch, allowing for immersive 3D models and animations that create a memorable user experience. This platform is optimized for performance, mobile-friendly, and designed to highlight my expertise in web development and design
`,
    smallDescription: `Developed a personalised portfolio platform to showcase my professional
accomplishments, skills, and projects
`,
    technologies: ['React', 'Threejs', 'Tailwind'],
    images: [
    ]
  },
  {
    id: 4,
    title: 'Invity - Invitation Management Platform',
    description: `Invity is a streamlined platform for managing invitations for events. It
enables users to create and customize invitations, group invitees, and share
them via WhatsApp or email. The platform also provides real-time
attendance tracking and confirmation management, ensuring efficient event
coordination. The dashboard offers a clear view of invitation statistics and
attendee details.`,
    smallDescription: `Invity is a streamlined platform for managing invitations for events. It
enables users to create and customize invitations, group invitees, and share
them via WhatsApp or email
`,
    videoUrl: '', // Replace with actual video URL
    technologies: ['Nextjs', 'MySQL', 'Tailwind'],
    images: [
    ]
  },
  {id: 5,
    title: 'QR Based Order Management System',
    description: `I contributed to the development of a QR-based order management system using React for the frontend, NestJS for the backend, and MySQL for the database. The system allows customers to browse menus, place orders, and make payments directly from their smartphones by scanning QR codes, enhancing the dining experience in high-traffic restaurants. The platform streamlines the ordering process, reduces wait times, and increases operational efficiency, improving customer satisfaction. The system is designed to be scalable, responsive, and user-friendly, ensuring seamless integration into restaurant environments.`,
    smallDescription: `Developed a QR-based order management system to enhance dining efficiency and customer satisfaction in high-traffic restaurants.`,
    technologies: ['React', 'NestJS', 'MySQL'],
    images: [
    ]
    },
    {
      id: 6,
title: 'Centralized Wedding Services Marketplace',
description: `Built a scalable digital marketplace platform to connect users with wedding service providers such as venues, photographers, and vendors. Implemented advanced search and filtering features to improve vendor discovery and user experience. Incorporated recommendation and communication features to support better decision-making and efficient service selection. This project was also the subject of a published research paper at the International Conference on Multidisciplinary Approaches – 2026, University of Sri Jayewardenepura.`,
smallDescription: `Built a scalable digital marketplace to connect users with wedding service providers, with advanced search, filtering, and recommendation features.`,
technologies: ['Angular', 'Spring Boot', 'MySQL'],
images: [
]

    },
    {
      id: 8,
title: 'Sri Lankan Tuskers – Community Reporting & Tracking System',
description: `Built a full-stack community platform for reporting and tracking Sri Lankan tusker sightings, now live at srilankantuskers.com. Engineered a real-time interactive map visualizing tusker locations, supporting conservation monitoring and data-driven decision-making. Implemented SEO optimization and a centralized MongoDB database for sighting, health, and location records submitted by the public.`,
smallDescription: `Live community platform for reporting and tracking Sri Lankan tusker sightings, with a real-time interactive map and centralized database.`,
liveUrl: 'https://srilankantuskers.com',
technologies: ['NestJS', 'Vue.js', 'MongoDB'],
images: [
]

    },
    {
      id: 7,
title: 'Clothing Store E-commerce Platform',
description: `Contributed to the development of a scalable e-commerce platform for a clothing store using a microservices architecture. As the backend developer for the product microservice, I was responsible for managing product data, ensuring efficient data handling, and optimizing performance. The system was built with React for the frontend, Spring Boot for the backend, and utilized MongoDB and MySQL for data storage. The platform supports seamless product management, secure transactions, and a smooth shopping experience for users.`,
smallDescription: `Developed the product microservice for a clothing store e-commerce platform using a microservices architecture.`,
technologies: ['React', 'Spring Boot', 'MongoDB', 'MySQL'],
images: [
]

    }
];
 
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
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

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="animated-bg absolute inset-0 z-0"></div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className={`text-5xl font-extrabold mb-12 text-red-700 drop-shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-6 cursor-pointer border-2 border-gray-700 hover:border-orange-500/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                width: '320px', 
                minHeight: '420px',
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => openModal(project)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="text-gray-300 group-hover:text-gray-200 overflow-y-auto flex-grow custom-scrollbar p-3 rounded bg-black/20 mb-4 text-sm leading-relaxed">
                  {project.smallDescription}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-orange-900/40 text-orange-300 text-xs rounded-full border border-orange-700/50 group-hover:bg-orange-800/60 group-hover:border-orange-500/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-red-900/40 text-red-300 text-xs rounded-full border border-red-700/50">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Hover indicator */}
                {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-orange-400 text-sm font-semibold flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div> */}
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
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
