import React from 'react';
import myPicture from './images/profile-pic.png';

function AboutMe() {
  return (
    <section className="py-20 bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hello! I am a passionate developer with experience in various modern web technologies. I enjoy creating beautiful and functional web applications. 
            In my free time, I love to learn new skills, work on personal projects, and explore the latest trends in technology.
          </p>
          <p className="text-lg mb-4">
            I believe in continuous learning and improvement, and I am always eager to take on new challenges that allow me to grow both personally and professionally.
          </p>
          <a
            href="https://example.com/path/to/your/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 py-3 px-6 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition duration-200 transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-1/2 w-full flex justify-center p-20">
          <img src={myPicture} alt="My Picture" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
