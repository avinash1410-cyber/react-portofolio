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
  transition: all 200ms ease;
`;
export { SideBarContainer };
