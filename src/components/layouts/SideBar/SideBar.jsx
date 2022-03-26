import { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

import { SideBarContainer } from './SideBarStyle';
import Nav from '../../elements/Nav/Nav';

const SideBar = () => {
  const { isopen } = useContext(MenuContext);

  return (
    <SideBarContainer isopen={isopen}>
      <Nav />
    </SideBarContainer>
  );
};

export default SideBar;
