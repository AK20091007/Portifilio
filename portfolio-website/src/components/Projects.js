import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import { Zoom } from 'react-awesome-reveal';
import '../styles.css';

const Projects = () => {
  return (
    <Zoom cascade triggerOnce>
      <section id="projects" className="projects-container">
        <h2 className="projects-title">Projects & Experience</h2>

        <div className="project">
          <img src={project1} alt="Senior Software Developer - OM Tek Inc" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Senior Software Developer - OM Tek Inc</h3>
            <p className="project-description">Client: Santander Consumer USA, Dallas, TX</p>
            <p className="project-description">Duration: Jan 2022 – May 2024</p>
            <ul>
              <li>Led UX design efforts to create user-centered interfaces for financial applications.</li>
              <li>Conducted extensive user research, including interviews, surveys, and usability testing, to gather insights and inform design decisions.</li>
              <li>Developed wireframes, high-fidelity mockups, and interactive prototypes using Figma and Adobe Photoshop.</li>
              <li>Created user personas and journey maps to better understand user needs and pain points.</li>
              <li>Implemented intuitive user interfaces using React.js and React Native, focusing on usability and accessibility.</li>
              <li>Conducted usability testing sessions to identify pain points, gather feedback, and iterate on designs.</li>
              <li>Collaborated with cross-functional teams, including product managers, developers, and stakeholders, to ensure design consistency and alignment with business goals.</li>
              <li>Applied responsive design principles and techniques to ensure seamless experiences across various devices and screen sizes.</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <img src={project2} alt="UI Developer - SmartInt Technologies LLC" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">UI Developer - SmartInt Technologies LLC</h3>
            <p className="project-description">Client: Florida Blue, Jacksonville, FL</p>
            <p className="project-description">Duration: June 2018 – Dec 2021</p>
            <ul>
              <li>Designed and developed a comprehensive healthcare mobile application with a strong focus on user experience and accessibility.</li>
              <li>Created user-friendly interfaces with Material Design components, ensuring a consistent and cohesive visual language.</li>
              <li>Conducted user testing and gathered feedback to continuously improve the app's usability and user satisfaction.</li>
              <li>Integrated data visualization using High charts to present complex data in an understandable and user-friendly way.</li>
              <li>Collaborated with stakeholders to define user requirements, create wireframes, and develop design solutions that meet user needs.</li>
              <li>Enhanced app performance by optimizing UX workflows, reducing the user's time to interact, and ensuring smooth navigation.</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <img src={project2} alt="Software Developer - Wipro Technologies" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Software Developer - Wipro Technologies</h3>
            <p className="project-description">Clients: HCA & Info Crossing, Hyderabad, India</p>
            <p className="project-description">Duration: May 2016 – Dec 2017</p>
            <ul>
              <li>Spearheaded the UX design for internal Medicare projects, ensuring a seamless user experience and improving user engagement.</li>
              <li>Developed reusable UI components to improve development efficiency and maintain design consistency across applications.</li>
              <li>Conducted A/B testing to validate design choices, optimize user interactions, and increase user satisfaction.</li>
              <li>Worked closely with the design team to create engaging, user-friendly interfaces that met business and user goals.</li>
              <li>Implemented cross-browser compatible layouts using Bootstrap and LESS, ensuring a consistent user experience across all devices.</li>
              <li>Applied Agile methodologies and participated in daily standups and sprint planning, ensuring timely delivery of high-quality design solutions.</li>
            </ul>
          </div>
        </div>
      </section>
    </Zoom>
  );
};

export default Projects;
