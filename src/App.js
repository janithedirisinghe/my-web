import React from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contacts from './component/Contacts';
import Articles from './component/Articles';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Articles />
    </div>
  );
}

export default App;
