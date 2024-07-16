import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import projectsBackground from '../assets/images/projects-background.jpg';

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: url(${projectsBackground}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  max-width: 1200px; /* Increased to accommodate two projects per row */
  margin: 0 auto;
`;

const ProjectsTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1c40f;
  font-size: 36px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns for larger screens */
  }
`;

const Project = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  color: #333;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  color: #007bff;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
`;

const Projects = () => {
  return (
    <Zoom cascade triggerOnce>
      <ProjectsSection id="projects">
        <ProjectsContainer>
          <ProjectsTitle>Projects & Experience</ProjectsTitle>
          <ProjectsGrid>
            <Project>
              <ProjectTitle>Senior Software Developer - OM Tek Inc</ProjectTitle>
              <ProjectDescription>Client: Santander Consumer USA, Dallas, TX</ProjectDescription>
              <ProjectDescription>Duration: Jan 2022 – May 2024</ProjectDescription>
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
            </Project>
            <Project>
              <ProjectTitle>UI Developer - SmartInt Technologies LLC</ProjectTitle>
              <ProjectDescription>Client: Florida Blue, Jacksonville, FL</ProjectDescription>
              <ProjectDescription>Duration: June 2018 – Dec 2021</ProjectDescription>
              <ul>
                <li>Designed and developed a comprehensive healthcare mobile application with a strong focus on user experience and accessibility.</li>
                <li>Created user-friendly interfaces with Material Design components, ensuring a consistent and cohesive visual language.</li>
                <li>Conducted user testing and gathered feedback to continuously improve the app's usability and user satisfaction.</li>
                <li>Integrated data visualization using High charts to present complex data in an understandable and user-friendly way.</li>
                <li>Collaborated with stakeholders to define user requirements, create wireframes, and develop design solutions that meet user needs.</li>
                <li>Enhanced app performance by optimizing UX workflows, reducing the user's time to interact, and ensuring smooth navigation.</li>
              </ul>
            </Project>
            <Project>
              <ProjectTitle>Software Developer - Wipro Technologies</ProjectTitle>
              <ProjectDescription>Clients: HCA & Info Crossing, Hyderabad, India</ProjectDescription>
              <ProjectDescription>Duration: May 2016 – Dec 2017</ProjectDescription>
              <ul>
                <li>Spearheaded the UX design for internal Medicare projects, ensuring a seamless user experience and improving user engagement.</li>
                <li>Developed reusable UI components to improve development efficiency and maintain design consistency across applications.</li>
                <li>Conducted A/B testing to validate design choices, optimize user interactions, and increase user satisfaction.</li>
                <li>Worked closely with the design team to create engaging, user-friendly interfaces that met business and user goals.</li>
                <li>Implemented cross-browser compatible layouts using Bootstrap and LESS, ensuring a consistent user experience across all devices.</li>
                <li>Applied Agile methodologies and participated in daily standups and sprint planning, ensuring timely delivery of high-quality design solutions.</li>
              </ul>
            </Project>
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>
    </Zoom>
  );
};

export default Projects;
