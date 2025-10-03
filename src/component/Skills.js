import React, { useState, useRef } from 'react';

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
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  return (
    <section id="what-i-do" className="py-20 bg-gray-900 text-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-red-700 drop-shadow-lg">What I Do</h2>
        
        <div 
          className="overflow-x-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style>
            {`
              #what-i-do .overflow-x-hidden::-webkit-scrollbar {
                display: none;
              }
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-340px * ${skills.length})); }
              }
              #what-i-do .scrolling-loop {
                display: flex;
                animation: scroll 30s linear infinite;
                animation-play-state: ${isPaused ? 'paused' : 'running'};
              }
              #what-i-do .scrolling-loop:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className="scrolling-loop gap-6" ref={scrollRef}>
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="group min-w-[340px] bg-cover bg-center rounded-2xl shadow-2xl snap-center relative flex items-center justify-center text-center min-h-96 overflow-hidden border-2 border-gray-700 hover:border-orange-500/70 transition-all duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${skill.image})` }}
              >
                <div className="bg-black/60 group-hover:bg-black/40 p-8 rounded-lg w-full h-full flex flex-col justify-center items-center backdrop-blur-sm transition-all duration-500">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    <h3 className="text-4xl font-bold text-white drop-shadow-md mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="mt-3 text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-orange-900/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-orange-500/50">
              Paused - Hover to explore
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
