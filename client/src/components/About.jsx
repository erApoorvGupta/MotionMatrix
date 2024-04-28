import React from 'react';
import styled from 'styled-components';
import resumeImage from '../utils/Images/resume_2.png';
import LogoImg from "../utils/Images/motionmatrix_logo.png";

const ScrollableContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 3rem;
  text-align: center;
`;

const InfoProjectContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bg_secondary};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  padding: 3rem;
  max-width: 1300px;
  width: 100%;
  margin-top: 3rem;
`;

const InfoContainer = styled(InfoProjectContainer)``;

const ProjectDescription = styled(InfoProjectContainer)`
background-color: ${({ theme }) => theme.bgLight};
`;

const LogoContainer = styled.div`
  margin-right: 3rem;
`;

const Logo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  margin-right: 3rem;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1.5rem;
`;

const Detail = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 0.rem;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
    line-height: 1.4rem;
  }
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3377cc;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProjectDetails = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <ScrollableContainer>
      <AboutWrapper>
        <Title>Project Description</Title>
        <ProjectDescription>
          <LogoContainer>
            <Logo src={LogoImg} alt="Company Logo" />
          </LogoContainer>
          <div>
            <ProjectTitle>Your Fitness Companion</ProjectTitle>
            <ProjectDetails>
            Motion Matrix - your personal fitness tracker app designed to revolutionize the way you approach your workouts and achieve your fitness goals. It allows users to input their
              data, stores it, and provides analysis. The dashboard features beautiful pie and bar charts to visualize
              progress.
            </ProjectDetails>
            <ProjectDetails>
              Users can also review past exercises by selecting dates from a calendar.
            </ProjectDetails>
          </div>
        </ProjectDescription>
        <Title>About the Creator</Title>
        <InfoContainer>
          <ImageContainer>
            <Image src={resumeImage} alt="Profile" />
          </ImageContainer>
          <DetailsContainer>
            <Name>Apoorv Gupta</Name>
            <Detail>I'm a passionate programmer and AI enthusiast.</Detail>
            <Detail>Currently pursuing AIML at Symbiosis, Pune.</Detail>
            <Detail>Batch: 2021-2025</Detail>
            <Detail>Division: AIML-A1</Detail>
            <Detail>PRN: 21070126018</Detail>
            <Link href="https://www.linkedin.com/in/er-apoorv-gupta/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href="https://github.com/erApoorvGupta" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </DetailsContainer>
        </InfoContainer>
      </AboutWrapper>
    </ScrollableContainer>
  );
};

export default About;
