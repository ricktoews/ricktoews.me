export const getABC = (corner) => {
  var abcVals = [];
  for (let i = 3; i <= 100; i++) {
    let bSquared = Math.pow(corner, 2) + 2 * corner * i;
    let sqrt = Math.floor(Math.pow(bSquared, .5));
    if (Math.pow(sqrt, 2) === bSquared) {
      abcVals.push({ a: i, b: sqrt, c: Math.pow(i*i + sqrt*sqrt, .5)});
    }
  }
  console.log('getABC', corner, abcVals);
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
//console.log('Wrap:', a, b, c);
    var numSquares = b*b-1;
    if (b && i <= numSquares) {
      var style = calcWrapCoords(numSquares - i, a, b, 12, 200, c-a);
      var el = document.getElementById('sq' + i);
      el.style.top = style.top;
      el.style.left = style.left;
      i++;
      //var t = setTimeout(() => { wrap(i, a, b, c); }, 100);
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


