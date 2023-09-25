import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/get_fortune">Get Fortune</NavLink></li>
        <li><NavLink to="/game">Game</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
        <li><NavLink to="/account_info">Account Info</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;