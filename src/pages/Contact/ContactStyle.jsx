import styled from 'styled-components';
import { motion } from 'framer-motion';

const Content = styled(motion.div)`
  width: 100%;
  padding: 15rem;
& > div{
  justify-content: start;
}
`;
export {Content};