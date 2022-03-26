import { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

import { HamMenu } from './MenuButtonStyle';

const MenuButton = () => {
  const { setIsOpen, isOpen } = useContext(MenuContext);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HamMenu isOpen={isOpen} onClick={handleOpen}>
      <i className='fa-solid fa-bars'></i>
    </HamMenu>
  );
};

export default MenuButton;
