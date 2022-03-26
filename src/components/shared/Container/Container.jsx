import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;

export default Container;
