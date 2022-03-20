import styled from 'styled-components';
import { Link as routerLink } from 'react-router-dom';

const Navigation = styled.div`
  margin-top: -2rem;
  position: relative;
`;
const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;
const Link = styled(routerLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 300;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const UnderLine = styled.span`
  position: absolute;
  pointer-events: none;
  width: 15rem;
  height: 4rem;
  background-color: #ffffff3b;
  left: 50%;
  border-radius: 5rem;
  transform: translateX(-50%);
  transition: all 200ms ease;
  top: ${({ offset }) => offset}px;
`;

export { Link, Navigation, UnderLine, Wrapper };
