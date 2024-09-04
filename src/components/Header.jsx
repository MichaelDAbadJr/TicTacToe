import React from 'react';
import imgLogo from '../assets/game-logo.png'; 
const Header = () => {
  return (
    <header>
      <img src={imgLogo} alt="Hand-drawn tic tac toe game board" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;