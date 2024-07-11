import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { LinearProgress } from '@mui/material';

const AppContainer = styled.div`
  background: linear-gradient(to bottom, #0077be, #00008b);
  min-height: 100vh;
  color: white;
`;

const Header = styled.header`
  padding: 20px;
  text-align: center;
`;

const Name = styled.h1`
  font-family: "Playwrite CU", cursive;
  font-size: 48px;
  margin-bottom: 10px;
`;

const Profession = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const NavItem = styled(Link)`
  margin: 0 15px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #ccccff;
  }
`;

const Section = styled.section`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillBar = styled.div`
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;
  margin: 0 10px;
  &:hover {
    color: #ddd;
  }
`;

const AnimatedSection = animated(Section);

function App() {
  const [selectedSection, setSelectedSection] = useState('about');
  
  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    key: selectedSection,
  });

  const skills = [
    { name: 'Programming', level: 90 },
    { name: 'Software Development', level: 85 },
    { name: 'AI', level: 80 },
    { name: 'Cloud Computing', level: 75 },
    { name: 'Agile Methodologies', level: 85 },
  ];

  return (
    <AppContainer>
      <Header>
        <Name>Deep Konkayala</Name>
        <Profession>Software Engineer</Profession>
        <Nav>
          <NavItem to="about" smooth={true} onClick={() => setSelectedSection('about')}>About</NavItem>
          <NavItem to="experience" smooth={true} onClick={() => setSelectedSection('experience')}>Experience</NavItem>
          <NavItem to="skills" smooth={true} onClick={() => setSelectedSection('skills')}>Skills</NavItem>
          <NavItem to="contact" smooth={true} onClick={() => setSelectedSection('contact')}>Contact</NavItem>
        </Nav>
      </Header>
  
      <AnimatedSection style={fadeProps} id="about">
        <h2>About Me</h2>
        <p>
        Hey there! I'm a Software Engineer with a Masters in Computer Science and a knack for cutting-edge AI solutions. I've got a solid background in programming, data structures, and algorithms, plus I'm a full-stack whiz. I've put my skills to work at places like Capgemini and Syngenta, tackling complex business challenges and pushing tech boundaries. Always excited to dive into new projects and drive innovation!
        </p>
      </AnimatedSection>
  
      <AnimatedSection style={fadeProps} id="experience">
        <h2>Work Experience</h2>
        <p>Syngenta - Software Engineering Co-Op, 2023-2023</p>
        <p>Capgemini - Software Engineer, 2019-2020</p>
        <p>Capgemini - Analyst Intern, 2018-2019</p>
        <h3>Education</h3>
        <p>Master's in Computer Science, University of Texas at Dallas</p>
        <p>Bachelors's in Computer Science and Engineering</p>
      </AnimatedSection>
  
      <AnimatedSection style={fadeProps} id="skills">
        <h2>Skills</h2>
        {skills.map((skill) => (
          <SkillBar key={skill.name}>
            <h3>{skill.name}</h3>
            <LinearProgress variant="determinate" value={skill.level} />
          </SkillBar>
        ))}
      </AnimatedSection>
  
      <AnimatedSection style={fadeProps} id="contact">
        <h2>Get in Touch</h2>
        <p>I'm always open to new opportunities and collaborations.</p>
        <ContactInfo>
          <IconLink href="mailto:deepksde@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </IconLink>
          <IconLink href="https://github.com/deepkse" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href="https://linkedin.com/in/deepkse" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
        </ContactInfo>
      </AnimatedSection>
    </AppContainer>
  );
}

export default App;