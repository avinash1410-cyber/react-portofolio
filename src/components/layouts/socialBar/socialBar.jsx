import { IconBar, SocialIcon } from './socialBarStyle';
const socialBar = () => {
  return (
    <IconBar>
      <SocialIcon
        href='http://instagram.com'
        className='fa-brands fa-instagram'
      ></SocialIcon>
      <SocialIcon
        href='http://twitter.com'
        className='fa-brands fa-twitter'
      ></SocialIcon>
      <SocialIcon
        href='http://github.com'
        className='fa-brands fa-github'
      ></SocialIcon>
      <SocialIcon
        href='http://linkedin.com'
        className='fa-brands fa-linkedin'
      ></SocialIcon>
    </IconBar>
  );
};

export default socialBar;
