// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/pythag">
        Pythagorean Triples
      </a>
      <a href="/pythag-c">
        Pythagorean C Triples
      </a>
      <a href="/denom">
        Denominators
      </a>
      <a href="/calendar">
        Gregorian Calendar
      </a>
      <a href="/mastermind">
        Mastermind
      </a>
      <a href="/wordle">
        Wordle
      </a>
    </StyledMenu>
  )
}
export default Menu;
