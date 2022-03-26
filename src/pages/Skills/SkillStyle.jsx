import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 4rem;
`;

const Content = styled(motion.div)`
  padding: 15rem;
  @media screen and (max-width:1280px){
    padding:10rem ;
  }
`;

export {SkillWrapper,Content};