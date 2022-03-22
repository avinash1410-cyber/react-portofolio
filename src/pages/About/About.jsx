import { motion } from 'framer-motion';

import { Container,Head } from './AboutStyle';
import Text from '../../components/shared/Text/Text';

const About = () => {
  return (
    <Container>
      <motion.div       
      key='page2'
      initial={{y:'5rem', opacity: 0 }}
      animate={{y:0, opacity: 1 }}
      exit={{y:'-5rem', opacity: 0 }}
      >
        <Head>About Me</Head>
        <Text size={2} weight={300} typr='p'>Hi I'm Mostafa and im 17 year old.
I started programing 1 year ago as Front-end developer and very quickly fell in love with it .and i currently working in the internet industry. Skilled in React, JavaScript, Css, Tailwind, Sass.
also i Interest on ui/ux and i have experience in Figma and Adobe xd.</Text>
      </motion.div>
    </Container>
  );
};

export default About;
