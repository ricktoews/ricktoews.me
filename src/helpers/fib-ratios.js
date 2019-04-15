function FibRatios(a, b) {
  var seq = {
    // Fibonacci number n, starting at 0.
    a: function(n) { var a = 0, b = 1; for (let i = 1; i < n; i++) { [a, b] = [b, a+b]; } return [a, b]; },
    // Fibonacci number n, starting at 1.
    b: function(n) { var a = 1, b = 1; for (let i = 1; i < n; i++) { [a, b] = [b, a+b]; } return [a, b]; },
  };

  function calculate() {
    a = parseInt(a, 10);
    b = parseInt(b, 10);

    var cells = Array.from(document.getElementsByClassName('seq'));
    var ratios = Array.from(document.getElementsByClassName('ratio'));
    var cell_val, prev_cell_val;
    cells.forEach((cell, ndx) => {
      if (cell_val) prev_cell_val = cell_val;
console.log('ndx+1, seq.b', ndx+1, seq.b(ndx+1));
      let seq_a = seq.a(ndx+1)[1];
      let seq_b = seq.b(ndx+1)[1];
      cell_val = seq_a * a + seq_b * b;
      cell.innerHTML = `${seq_a}x${a} + ${seq_b}x${b}: ${cell_val}`;
      if (prev_cell_val) ratios[ndx].innerHTML = `${cell_val} / ${prev_cell_val}: ${cell_val / prev_cell_val}`;
    });
  }

  calculate();
};

export default FibRatios;

