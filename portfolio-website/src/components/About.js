import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import aboutBackground from '../assets/images/about-background.jpg';

const AboutSection = styled.section`
  padding: 60px 20px;
  background: url(${aboutBackground}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const AboutContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1c40f;
  font-size: 36px;
`;

const AboutText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #fff;
`;

const About = () => {
  return (
    <Slide>
      <AboutSection id="about">
        <AboutContainer>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            Experienced Software Developer with over <span className="highlight">5+ years</span> in backend and frontend development. Expertise in <span className="highlight">Java Spring Boot</span>, <span className="highlight">REST</span>, <span className="highlight">SOAP</span>, <span className="highlight">microservices</span>, and <span className="highlight">ReactJS with Redux</span>. Adept at leading small teams in software development, providing technical support, troubleshooting, and delivering business solutions. Strong analytical and problem-solving skills with a passion for technology. Proven ability to optimize performance, enhance security, and ensure scalability of enterprise-level applications.
          </AboutText>
        </AboutContainer>
      </AboutSection>
    </Slide>
  );
};

export default About;
