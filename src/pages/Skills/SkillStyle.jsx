import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillWrapper = styled.div`
display: flex;
gap: 3rem;
flex-wrap: wrap;
padding: 4rem;
`;

const Content = styled(motion.div)`
  padding: 15rem;
`;

export {SkillWrapper,Content};