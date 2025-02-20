import React, { useState } from 'react';
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
title: 'WedEase - Wedding Service Provider Portal',
description: `I am developing *WedEase*, a platform that connects customers and wedding service providers to discover, compare, and book various wedding services. The platform, built with Angular for the frontend, Spring Boot for the backend, and MySQL for the database, provides an intuitive user experience for both clients and vendors. It enables seamless communication, booking, and management of wedding services, making the wedding planning process more efficient and accessible. This project aims to create a comprehensive and reliable solution for couples to find trusted wedding vendors while offering service providers a streamlined method to manage bookings and client interactions.`,
smallDescription: `Building a wedding service provider portal to connect customers with vendors for discovering, comparing, and booking wedding services.`,
technologies: ['Angular', 'Spring Boot', 'MySQL'],
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
        <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg">My Projects</h2>
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
