import Container from '../../components/shared/Container/Container';
import { Content } from './ContactStyle';
import Text from '../../components/shared/Text/Text';
// import Icons from '../../components/layouts/SocialBar/SocialBar';

const Contact = () => {
  return (
    <Container>
      <Content
        key='page4'
        initial={{ y: '5rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-5rem', opacity: 0 }}
      >
        <Text type='h4' size={2.8} weight='500'>
          Contact with Me{' '}
        </Text>
        <ul>
          <Text type='li' size={1.8} weight={300}>
            phone Number : 09107584206
          </Text>
          <Text type='li' size={1.8} weight={300}>
            Email : mostafa.kheibary@gmail.com
          </Text>
        </ul>
        {/* <Icons /> */}
      </Content>
    </Container>
  );
};

export default Contact;
