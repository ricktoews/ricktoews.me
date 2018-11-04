import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Masthead from './Masthead';
import './App.css';

const styles = {
	root: {
	}
};

const generatorCode = 
`// Generator function to provide, on demand, the next odd square.
// As a local function, it assumes start is an odd square.
function* getSquares(start) {
  var n = Math.sqrt(start);
  while (true) {
    n += 2;
    yield(n*n);
  }
}

// Get Pythagorean triples using an odd number for the "corner," which is an odd square.
function getTripleOdd(corner) {
  var squareGen = getSquares(corner);
  var triples = [];
  for (let i = 0; i < SIZE_OF_LIST; i++) {
    let nextSquare = (() => { let gen = squareGen.next(); return gen.value; })();
    let a = (nextSquare - corner) / 2; // n(n + 2a); solving for a in the (n + 2a) part.
    let b = Math.sqrt(corner * corner + 2 * corner * a);
    let c = Math.sqrt(a*a + b*b);
    let t = [a, b, c];
    triples.push(t.sort(numSort));
  }
  return triples;
}

`;


class Professional extends Component {

	render() {
		return (
            <div>
			  <Masthead id="professional" />
			  <article>
			  <h2>JavaScript</h2>
			  <h3>Generators</h3>
			  <Typography variant="body1" gutterBottom>I recent started playing with generators in JavaScript. The concept was a new for me, so assimilation wasn't instant; however, it wasn't long before I find myself wanting to solve a problem for which a generator seemed just the thing.</Typography>
			  <Typography variant="body1" gutterBottom>I was playing with the concept of the primitive Pythagorean triple (that is, a Pythagorean triple whose elements have a GCF of 1) and wanted to be able to get the "next" square from a list of odd squares, beginning at a certain point and continuing as long as needed.</Typography>
			  <Typography variant="body1" gutterBottom>The code looked like this:</Typography>
			  <SyntaxHighlighter language='javascript' style={docco} wrapLines={true}>
			  {generatorCode}
			  </SyntaxHighlighter>
			  <Typography variant="body1" gutterBottom>To call it:</Typography>
			  </article>
            </div>
		);
	}
}

export default withStyles(styles)(Professional);

