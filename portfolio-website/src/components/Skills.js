import React from 'react';
import '../styles.css';
import { Fade } from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaSass, FaLess, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaAws, FaDocker, FaJenkins } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiAdobephotoshop, SiFigma, SiJest, SiSelenium, SiAzuredevops, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  return (
    <Fade>
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <h3>Web Technologies</h3>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3Alt /> CSS3</li>
            <li><FaSass /> SASS</li>
            <li><FaLess /> LESS</li>
            <li><FaJs /> JavaScript</li>
            <li><SiTypescript /> TypeScript</li>
            <li><FaBootstrap /> Bootstrap</li>
            <li><FaReact /> React.js</li>
            <li><FaReact /> React Native</li>
            <li><SiRedux /> Redux</li>
            <li><FaNodeJs /> Node.js</li>
            <li><SiAdobephotoshop /> Adobe Photoshop</li>
            <li><SiFigma /> Figma</li>
          </ul>

          <h3>Design Tools</h3>
          <ul>
            <li><SiAdobephotoshop /> Adobe Photoshop</li>
            <li><SiFigma /> Figma</li>
            <li>Browser Stack</li>
          </ul>

          <h3>Development Tools</h3>
          <ul>
            <li><FaGithub /> GitHub</li>
            <li><FaDocker /> Docker</li>
            <li><FaJenkins /> Jenkins</li>
            <li><FaAws /> AWS</li>
            <li><SiAzuredevops /> Azure</li>
            <li><SiVisualstudiocode /> Visual Studio Code</li>
          </ul>

          <h3>Testing Tools</h3>
          <ul>
            <li><SiJest /> Jest</li>
            <li><SiSelenium /> Selenium</li>
            <li> Browser Stack</li>
          </ul>

          <h3>Other</h3>
          <ul>
            <li>Agile Methodologies (Scrum)</li>
            <li>Business Requirements Gathering</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Cross-Browser Compatibility</li>
          </ul>
        </div>
      </section>
    </Fade>
  );
};

export default Skills;
