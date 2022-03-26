import { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

import { SideBarContainer } from './SideBarStyle';
import Nav from '../../elements/Nav/Nav';

const SideBar = () => {
  const { isOpen } = useContext(MenuContext);

  return (
    <SideBarContainer isOpen={isOpen}>
      <Nav />
    </SideBarContainer>
  );
};

export default SideBar;
