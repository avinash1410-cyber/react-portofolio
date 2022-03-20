import styled from 'styled-components';

const IconBar = styled.div`
  margin-top:2rem ;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  background-color: var(--primary);
  text-decoration: none;
  color: var(--white);
  padding: 0.8rem;
  border-radius: 100%;
`;
export { IconBar, SocialIcon };
