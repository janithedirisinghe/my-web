import React from 'react';
import myPicture from './images/profile-pic.png';

function AboutMe() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hello! , a passionate developer with experience in various modern web technologies. I enjoy creating beautiful and functional web applications. 
            In my free time, I love to learn new skills, work on personal projects, and explore the latest trends in technology.
          </p>
          <p className="text-lg">
            I believe in continuous learning and improvement, and I am always eager to take on new challenges that allow me to grow both personally and professionally.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center p-20">
          <img src={myPicture} alt="My Picture" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
