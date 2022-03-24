import { motion } from 'framer-motion';
import styled from 'styled-components';

const Head = styled.h4`
  padding-bottom:2.5rem;
  font-size:3rem;
`;
const Content = styled(motion.div)`
  padding: 15rem;
`;

export {Head,Content};