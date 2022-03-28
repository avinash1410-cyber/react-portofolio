import { motion } from 'framer-motion';
import styled from 'styled-components';

const Content = styled(motion.div)`
  position: relative;
  padding: 10rem;
  width: 100%;
  @media screen and (max-width: 600px) {
    padding: 10rem 4rem 4rem 4rem;
  }
`;

const ProjectCard = styled.div`
  border-radius: 0.8rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 2rem #0000001f;
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.02);
  }
`;
const ProjectTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const ProjectDes = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;
const ProjectWrapper = styled.div`
  padding-bottom: 4rem;
  position: relative;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Link = styled.a`
  position: absolute;
  text-decoration: none;
  right: 0;
  bottom: -2rem;
  color: black;
  font-size: 1.5rem;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  margin-top: 1rem;
`;
const ButtonLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #efefef;
  }
`;

export {
  Content,
  ProjectCard,
  ProjectTitle,
  ProjectDes,
  ProjectWrapper,
  Link,
  CardButtons,
  ButtonLink,
};
