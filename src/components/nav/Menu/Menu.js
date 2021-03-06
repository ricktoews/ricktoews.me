// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/geogame">
        Geography Game
      </a>
    </StyledMenu>
  )
}
export default Menu;
