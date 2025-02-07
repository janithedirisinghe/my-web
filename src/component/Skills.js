import React from 'react';

const angular = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//angular.png"
const nestjs = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//nest.png"
const nextjs = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//next.png"
const nodejs = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//nodjs.png"
const tailwind = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//tailwind.png"
const mysql = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//MySQL.png"
const spring = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//spring.png"
const react = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//react.png"
const boostrap = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//Bootstrap.png"
const mongodb = "https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images//mongodb.png"

const skills = [
  { title: 'Angular', description: 'A powerful framework for building dynamic web applications.', image: angular },
  { title: 'NestJS', description: 'A progressive Node.js framework for scalable applications.', image: nestjs },
  { title: 'Next.js', description: 'A React framework for production-grade applications.', image: nextjs },
  { title: 'Node.js', description: 'A runtime for building scalable server-side applications.', image: nodejs },
  { title: 'Tailwind CSS', description: 'A utility-first CSS framework for modern UI design.', image: tailwind },
  { title: 'MySQL', description: 'A reliable relational database management system.', image: mysql },
  { title: 'Spring Boot', description: 'An opinionated framework for Java-based applications.', image: spring },
  { title: 'React', description: 'A JavaScript library for building user interfaces.', image: react },
  { title: 'Bootstrap', description: 'A popular CSS framework for responsive web design.', image: boostrap },
  { title: 'MongoDB', description: 'A flexible NoSQL database for modern applications.', image: mongodb },
];

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-20 bg-gray-900 text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg">What I Do</h2>
        
        <div className="overflow-x-auto flex space-x-6 p-4 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>
            {`
              #what-i-do .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-320px * ${skills.length})); }
              }
              #what-i-do .scrolling-loop {
                display: flex;
                animation: scroll 20s linear infinite;
              }
            `}
          </style>
          <div className="scrolling-loop">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[320px] bg-cover bg-center rounded-2xl p-4 shadow-lg snap-center relative flex items-center justify-center text-center min-h-96"
                style={{ backgroundImage: `url(${skill.image})`, backdropFilter: 'blur(10px)' }}
              >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full h-full flex flex-col justify-center items-center">
                  <h3 className="text-4xl font-bold text-white drop-shadow-md">{skill.title}</h3>
                  <p className="mt-3 text-lg text-gray-300">{skill.description}</p>
                </div>
              </div>
            ))}
            {skills.map((skill, index) => (
              <div
                key={index + skills.length}
                className="min-w-[320px] bg-cover bg-center rounded-2xl p-5 shadow-lg snap-center relative flex items-center justify-center text-center min-h-96"
                style={{ backgroundImage: `url(${skill.image})`, backdropFilter: 'blur(10px)' }}
              >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg w-full h-full flex flex-col justify-center items-center">
                  <h3 className="text-4xl font-bold text-white drop-shadow-md">{skill.title}</h3>
                  <p className="mt-3 text-lg text-gray-300">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
