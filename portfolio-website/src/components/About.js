import React from 'react';
import '../styles.css';
import { Slide } from 'react-awesome-reveal';

const About = () => {
  return (
    <Slide>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p className="about-text">
          Dynamic <span className="highlight">UX Designer</span> and <span className="highlight">React Developer</span> with over <span className="highlight">8 years of experience</span> in creating engaging, user-friendly web and mobile applications. Proficient in modern UI frameworks, focusing on <span className="highlight">React.js</span> and <span className="highlight">React Native</span>. Adept at utilizing design tools like <span className="highlight">Figma</span> and <span className="highlight">Adobe Photoshop</span> and implementing best practices in user experience and interface design. Skilled in collaborating with cross-functional teams to deliver high-quality products that enhance user satisfaction and engagement.
        </p>
      </section>
    </Slide>
  );
};

export default About;
