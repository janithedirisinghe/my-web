import React from 'react';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import Articles from './component/Articles';
import Home from './component/Home';
import Skills from './component/Skills';



function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contacts />
      <Articles />
    </div>
  );
}

export default App;
