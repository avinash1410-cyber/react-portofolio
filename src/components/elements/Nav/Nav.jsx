import { useEffect, useState, useRef, useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

import { Link, Navigation, UnderLine, Wrapper } from './NavStyle';
import Icon from '../../shared/Icon/Icon';
import Text from '../../shared/Text/Text';

const Nav = () => {
  const [offset, setoffset] = useState();
  const allLinks = useRef();
  const { setIsOpen } = useContext(MenuContext);

  useEffect(() => {
    // define all links in array
    const linkArray = ['/', '/about', '/skills', '/project', '/contact'];
    // find exact index of page that visited
    const index = linkArray.findIndex(
      (link) => link === window.location.pathname
    );
    // set offsetTop of links[index] to underline
    const Links = allLinks.current.children;
    if (Links[index] !== undefined) {
      // line.current.style.top = `${Links[index].offsetTop }px`;
      setoffset(Links[index].offsetTop);
    }
  }, []);
  const handleClick = (e) => {
    // line.current.style.top = `${e.target.offsetTop }px`;
    setIsOpen(false);
    setoffset(e.target.offsetTop);
  };
  return (
    <Navigation>
      <UnderLine offset={offset}></UnderLine>
      <Wrapper ref={allLinks}>
        <Link to='/' onClick={handleClick}>
          <Icon color='white' icon={'fa-solid fa-house'}></Icon>
          <Text type='span'>Home</Text>
        </Link>

        <Link to='/about' onClick={handleClick}>
          <Icon color='white' icon={'fa-solid fa-user'}></Icon>
          <Text type='span'>About Me</Text>
        </Link>

        <Link to='/skills' onClick={handleClick}>
          <Icon color='white' icon={'fa-solid fa-hammer'}></Icon>
          <Text type='span'>Skills</Text>
        </Link>

        <Link to='/project' onClick={handleClick}>
          <Icon color='white' icon={'fa-solid fa-bars-progress'}></Icon>
          <Text type='span'>Project</Text>
        </Link>

        <Link to='contact' onClick={handleClick}>
          <Icon color='white' icon={'fa-solid fa-message'}></Icon>
          <Text type='span'>Contact</Text>
        </Link>
      </Wrapper>
    </Navigation>
  );
};

export default Nav;
