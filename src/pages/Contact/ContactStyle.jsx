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
  @media screen and (max-width: 1000px) {
    padding: 10rem;
  }
  @media screen and (max-width: 465px) {
    padding: 10rem 4rem 0rem 4rem;
  }
  @media screen and (max-width: 350px) {
    & > ul li {
      font-size: 1.5rem !important;
    }
    & > h4 {
      font-size: 2rem;
    }
  }
`;
export { Content };
