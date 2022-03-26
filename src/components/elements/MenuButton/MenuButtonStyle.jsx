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
  position: absolute;
  top: 1.5rem;
  z-index:1000 ;
  left: ${({ isOpen }) => (isOpen ? 'calc(100% - 6rem)' : '1.5rem')};
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(360deg)' : 'rotateY(0deg)')};
  cursor: pointer;
  font-size: 3rem;
  transition: all 500ms ease;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

export { HamMenu };
