// src/context/MenuContext.jsx
import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen: isOpen,
    toggleMenu: toggleMenu,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};

