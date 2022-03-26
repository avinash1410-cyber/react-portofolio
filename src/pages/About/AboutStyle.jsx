import { motion } from 'framer-motion';
import styled from 'styled-components';

const Head = styled.h4`
  padding-bottom: 2.5rem;
  font-size: 3rem;
  font-weight: 500;
`;
const Content = styled(motion.div)`
  padding: 15rem;
  @media screen and (max-width: 1100px) {
    padding: 10rem;
  }
  @media screen and (max-width: 450px) {
    & > p {
      font-size: 1.5rem;
    }
    & > h4{
      font-size:2.5rem ;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 10rem 4rem 4rem 4rem;
  }
`;

export { Head, Content };
