import styled from 'styled-components';
import { motion } from 'framer-motion';

const HamMenu = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  box-shadow: 0 0 2rem #00000040;
  position: absolute;
  top: 1.5rem;
  z-index: 1000;
  left: ${({ isopen }) => (isopen === 'true' ? 'calc(100% - 6rem)' : '1.5rem')};
  transform: ${({ isopen }) =>
    isopen === 'true' ? 'rotateY(360deg)' : 'rotateY(0deg)'};
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 500ms ease;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

export { HamMenu };
