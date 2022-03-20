import { useEffect, useState, useRef } from 'react';
import { Link, Navigation, UnderLine, Wrapper, LinkDiv } from './NavStyle';
import Icon from '../../shared/Icon/Icon';

const Nav = () => {
  const [offset, setoffset] = useState();
  const allLinks = useRef();

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
      setoffset(Links[index].offsetTop - 1);
    }
  }, []);
  const handleClick = (e) => {
    // line.current.style.top = `${e.target.offsetTop }px`;
    setoffset(e.target.offsetTop - 1);
  };
  return (
    <Navigation>
      <UnderLine offset={offset}></UnderLine>
      <Wrapper ref={allLinks}>
        <LinkDiv>
          <Icon color='white' icon={'fa-solid fa-house'}></Icon>
          <Link onClick={handleClick} to='/'>
            Home
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Icon color='white' icon={'fa-solid fa-user'}></Icon>
          <Link onClick={handleClick} to='/about'>
            Me
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Icon color='white' icon={'fa-solid fa-hammer'}></Icon>
          <Link onClick={handleClick} to='/skills'>
            Skills
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Icon color='white' icon={'fa-solid fa-bars-progress'}></Icon>
          <Link onClick={handleClick} to='project'>
            Project
          </Link>
        </LinkDiv>

        <LinkDiv>
          <Icon color='white' icon={'fa-solid fa-message'}></Icon>
          <Link onClick={handleClick} to='contact'>
            Contact Me
          </Link>
        </LinkDiv>
      </Wrapper>
    </Navigation>
  );
};

export default Nav;
