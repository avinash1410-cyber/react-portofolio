import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.div`
  margin: -10rem auto 2rem auto;
  border-radius: 100%;
  padding: 1rem;
  box-shadow: 0 0 3rem #00000045;
  width: 20rem;
  height: 20rem;
`;
const Image = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export { Image, Avatar, Container };
