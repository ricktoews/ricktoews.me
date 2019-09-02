import React from 'react';

function PythagSquare(props) {
  const { square, details, move } = props;

  let style = {}; 

  const handleHover = e => {
    details(square.region);
  }

  const handleClick = e => {
    move(square.region);
  }

  style = {
    top: square.coords.top,
    left: square.coords.left,
    transition: '2s'
  }

  return (
    <div style={style} onMouseOver={handleHover} onClick={handleClick} className={'square ' + square.region}></div> 
  );
}

export default PythagSquare;
