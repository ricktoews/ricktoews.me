/*
 * Think of a, b, and c in context of a square of side c.
 * In the lower right corner is a smaller square of side a.
 * Wrapped around this smaller square is a shape of area
 * 2(c-a) + (c-a)^2. What this function looks for is cases
 * in which this area is also a square. These cases are
 * compiled into an array and returned.
 *
 * The parameter corner is an integer whose value is a
 * side of the upper left square. This is equal to c - a.
 */
export const getABC = (corner) => {
  var abcVals = [];
  for (let i = 3; i <= 100; i++) {
    let bSquared = Math.pow(corner, 2) + 2 * corner * i;
    let sqrt = Math.floor(Math.pow(bSquared, .5));
    // is 2(c-a) + (c-a)^2 also a square?
    if (Math.pow(sqrt, 2) === bSquared) {
      abcVals.push({ a: i, b: sqrt, c: Math.pow(i*i + sqrt*sqrt, .5)});
    }
  }
  abcVals = abcVals.slice(0, 9);
  return abcVals;
}

export const calcACoords = (i, a) => {
  let topPos = Math.floor(i / a);
  let leftPos = i % a;
  let top = topPos * 12;
  let left = leftPos * 12;
  let style={ top: top + 'px', left: left + 'px' };
  return style;
}

export const calcBCoords = (i, a, b) => {
  let topPos = Math.floor(i / b);
  let leftPos = i % b;
  let top = (12*(a-b)) + topPos * 12;
  let left = leftPos * 12;
  let style={ top: top + 'px', left: left + 'px' };
  return style;
}


export const wrap = (i, a, b, c) => {
  var numSquares = b*b-1;
  if (b && i <= numSquares) {
    var style = calcWrapCoords(numSquares - i, a, b, 12, 200, c-a);
    var el = document.getElementById('sq' + i);
    el.style.top = style.top;
    el.style.left = style.left;
    i++;
  }
}

const calcWrapCoords = (i, a, b, sqW, leftOffset, thickness) => {
    let growVertically = a * thickness + thickness*thickness;
    var top, left;

    if (i < growVertically) {
      top = sqW * (thickness*-1 + parseInt(i/thickness, 10)); // This is correct.
      left = leftOffset + -1 * (i%thickness+1) * sqW; // This is correct.
    } else {
      top = -1 * (i%thickness+1) * sqW; // This appears to be correct.
      left = leftOffset + parseInt((i - growVertically) / thickness, 10) * sqW; // This is correct.
    }

    let style={ top: top + 'px', left: left + 'px' };
    return style;
  }


