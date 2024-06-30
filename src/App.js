import React from 'react';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import AboutMe from './component/AboutMe';
import Home from './component/Home';
import Skills from './component/Skills';
import Gallery from './component/Gallery';



function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Gallery />
      <AboutMe />
      <Contacts />
    </div>
  );
}

export default App;
