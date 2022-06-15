import { IconBar, SocialIcon } from './SocialBarStyle';

const Icons = () => {
  return (
    <IconBar>
      <SocialIcon
        href='https://www.instagram.com/avinashkumar1410/?hl=en'
        className='fa-brands fa-instagram'
      ></SocialIcon>
      <SocialIcon
        href='https://twitter.com/Avinash55899407'
        className='fa-brands fa-twitter'
      ></SocialIcon>
      <SocialIcon
        href='https://github.com/avinash1410-cyber'
        className='fa-brands fa-github'
      ></SocialIcon>
      <SocialIcon
        href='https://www.linkedin.com/in/avinash-kumar-9b14a8202/'
        className='fa-brands fa-linkedin'
      ></SocialIcon>
     <SocialIcon
        href='https://leetcode.com/avi8654340/'
        className='fa-solid fa-code'
      ></SocialIcon>
    </IconBar>
  );
};

export default Icons;
