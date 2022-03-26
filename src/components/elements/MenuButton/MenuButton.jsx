import { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

import { HamMenu } from './MenuButtonStyle';

const MenuButton = () => {
  const { setIsOpen, isOpen } = useContext(MenuContext);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return <HamMenu isOpen={isOpen} onClick={handleOpen}>=</HamMenu>;
};

export default MenuButton;
