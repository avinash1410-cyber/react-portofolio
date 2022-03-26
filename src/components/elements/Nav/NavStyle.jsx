import styled from 'styled-components';
import { Link as routerLink } from 'react-router-dom';

const Navigation = styled.div`
  margin-top: -2rem;
  position: relative;
`;
const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const Link = styled(routerLink)`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  text-decoration: none;
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1rem;
  & > * {
    pointer-events: none;
  }
  & > span {
    font-weight: 500;
  }
@media screen and (max-width:350px){
  font-size:1.5rem;
}
`;

const UnderLine = styled.span`
  position: absolute;
  pointer-events: none;
  width: calc(100% + 2rem);
  height: 4rem;
  background-color: #ffffff3b;
  border-radius: 5rem;
  transition: all 200ms ease;
  transform: translateX(-0.4rem);
  top: ${({ offset }) => offset + 1}px;
`;

export { Link, Navigation, UnderLine, Wrapper };
