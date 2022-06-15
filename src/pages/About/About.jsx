import { Head, Content } from './AboutStyle';
import Container from '../../components/shared/Container/Container';
import Text from '../../components/shared/Text/Text';

const About = () => {
  return (
    <Container>
      <Content
        key='page2'
        initial={{ y: '5rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-5rem', opacity: 0 }}
      >
        <Head>About Me</Head>
        <Text size={2} weight={300} type='p'>
          Hi I'm Avinash Kumar and im 22 year old pursuing B.tech degree form DTU with IT as Major. I started programming 1 year ago as
          Full stack developer and very quickly fell in love with it . Django,java,python,React,Problem solving skills,SQL ,System design etc
          experience in Figma and Adobe xd.
        </Text>
      </Content>
    </Container>
  );
};

export default About;
