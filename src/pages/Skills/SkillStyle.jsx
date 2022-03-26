import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 4rem;
  @media screen and (max-width: 450px) {
    gap: 2rem;
  }
  @media screen and (max-width: 350px) {
    flex-direction: column;
  & > div{
    width:100%;
  }
  }
`;

const Content = styled(motion.div)`
  padding: 15rem;
  @media screen and (max-width: 1280px) {
    padding: 10rem;
  }
  @media screen and (max-width: 600px) {
    padding: 10rem 4rem 4rem 4rem;
  }
  @media screen and (max-width: 450px) {
    & > div h4 {
      font-size: 1.3rem;
    }
  }
`;

export { SkillWrapper, Content };
