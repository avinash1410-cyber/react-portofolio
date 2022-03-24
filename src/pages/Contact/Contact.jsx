import Container from "../../components/shared/Container/Container";
import { Content } from "./ContactStyle";
import Text from "../../components/shared/Text/Text";
import SocialBar from "../../components/layouts/socialBar/SocialBar";
const Contact = () => {
  return(
    <Container>
      <Content>
        <Text type='h4' size={2.5} weight='500'>Contact with Me </Text>
        <ul>
          <Text type='li' size={2}>phone Number : 09107584206</Text> 
          <Text type='li' size={2}>Email : mostafa.kheibary@gmail.com</Text>
        </ul>
        <SocialBar/> 
      </Content>
    </Container>
  )
}

export default Contact;