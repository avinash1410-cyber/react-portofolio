import { Image, Avatar, Container } from './HomeStyle';
import Text from '../../components/shared/Text/Text';
import avatar from '../../image/1.jpg';
import SocialIcon from '../../components/layouts/socialBar/socialBar';

const Home = () => {
  return (
    <Container
      key='page1'
      initial={{ y: '5rem', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-5rem', opacity: 0 }}
    >
      <div>
        <Avatar>
          <Image src={avatar} alt='' />
        </Avatar>
        <Text type='h1' size={3}>
          Hi im Mostafa👋🏻
        </Text>
        <Text weight={300} type='h2'>
          Front-end developer
        </Text>
        <SocialIcon />
      </div>
    </Container>
  );
};

export default Home;
