import React from 'react';

function PythagSquare(props) {
  const { region, details } = props;

  const handleHover = e => {
    details(region);
  }

  return (<div onMouseOver={handleHover} className={'square ' + region}></div> )
}

export default PythagSquare;
