import React from 'react';

function TripleBtn(props) {
  const { abc, chooseTriple } = props;

  const handleClick = e => {
    chooseTriple(abc);
  }

  return (
    <button onClick={handleClick} data-abc={abc}>{abc.a}, {abc.b}, {abc.c}</button>
  );
}

export default TripleBtn;
