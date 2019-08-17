import React from 'react';
import PythagSquare from './PythagSquare';

const SQ = 11;

function constructSquareGrid(triple, side = 11) {
  const { a, b, c } = triple;
  const bThickness = c - a;
  let squareGrid = [];
  for (let row = 0; row < c; row++) {
    let isBRow = row < bThickness;
    for (let col = 0; col < c; col++) {
      let isBCol = col < bThickness;
      let region = '';
      if (isBRow && isBCol) {
        region = 'b-corner-region';
      } else if (isBRow || isBCol) {
        region = 'b-region';
      } else {
        region = 'a-region';
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
  const squareGrid = constructSquareGrid(triple);
  console.log('grid', squareGrid);

  const details = (cls) => {
    var areaInfo;

    if (cls === 'b-corner-area') {
      areaInfo = `B corner: ${triple.c - triple.a} squared: ${Math.pow(triple.c - triple.a, 2)}`;
    } else if (cls === 'b-area') {
      areaInfo = `B sides: 2 x ${triple.c - triple.a} x ${triple.a}: ${2*(triple.c-triple.a)*triple.a}`;
    } else {
      areaInfo = `A squared: ${Math.pow(triple.a, 2)}`;
    }
    console.log('handleHover', triple.a, triple.b, triple.c, areaInfo);
  }

  const moveRegion = (region) => {
console.log('will move region squares', region, triple);
    let alt = document.getElementById('a-b-c-alt');
    let side = SQ*triple.c;
    alt.style.backgroundColor = '#ccc';
    alt.style.height = side + 'px';
    alt.style.width = side + 'px';
    let els = Array.from(document.getElementsByClassName(region));
  }

  const aRegion = squareGrid.filter(sq => sq.region === 'a-region');
  const bRegion = squareGrid.filter(sq => sq.region === 'b-region');
  const bCornerRegion = squareGrid.filter(sq => sq.region === 'b-corner-region');

  return (
    <div className="sandbox">
      <div className="a-b-c">
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

      <br style={{clear:"both"}}/>
      <div id="a-b-c-alt">
      </div>
    </div>
  );
}

export default PythagSandbox;
