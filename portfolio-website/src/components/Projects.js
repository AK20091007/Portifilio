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
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1c40f;
  font-size: 36px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
                <li>Led the backend development using Java Spring Boot for a new customer deposits application.</li>
                <li>Developed and maintained RESTful and SOAP web services.</li>
                <li>Utilized Kafka for message brokering between microservices.</li>
                <li>Implemented CI/CD pipelines using Jenkins and GitLab CI/CD.</li>
                <li>Collaborated with frontend teams to integrate ReactJS applications with backend services.</li>
                <li>Developed complex user interfaces using ReactJS, enhancing the user experience through efficient state management with Redux.</li>
                <li>Implemented reusable React components, reducing development time and ensuring consistency across the application.</li>
                <li>Optimized React applications for performance and scalability.</li>
                <li>Conducted unit testing using JUnit and integration testing with Selenium.</li>
                <li>Designed and implemented database schemas in MySQL for efficient data storage and retrieval.</li>
                <li>Improved application performance by optimizing Java code and database queries.</li>
                <li>Provided technical mentorship to junior developers.</li>
                <li>Mentored team members on best practices in React development, including component lifecycle, hooks, and state management.</li>
                <li>Implemented responsive design and cross-browser compatibility to ensure a seamless user experience across various devices.</li>
              </ul>
              <ProjectDescription>
                Environment: Java Spring Boot, Spring MVC, Spring Security, REST, SOAP, Kafka, Docker, ReactJS, Redux, Jenkins, GitLab CI/CD, IntelliJ, Git.
              </ProjectDescription>
            </Project>
            <Project>
              <ProjectTitle>Software Developer</ProjectTitle>
              <ProjectDescription>Company: Florida Blue, Jacksonville, Florida</ProjectDescription>
              <ProjectDescription>Duration: Jan 2023 – Apr 2023</ProjectDescription>
              <ul>
                <li>Developed backend services for a healthcare management application using Spring Boot.</li>
                <li>Implemented RESTful APIs and integrated them with frontend Angular applications.</li>
                <li>Utilized Docker for containerization and deployment.</li>
                <li>Developed secure authentication and authorization mechanisms using Spring Security.</li>
                <li>Automated build and deployment processes using Jenkins CI/CD pipelines.</li>
                <li>Collaborated with the frontend team to ensure seamless integration with React components.</li>
              </ul>
              <ProjectDescription>
                Environment: Java Spring Boot, REST, Docker, MySQL, GitHub, JIRA.
              </ProjectDescription>
            </Project>
            <Project>
              <ProjectTitle>Software Developer</ProjectTitle>
              <ProjectDescription>Company: Wipro, Hyderabad, Telangana, India</ProjectDescription>
              <ProjectDescription>Clients: HCA & Info Crossing</ProjectDescription>
              <ProjectDescription>Duration: Jun 2019 – Dec 2021</ProjectDescription>
              <ul>
                <li>Developed internal Medicare projects using Java Spring technologies and ReactJS.</li>
                <li>Implemented microservices architecture for scalable application development.</li>
                <li>Developed dynamic web pages and integrated with backend services.</li>
                <li>Utilized ReactJS to create interactive UIs and manage application state with Redux.</li>
                <li>Integrated third-party libraries and APIs to extend React application functionality.</li>
                <li>Participated in Agile Scrum methodology for iterative application development.</li>
                <li>Designed and implemented caching strategies using Spring Cache and Redis to enhance application performance.</li>
                <li>Integrated third-party APIs and services to extend application functionalities.</li>
                <li>Conducted code reviews and ensured adherence to best coding practices.</li>
                <li>Improved the performance of React applications by implementing lazy loading and code splitting.</li>
              </ul>
              <ProjectDescription>
                Environment: Java Spring Boot, Spring Cloud, REST, SOAP, Microservices, ReactJS, Redux, Docker, MongoDB, Git, CI/CD, Selenium.
              </ProjectDescription>
            </Project>
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsSection>
    </Zoom>
  );
};

export default Projects;
