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
            Dynamic <span className="highlight">UX Designer</span> and <span className="highlight">React Developer</span> with over <span className="highlight">8 years of experience</span> in creating engaging, user-friendly web and mobile applications. Proficient in modern UI frameworks, focusing on <span className="highlight">React.js</span> and <span className="highlight">React Native</span>. Adept at utilizing design tools like <span className="highlight">Figma</span> and <span className="highlight">Adobe Photoshop</span> and implementing best practices in user experience and interface design. Skilled in collaborating with cross-functional teams to deliver high-quality products that enhance user satisfaction and engagement.
          </AboutText>
        </AboutContainer>
      </AboutSection>
    </Slide>
  );
};

export default About;
