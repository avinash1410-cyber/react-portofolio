import styled from 'styled-components';

const TextElement = styled.div`
  font-size: ${({ textSize }) => textSize}rem;
  color: ${({ textColor }) => textColor};
  font-weight: ${({ textWeight }) => textWeight};
`;

export default TextElement;
