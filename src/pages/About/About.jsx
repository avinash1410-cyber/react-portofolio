import { motion } from 'framer-motion';
import Text from '../../components/shared/Text/Text';
const About = () => {
  return (
    <motion.div
      key='page2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    </motion.div>
  );
};

export default About;
