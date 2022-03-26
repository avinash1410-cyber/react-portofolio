import { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [isopen, setIsopen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isopen,
        setIsopen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
export { MenuContextProvider };
