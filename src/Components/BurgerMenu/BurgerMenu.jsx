import React, { useState } from 'react';
import './BurgerMenu.scss';


import { useMenu } from '../MenuContext/MenuContext';

export const BurgerMenu = () => {
  const { isOpen, toggleMenu } = useMenu();

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}