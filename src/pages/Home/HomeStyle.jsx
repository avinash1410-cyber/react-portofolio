import styled from 'styled-components';
import { motion } from 'framer-motion';

const Avatar = styled.div`
  margin: 0 auto;
margin-bottom: 0.5rem;
  border-radius: 100%;
  padding: 1rem;
  box-shadow: 0 0 3rem #00000045;
  width: 22rem;
  height: 22rem;
`;

const Content = styled(motion.div)`
margin-top: 15rem;
  text-align:center;
`;

const Image = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export { Image, Avatar ,Content};
