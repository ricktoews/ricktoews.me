function FibRatios() {
  var seq = {
    a: function(n) { var a = 0, b = 1; for (let i = 1; i < n; i++) { [a, b] = [b, a+b]; } return [a, b]; },
    b: function(n) { var a = 1, b = 1; for (let i = 1; i < n; i++) { [a, b] = [b, a+b]; } return [a, b]; },
  };

  function calculate() {
    var a = document.getElementById('seed-a').value;
    var b = document.getElementById('seed-b').value;
    a = parseInt(a, 10);
    b = parseInt(b, 10);
console.log('calculate a, b', a, b);

    var cells = Array.from(document.getElementsByClassName('seq'));
    var ratios = Array.from(document.getElementsByClassName('ratio'));
    var cell_val, prev_cell_val;
    cells.forEach((cell, ndx) => {
      if (cell_val) prev_cell_val = cell_val;
      cell_val = seq.a(ndx+1)[1] * a + seq.b(ndx+1)[1] * b;
      cell.innerHTML = cell_val;
      if (prev_cell_val) ratios[ndx].innerHTML = cell_val / prev_cell_val;
    });
  }
console.log('seed-a', document.getElementById('seed-a'));
  document.getElementById('seed-a').addEventListener('change', calculate);
  document.getElementById('seed-b').addEventListener('change', calculate);
};

export default FibRatios;

