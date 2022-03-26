import { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

import { HamMenu } from './MenuButtonStyle';

const MenuButton = () => {
  const { setIsopen, isopen } = useContext(MenuContext);
  const handleOpen = () => {
    setIsopen(!isopen);
  };
  return (
    <HamMenu isopen={isopen.toString()} onClick={handleOpen}>
      <i className='fa-solid fa-bars'></i>
    </HamMenu>
  );
};

export default MenuButton;
