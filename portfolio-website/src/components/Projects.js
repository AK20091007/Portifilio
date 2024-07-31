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
              <ProjectTitle>Senior Software Developer</ProjectTitle>
              <ProjectDescription>Client: Santander Consumer USA, Dallas, TX</ProjectDescription>
              <ProjectDescription>Duration: June 2023 – May 2024</ProjectDescription>
              <ul>
                <li>Led the development of a new user-friendly React JS application for customer deposits.</li>
                <li>Collaborated with business analysts and AEM teams to define content and features.</li>
                <li>Developed isomorphic applications using React.js and Redux with GraphQL.</li>
                <li>Implemented unit testing using TDD (React Testing Library/Jest) and BDD (JavaScript Selenium).</li>
                <li>Optimized AEM applications for performance, scalability, and security.</li>
                <li>Created responsive designs for various devices using HTML5 & CSS3.</li>
                <li>Utilized Redux for data management and deployed code using CI/CD pipelines.</li>
              </ul>
              <ProjectDescription>
                Environment: HTML5, CSS3, JavaScript, DOM, JSON, React JS, React Native, Redux, Jest, TypeScript, Bootstrap, MVC, Karma, Jasmine, Webpack, Grunt, Web API, Microsoft Visual Studio, GIT, VSTS.
              </ProjectDescription>
            </Project>
            <Project>
              <ProjectTitle>Software Developer</ProjectTitle>
              <ProjectDescription>Company: Florida Blue, Jacksonville, Florida</ProjectDescription>
              <ProjectDescription>Duration: Jan 2023 – Apr 2023</ProjectDescription>
              <ul>
                <li>Developed internal Medicare projects Recon 360 and Medicare 360 using React.js, Redux-Saga, and React context provider.</li>
                <li>Built dynamic web pages with ReactJS, HTML5, CSS3, and jQuery.</li>
                <li>Used Redux to store data from multiple API endpoints.</li>
                <li>Implemented responsive layouts and user interfaces using Bootstrap and LESS.</li>
                <li>Participated in Agile Scrum methodology for iterative application development.</li>
              </ul>
              <ProjectDescription>
                Environment: HTML5, CSS3, Sass, Less, JavaScript, Bootstrap, Ajax, React JS, Redux, Flex, MySQL, XML, JSON, GitHub, Restful API, AWS, JIRA, Jasmine, WebStorm.
              </ProjectDescription>
            </Project>
            <Project>
              <ProjectTitle>Software Developer</ProjectTitle>
              <ProjectDescription>Company: Wipro, Hyderabad, Telangana, India</ProjectDescription>
              <ProjectDescription>Clients: HCA & Info Crossing</ProjectDescription>
              <ProjectDescription>Duration: Jun 2018 – Dec 2021</ProjectDescription>
              <ul>
                <li>Developed a healthcare management web application using Angular 6 & 7, HTML5, CSS3, and TypeScript.</li>
                <li>Created single-page applications (SPAs) with Angular directives, services, components, and modules.</li>
                <li>Implemented reusable DOM manipulation using Angular custom directives.</li>
                <li>Developed RESTful web services using Node.js and Express.js.</li>
                <li>Utilized MongoDB for database persistence and managed cross-browser compatibility issues.</li>
              </ul>
              <ProjectDescription>
                Environment: HTML5, CSS3, Angular, JSX, LESS, Bootstrap, Flex, Jest, Webpack, Web API, IntelliJ, GIT, CI/CD, Selenium.
              </ProjectDescription>
            </Project>
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>
    </Zoom>
  );
};

export default Projects;
