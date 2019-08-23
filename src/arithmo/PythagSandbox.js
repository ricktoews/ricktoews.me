import React, { useState, useEffect } from 'react';
import PythagSquare from './PythagSquare';

const SQ = 11;

// colors used for constructing grid
let altColors = false;

function constructSquareGrid(triple, side = 11) {
  const { a, b, c } = triple;
  const bThickness = c - a;
  const squareGrid = [];
  for (let row = 0; row < c; row++) {
    let isBRow = row < bThickness;
    for (let col = 0; col < c; col++) {
      let isBCol = col < bThickness;
      let region = '';
      if (isBRow && isBCol) {
        region = altColors ? 'a-region' : 'b-region';
      } else if (isBRow || isBCol) {
        region = altColors ? 'a-region' : 'b-region';
      } else {
        region = altColors ? 'b-region' : 'a-region';
      }
      let top = (row * side) + 'px';
      let left = (col * side) + 'px';
      let coords = { top, left };
      let gridItem = { row, col, region, coords };
      squareGrid.push(gridItem);
    }
  }
  return squareGrid;
}

function PythagSandbox(props) {
  const { triple } = props;
  const initSquareGrid = constructSquareGrid(triple);
  const squareGrid = initSquareGrid;
  const [ rerender, setRerender ] = useState(false);

  useEffect(() => {
    let el = document.querySelector('.sandbox > div:nth-of-type(1)');

  });

  const details = (cls) => {
    var areaInfo;

    if (cls === 'b-corner-area') {
      areaInfo = `B corner: ${triple.c - triple.a} squared: ${Math.pow(triple.c - triple.a, 2)}`;
    } else if (cls === 'b-area') {
      areaInfo = `B sides: 2 x ${triple.c - triple.a} x ${triple.a}: ${2*(triple.c-triple.a)*triple.a}`;
    } else {
      areaInfo = `A squared: ${Math.pow(triple.a, 2)}`;
    }
  }

  const moveRegion = (region) => {
    let { a, b } = triple;
    triple.b = a;
    triple.a = b;
    altColors = !altColors;
    // Trigger re-render.
    setRerender(!rerender);
  }

  const aRegion = squareGrid.filter(sq => sq.region === 'a-region');
  const bRegion = squareGrid.filter(sq => sq.region === 'b-region');
  const bCornerRegion = squareGrid.filter(sq => sq.region === 'b-corner-region');
  const aArea = aRegion.length;
  const bArea = bRegion.length;
  const aSide = Math.sqrt(aArea);
  const bSide = Math.sqrt(bArea);
  const side = Math.sqrt(squareGrid.length);
  const style = { height: (side * SQ) + 'px', width: (side * SQ) + 'px' };

  return (
    <div className="sandbox">
      <div className="a-b-c" style={style}>
        { bRegion.map((square, ndx) => {
            return <PythagSquare key={ndx} square={square} details={details} move={moveRegion}></PythagSquare>
          })
        }
        { bCornerRegion.map((square, ndx) => {
            return <PythagSquare key={ndx} square={square} details={details} move={moveRegion}></PythagSquare>
          })
        }

        { aRegion.map((square, ndx) => {
            return <PythagSquare key={ndx} square={square} details={details} move={moveRegion}></PythagSquare>
          })
        }

      </div>

      <div className="legend-wrapper">
        <div className="legend">
          <div>
            <div className="square a-region"></div>
          </div>
          <div>{aSide}x{aSide}: area {aArea} square units</div>
        </div>

        <div className="legend">
          <div>
            <div className="square b-region"></div>
          </div>
          <div>{bSide}x{bSide}: area {bArea} square units</div>
        </div>
      </div>
    </div>
  );
}

export default PythagSandbox;
