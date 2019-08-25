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
  const squareGrid = constructSquareGrid(triple);
  const [ rerender, setRerender ] = useState(false);

  useEffect(() => {
    let el = document.querySelector('.sandbox > div:nth-of-type(1)');

  });

  const details = (cls) => {
    var areaInfo;
    var wrapAround = altColors ? 'a-region' : 'b-region';

    if (cls === wrapAround) {
      let bThick = triple.c - triple.a;
      areaInfo = `${bThick}^2 + ${bThick}x${triple.a} + ${bThick}x${triple.a}`;
    } else {
      areaInfo = `${triple.a}^2`;
    }

    return areaInfo;
  }

  const legend = (shape, regions) => {
    const { aRegion, bRegion } = regions;
    const aArea = aRegion.length;
    const bArea = bRegion.length;
    const aLegend = details('a-region');
    const bLegend = details('b-region');
    let regionClass, regionArea, regionLegend;
    switch (shape) {
      case 'wrap':
        if (altColors) {
          // a-region
          regionClass = 'a-region';
          regionArea = aArea;
          regionLegend = aLegend;
        } else {
          // b-region
          regionClass = 'b-region';
          regionArea = bArea;
          regionLegend = bLegend;
        }
        break;
      case 'square':
        if (altColors) {
          // b-region
          regionClass = 'b-region';
          regionArea = bArea;
          regionLegend = bLegend;
        } else {
          // a-region
          regionClass = 'a-region';
          regionArea = aArea;
          regionLegend = aLegend;
        }
    }

    var code = (
        <div className="legend">
          <div>
            <div className={'square ' + regionClass}></div>
          </div>
          <div>{regionArea} square units: {regionLegend}</div>
        </div>
    );
    return code;
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
  const side = Math.sqrt(squareGrid.length);
  const style = { height: (side * SQ) + 'px', width: (side * SQ) + 'px' };
  const wrapLegend = legend('wrap', { aRegion, bRegion });
  const squareLegend = legend('square', { aRegion, bRegion });


  return (
    <div className="sandbox">
      <div className="a-b-c" style={style}>
        { bRegion.map((square, ndx) => {
            return <PythagSquare key={ndx} square={square} details={details} move={moveRegion}></PythagSquare>
          })
        }

        { aRegion.map((square, ndx) => {
            return <PythagSquare key={ndx} square={square} details={details} move={moveRegion}></PythagSquare>
          })
        }

      </div>

      <div className="legend-wrapper">
        {wrapLegend}
        {squareLegend}
      </div>
    </div>
  );
}

export default PythagSandbox;
