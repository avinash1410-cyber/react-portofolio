import styled from 'styled-components';

const SideBarContainer = styled.aside`
  position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 30rem;
  height: 100vh;
  padding: 4rem;
  box-shadow: 0 0 4rem #331c6345;
  background-color: var(--primary);
  transform: scale(1);
  z-index: 1000;
  transition: all 500ms ease;
  @media screen and (max-width: 850px) {
    left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  }
  @media screen and (max-width: 380px) {
    width: calc(100% - 8rem);
  }
`;
export { SideBarContainer };
