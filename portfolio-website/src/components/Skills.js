import React from 'react';
import '../styles.css';
import { Fade } from 'react-awesome-reveal';
import {
  FaHtml5, FaCss3Alt, FaSass, FaLess, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaAws, FaDocker, FaJenkins,
} from 'react-icons/fa';
import {
  SiTypescript, SiRedux, SiAdobephotoshop, SiFigma, SiJest, SiSelenium, SiAzuredevops, SiVisualstudiocode, SiSketch, SiInvision, SiAdobeillustrator
} from 'react-icons/si';

const Skills = () => {
  return (
    <Fade>
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><FaHtml5 style={{ color: '#E34F26' }} /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><FaCss3Alt style={{ color: '#1572B6' }} /></a>
          <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><FaSass style={{ color: '#CC6699' }} /></a>
          <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer"><FaLess style={{ color: '#1D365D' }} /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><FaJs style={{ color: '#F7DF1E' }} /></a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><SiTypescript style={{ color: '#3178C6' }} /></a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><FaBootstrap style={{ color: '#563D7C' }} /></a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact style={{ color: '#61DAFB' }} /></a>
          <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer"><FaReact style={{ color: '#61DAFB' }} /></a>
          <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><SiRedux style={{ color: '#764ABC' }} /></a>
          <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaNodeJs style={{ color: '#339933' }} /></a>
          <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer"><SiAdobephotoshop style={{ color: '#31A8FF' }} /></a>
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"><SiFigma style={{ color: '#F24E1E' }} /></a>
          <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer"><SiSketch style={{ color: '#F7B500' }} /></a>
          <a href="https://www.invisionapp.com/" target="_blank" rel="noopener noreferrer"><SiInvision style={{ color: '#FF3366' }} /></a>
          <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer"><SiAdobeillustrator style={{ color: '#FF9A00' }} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: '#181717' }} /></a>
          <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><FaDocker style={{ color: '#2496ED' }} /></a>
          <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer"><FaJenkins style={{ color: '#D24939' }} /></a>
          <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><FaAws style={{ color: '#232F3E' }} /></a>
          <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer"><SiAzuredevops style={{ color: '#0078D7' }} /></a>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><SiVisualstudiocode style={{ color: '#007ACC' }} /></a>
          <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"><SiJest style={{ color: '#C21325' }} /></a>
          <a href="https://www.selenium.dev/" target="_blank" rel="noopener noreferrer"><SiSelenium style={{ color: '#43B02A' }} /></a>
        </div>
      </section>
    </Fade>
  );
};

export default Skills;
