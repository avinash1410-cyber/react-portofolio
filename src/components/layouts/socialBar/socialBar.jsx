import { IconBar, SocialIcon } from './SocialBarStyle';

const socialBar = () => {
  return (
    <IconBar>
      <SocialIcon
        href='https://www.instagram.com/mostafa.kheibary'
        className='fa-brands fa-instagram'
      ></SocialIcon>
      <SocialIcon
        href='https://twitter.com/MKheibary'
        className='fa-brands fa-twitter'
      ></SocialIcon>
      <SocialIcon
        href='https://github.com/mostafa-kheibary'
        className='fa-brands fa-github'
      ></SocialIcon>
      <SocialIcon
        href='https://ir.linkedin.com/in/mostafa-kheibary'
        className='fa-brands fa-linkedin'
      ></SocialIcon>
    </IconBar>
  );
};

export default socialBar;
