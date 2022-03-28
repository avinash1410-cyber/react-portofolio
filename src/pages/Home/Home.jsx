import { Image, Avatar, Content } from "./HomeStyle";
import Text from "../../components/shared/Text/Text";
import avatar from "../../image/1.png";
import Container from "../../components/shared/Container/Container";
import Icons from "../../components/layouts/IconsBar/SocialBar";

const Home = () => {
  return (
    <Container>
      <Content
        key="page1"
        initial={{ y: "5rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-5rem", opacity: 0 }}
      >
        <Avatar>
          <Image src={avatar} alt="" />
        </Avatar>
        <Text type="h1" size={3.5}>
          Hi im Mostafa <span role={"img"}>👋🏻</span>
        </Text>
        <Text weight={300} type="h2" size={2}>
          Front-end developer
        </Text>
        <Icons />
      </Content>
    </Container>
  );
};

export default Home;
