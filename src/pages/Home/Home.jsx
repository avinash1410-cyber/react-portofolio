import { Image, Avatar, Container } from './HomeStyle';
import Text from '../../components/shared/Text/Text';
import avatar from '../../image/1.jpg';
import SocialIcon from '../../components/layouts/socialBar/socialBar';

const Home = () => {
  return (
    <Container>
      <div>
        <Avatar>
          <Image src={avatar} alt='' />
        </Avatar>
        <Text type='h1' size={3}>
          Mostafa Kheibart
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
