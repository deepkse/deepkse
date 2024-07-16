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
    color:  #e6e6ff;
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProjectItem = styled.div`
  width: 200px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectName = styled.h4`
  margin-bottom: 10px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProjectDescription = styled.p`
  margin-top: 10px;
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

  const projects = [
    {
      name: 'Agile Board',
      image: `${process.env.PUBLIC_URL}/images/AgileBoard.png`,
      description: 'A project management tool for organizing tasks in an Agile workflow.',
      link: 'https://deepkse.github.io/AgileBoard'
    },
    {
      name: 'JSON Tree',
      image: `${process.env.PUBLIC_URL}/images/JSONTree.png`,
      description: 'An intuitive JSON viewer that presents data in a hierarchical tree structure.',
      link: 'https://deepkse.github.io/JSONTree'
    },
    {
      name: 'Query Optimizer',
      image: `${process.env.PUBLIC_URL}/images/QueryOptimizer.png`,
      description: 'AI-powered tool for suggesting and explaining SQL query optimizations across various database systems.',
      link: 'https://github.com/deepkse/QueryOptimizer'
    },
    {
      name: 'Pomodoro Timer',
      image: `${process.env.PUBLIC_URL}/images/PomodoroTimer.png`,
      description: 'A customizable productivity timer with audio notifications for efficient time management.',
      link: 'https://deepkse.github.io/PomodoroTimer'
    },
    {
      name: 'Text Compare',
      image: `${process.env.PUBLIC_URL}/images/TextCompare.png`,
      description: 'Highlights differences in inputs, enabling efficient code review and troubleshooting.',
      link: 'https://deepkse.github.io/TextCompare'
    },
    {
      name: 'Regex Tester',
      image: `${process.env.PUBLIC_URL}/images/RegexTester.png`,
      description: 'A real-time regex tester that highlights matches in user-provided text.',
      link: 'https://deepkse.github.io/RegexTester'
    },
    {
      name: 'Password Generator',
      image: `${process.env.PUBLIC_URL}/images/PasswordGenerator.png`,
      description: 'A secure password generator for creating robust, randomized passwords.',
      link: 'https://deepkse.github.io/PasswordGenerator'
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <AppContainer>
      <Header>
        <Name>Deep Konkayala</Name>
        <Profession>Software Engineer</Profession>
        <Nav>
          <NavItem to="about" smooth={true} onClick={() => setSelectedSection('about')}>About</NavItem>
          <NavItem to="projects" smooth={true} onClick={() => setSelectedSection('projects')}>Projects</NavItem>
          <NavItem to="experience" smooth={true} onClick={() => setSelectedSection('experience')}>Experience</NavItem>
          <NavItem to="contact" smooth={true} onClick={() => setSelectedSection('contact')}>Contact</NavItem>
        </Nav>
      </Header>
  
      <AnimatedSection style={fadeProps} id="about">
        <h2>About Me</h2>
        <p>
        Hey there! I'm a Software Engineer with a Masters in Computer Science and a knack for cutting-edge AI solutions. I've got a solid background in programming, data structures, and algorithms, plus I'm a full-stack whiz. I've put my skills to work at places like Capgemini and Syngenta, tackling complex business challenges and pushing tech boundaries. Always excited to dive into new projects and drive innovation!
        </p>
      </AnimatedSection>
  
      <AnimatedSection style={fadeProps} id="projects">
        <h2>Projects</h2>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectItem key={index} onClick={() => handleProjectClick(project.link)}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectImage src={project.image} alt={project.name} />
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectItem>
          ))}
        </ProjectsContainer>
      </AnimatedSection>

      <AnimatedSection style={fadeProps} id="experience">
        <h2>Work Experience</h2>
        <ul>
          <li><p><strong>Raven</strong> - Software Developer, 2024-Present</p></li>
          <li><p><strong>Syngenta</strong> - Software Engineering Co-Op, 2023-2023</p></li>
          <li><p><strong>Capgemini</strong> - Software Engineer, 2019-2020</p></li>
          <li><p><strong>Capgemini</strong> - Analyst Intern, 2018-2019</p></li>
        </ul>         
      </AnimatedSection>

      <AnimatedSection style={fadeProps} id="education">
        <h2>Education</h2>
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