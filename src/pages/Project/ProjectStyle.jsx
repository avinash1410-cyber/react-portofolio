import { motion } from 'framer-motion';
import styled from 'styled-components';

const Content = styled(motion.div)`
  position: relative;
  padding: 10rem 10rem 10rem 10rem;
  width: 100%;
`;

const ProjectCard = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
  box-shadow:  0 0 2rem #0000001f;
  transition: all 200ms ease;
&:hover{
  transform: scale(1.1);
}
`;
const ProjectTitle = styled.h4`
  font-size: 1.5rem;
`;
const ProjectDes = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;
const ProjectWrapper = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:2rem; 
  @media screen and (max-width:1200px){
    grid-template-columns:repeat(2,1fr) ;
  }
  @media screen and (max-width:1000px){
    grid-template-columns:repeat(1,1fr) ;
  }
`;
export {Content,ProjectCard,ProjectTitle,ProjectDes,ProjectWrapper};