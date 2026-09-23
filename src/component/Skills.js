import React, { useState, useEffect } from 'react';

const BUCKET = 'https://untgtsclbjlgemwljimq.supabase.co/storage/v1/object/public/website-images';

// Only techs that have a logo in the bucket — the grid below covers the full stack.
const techStack = [
  { name: 'Angular', image: `${BUCKET}/angular.png` },
  { name: 'React', image: `${BUCKET}/react.png` },
  { name: 'Next.js', image: `${BUCKET}/next.png` },
  { name: 'NestJS', image: `${BUCKET}/nest.png` },
  { name: 'Node.js', image: `${BUCKET}/nodjs.png` },
  { name: 'Spring Boot', image: `${BUCKET}/spring.png` },
  { name: 'MySQL', image: `${BUCKET}/MySQL.png` },
  { name: 'MongoDB', image: `${BUCKET}/mongodb.png` },
  { name: 'Tailwind CSS', image: `${BUCKET}/tailwind.png` },
  { name: 'Bootstrap', image: `${BUCKET}/Bootstrap.png` },
];

const services = [
  {
    title: 'Full-Stack Product Development',
    icon: '🧩',
    description:
      'I build end-to-end web products — from typed, component-driven frontends in Angular, Vue and React to REST APIs in NestJS, Spring Boot and ASP.NET Core.',
    tags: ['Angular', 'Vue.js', 'React', 'NestJS', 'Spring Boot'],
  },
  {
    title: 'Enterprise Systems & APIs',
    icon: '🏢',
    description:
      'Shipping features inside large-scale enterprise codebases — People\'s HR at HSenid, and an offline-first manufacturing ERP — with complex data models and RESTful services.',
    tags: ['ASP.NET Core', 'C#', 'MS SQL Server', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps Engineering',
    icon: '☁️',
    description:
      'Provisioning and automating cloud-native infrastructure: Kubernetes workloads on AWS EKS, defined with Terraform and delivered through GitHub Actions pipelines.',
    tags: ['AWS EKS', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD'],
  },
];

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '⌨️',
    items: ['C#', 'Java', 'JavaScript', 'TypeScript', 'C'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['Angular', 'Vue.js', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    items: ['ASP.NET MVC', 'ASP.NET Core', 'VB.NET', 'Spring Boot', 'NestJS', 'Node.js'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    items: ['MS SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Cloud Platforms',
    icon: '🌐',
    items: ['Microsoft Azure', 'AWS EKS', 'IAM', 'VPC', 'S3', 'CloudWatch', 'Route 53'],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: '🚀',
    items: ['Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Git', 'Azure DevOps'],
  },
];

const WhatIDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('what-i-do');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const reveal = (delay) => ({
    transitionDelay: `${delay}ms`,
  });

  return (
    <section id="what-i-do" className="py-20 bg-gray-900 text-white px-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/10 pointer-events-none"></div>

      <style>
        {`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          #what-i-do .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 35s linear infinite;
          }
          #what-i-do .marquee-viewport:hover .marquee-track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            #what-i-do .marquee-track { animation: none; }
          }
        `}
      </style>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-5 bg-orange-500/10 text-orange-300 text-xs font-semibold tracking-widest uppercase rounded-full border border-orange-500/40">
            Capabilities
          </span>
          <h2 className="text-5xl font-extrabold mb-5 text-red-700 drop-shadow-lg">What I Do</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            I turn business requirements into working software — designing the interface, the API and
            the infrastructure it runs on.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 hover:border-orange-500/70 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={reveal(200 + index * 120)}
            >
              {/* Icon tile */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-orange-600/30 to-red-600/30 border border-orange-500/40 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-900/70 text-gray-300 text-xs rounded-full border border-gray-700 group-hover:border-orange-600/60 group-hover:text-orange-300 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div
          className={`mb-24 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={reveal(600)}
        >
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-500 mb-8">
            Tools I work with
          </p>

          <div className="marquee-viewport relative overflow-hidden">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 mx-3 px-6 py-4 bg-gray-800/60 rounded-xl border border-gray-700 hover:border-orange-500/70 hover:bg-gray-800 transition-all duration-300"
                  style={{ flex: '0 0 auto' }}
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="object-contain"
                    style={{ width: '32px', height: '32px' }}
                    loading="lazy"
                  />
                  <span className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Edge fades */}
            <div
              className="absolute inset-y-0 left-0 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"
              style={{ width: '120px' }}
            ></div>
            <div
              className="absolute inset-y-0 right-0 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"
              style={{ width: '120px' }}
            ></div>
          </div>
        </div>

        {/* Technical skills grid */}
        <div>
          <h3
            className={`text-3xl font-bold mb-10 text-center text-orange-500 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={reveal(700)}
          >
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative bg-gray-800/40 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/70 hover:bg-gray-800/80 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={reveal(800 + index * 80)}
              >
                <div className="flex items-center mb-5">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-800/50 group-hover:border-orange-500/60 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-24 left-16 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-16 w-2 h-2 bg-red-500 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
    </section>
  );
};

export default WhatIDo;
