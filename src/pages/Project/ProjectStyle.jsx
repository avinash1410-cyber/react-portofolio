import { motion } from 'framer-motion';
import styled from 'styled-components';

const Content = styled(motion.div)`
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:2rem;
`;

const ProjectCard = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
  box-shadow:  0 0 2rem #0000001f;
  transition: all 200ms ease;
&:hover{
  transform: scale(1.2);
}
`;
const ProjectTitle = styled.h4`
  font-size: 1.5rem;
`;
const ProjectDes = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;
export {Content,ProjectCard,ProjectTitle,ProjectDes};