import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.section)`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding:15rem;
  @media screen and (max-width:1000px){
    padding: 5rem;
  }
`;

const Head = styled.h4`
  padding-bottom:2rem;
  font-size:3rem;
`;

export {Container,Head};