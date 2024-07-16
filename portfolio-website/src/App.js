import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AcademicProjects from './components/AcademicProjects';
import './styles.css';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.about, .projects, .skills, .contact, .academic-projects');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <AcademicProjects />
        <Contact />
      </div>
    </Provider>
  );
};

export default App;
