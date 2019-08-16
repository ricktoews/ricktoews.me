import React from 'react';

function PythagSquare(props) {
  const { region, details, move } = props;

  const handleHover = e => {
    details(region);
  }

  const handleClick = e => {
    move(region);
  }

  return (<div onMouseOver={handleHover} onClick={handleClick} className={'square ' + region}></div> )
}

export default PythagSquare;
