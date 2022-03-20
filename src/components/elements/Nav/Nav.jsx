import { useEffect, useState, useRef } from 'react';
import { Link, Navigation, UnderLine, Wrapper } from './NavStyle';

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
      setoffset(Links[index].offsetTop-1);
    }
  }, []);
  const handleClick = (e) => {
    // line.current.style.top = `${e.target.offsetTop }px`;
    setoffset(e.target.offsetTop -1);
  };
  return (
    <Navigation>
      <UnderLine offset={offset}></UnderLine>
      <Wrapper ref={allLinks}>
        <Link onClick={handleClick} to='/'>
          Home
        </Link>
        <Link onClick={handleClick} to='/about'>
          Me
        </Link>
        <Link onClick={handleClick} to='/skills'>
          Skills
        </Link>
        <Link onClick={handleClick} to='project'>
          Project
        </Link>
        <Link onClick={handleClick} to='contact'>
          Contact Me
        </Link>
      </Wrapper>
    </Navigation>
  );
};

export default Nav;
