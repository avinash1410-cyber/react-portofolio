import { Image, Avatar,Content } from './HomeStyle';
import Text from '../../components/shared/Text/Text';
import avatar from '../../image/1.jpg';
import SocialIcon from '../../components/layouts/socialBar/SocialBar';
import Container from '../../components/shared/Container/Container';

const Home = () => {
  return (
    <Container
    >
      <Content 
        key='page1'
        initial={{ y: '5rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-5rem', opacity: 0 }}
      >
        <Avatar>
          <Image src={avatar} alt='' />
        </Avatar>
        <Text type='h1' size={3.5}>
          Hi im Mostafa👋🏻
        </Text>
        <Text weight={300} type='h2' size={2}>
          Front-end developer
        </Text>
        <SocialIcon />
      </Content>
    </Container>
  );
};

export default Home;
