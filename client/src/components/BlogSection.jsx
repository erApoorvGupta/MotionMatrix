import React from 'react';
import styled, {css} from 'styled-components';
import { Container as BootstrapContainer, Row, Col, Card, Button } from 'react-bootstrap';

const Container = styled(BootstrapContainer)`
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  background-color: ${({ theme }) => theme.bg};
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  color: ${({ theme }) => theme.text_primary}; /* Use theme-based text color */
  margin-bottom: 2rem;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardWrapper = styled.div`
  margin: 1rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledCard = styled(Card)`
  width: 18rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CustomButton = styled.button`
background-color: ${({ theme }) => theme.primary}; 
color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
  }
`;


const BlogPage = () => {

const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/300/200?random=${randomId}`; 
};

  
  const fitnessBlogPosts = [
    {
      id: 1,
      title: "5 Essential Workouts for Building Muscle",
      excerpt: "Discover the five key workouts that will help you pack on muscle mass and achieve your fitness goals.",
    },
    {
      id: 2,
      title: "The Importance of Proper Nutrition in Your Fitness Journey",
      excerpt: "Learn why nutrition is crucial for optimizing your performance.",
    },
    {
      id: 3,
      title: "Cardio vs. Strength Training: Which Is Better for Weight Loss?",
      excerpt: "Explore difference between cardio and yoga which is more effective for weight-loss.",
    },
    {
      id: 4,
      title: "Top 10 Superfoods to Boost Your Energy Levels",
      excerpt: "Discover nutrient-rich superfoods that will provide you with sustained energy throughout the day.",
    },
    {
      id: 5,
      title: "The Benefits of Yoga for Mind and Body",
      excerpt: "Learn about the numerous physical and mental benefits of incorporating yoga into your fitness routine.",
    },
    {
      id: 6,
      title: "How to Avoid Common Workout Mistakes and Injuries",
      excerpt: "Find out how to prevent injuries and get the most out of your workouts by avoiding these common mistakes.",
    },
    {
      id: 7,
      title: "The Importance of Rest and Recovery in Fitness",
      excerpt: "Discover why rest and recovery are essential components of any successful fitness regimen.",
    },
    {
      id: 8,
      title: "Setting Realistic Fitness Goals: A Guide for Beginners",
      excerpt: "Learn how to set achievable fitness goals and stay motivated on your journey to a healthier lifestyle.",
    },
  ];

  return (
    <Container className="my-5">
      <Wrapper>
        <Title>Blog Posts</Title>
        <FlexWrap>
          {fitnessBlogPosts.map((post) => (
            <CardWrapper key={post.id}>
              <StyledCard>
                <CardContent>
                <Card.Img variant="top" src={getRandomImageUrl()} style={{ width: '100%', height: '200px' }} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.excerpt}</Card.Text>
                    <CustomButton>Read More</CustomButton>
                  </Card.Body>
                </CardContent>
              </StyledCard>
            </CardWrapper>
          ))}
        </FlexWrap>
        <Title>Feature coming soon..💪</Title>
      </Wrapper>
    </Container>
  );
};

export default BlogPage;
