import styled from 'styled-components';
import { motion } from 'framer-motion';

const Content = styled(motion.div)`
  width: 100%;
  padding: 15rem;
  & > div {
    justify-content: start;
  }
  & > h4 {
    margin-bottom: 3rem;
  }
  & > li,
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export { Content };
