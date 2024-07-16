import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import skillsBackground from '../assets/images/skills-background.jpg';
import { FaHtml5, FaCss3Alt, FaSass, FaLess, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaAws, FaDocker, FaJenkins, FaSketch } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiAdobephotoshop, SiFigma, SiJest, SiSelenium, SiAzuredevops, SiVisualstudiocode, SiAdobexd, SiInvision, SiMiro } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 60px 20px;
  background: url(${skillsBackground}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const SkillsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  max-width: 1200px; /* Increased to accommodate more skills in a row */
  margin: 0 auto;
`;

const SkillsTitle = styled.h2`
  margin-bottom: 20px;
  color: #f1c40f;
  font-size: 36px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Adjusted min-width for more skills in a row */
  gap: 20px;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Adjusted for smaller screens */
  }
`;

const SkillCard = styled.a`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: #333;
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: ${props => props.color || 'black'};
`;

const SkillName = styled.h3`
  font-size: 18px;
  color: #007bff;
`;

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'SASS', icon: <FaSass />, color: '#CC6699', url: 'https://sass-lang.com/' },
    { name: 'LESS', icon: <FaLess />, color: '#1D365D', url: 'http://lesscss.org/' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#007ACC', url: 'https://www.typescriptlang.org/' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', url: 'https://getbootstrap.com/' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB', url: 'https://reactjs.org/' },
    { name: 'React Native', icon: <FaReact />, color: '#61DAFB', url: 'https://reactnative.dev/' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', url: 'https://redux.js.org/' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', url: 'https://nodejs.org/' },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop />, color: '#31A8FF', url: 'https://www.adobe.com/products/photoshop.html' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', url: 'https://www.figma.com/' },
    { name: 'Sketch', icon: <FaSketch />, color: '#F7B500', url: 'https://www.sketch.com/' },
    { name: 'Adobe XD', icon: <SiAdobexd />, color: '#FF61F6', url: 'https://www.adobe.com/products/xd.html' },
    { name: 'InVision', icon: <SiInvision />, color: '#FF3366', url: 'https://www.invisionapp.com/' },
    { name: 'Miro', icon: <SiMiro />, color: '#050038', url: 'https://miro.com/' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717', url: 'https://github.com/' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', url: 'https://www.docker.com/' },
    { name: 'Jenkins', icon: <FaJenkins />, color: '#D24939', url: 'https://www.jenkins.io/' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900', url: 'https://aws.amazon.com/' },
    { name: 'Azure', icon: <SiAzuredevops />, color: '#0078D7', url: 'https://azure.microsoft.com/' },
    { name: 'Visual Studio Code', icon: <SiVisualstudiocode />, color: '#007ACC', url: 'https://code.visualstudio.com/' },
    { name: 'Jest', icon: <SiJest />, color: '#C21325', url: 'https://jestjs.io/' },
    { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A', url: 'https://www.selenium.dev/' },
  ];

  return (
    <Fade>
      <SkillsSection id="skills">
        <SkillsContainer>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsGrid>
            {skills.map(skill => (
              <SkillCard key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer">
                <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </SkillsSection>
    </Fade>
  );
};

export default Skills;
