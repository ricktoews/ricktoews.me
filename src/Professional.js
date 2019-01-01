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
			  <h2>Linux</h2>
              <h3>Linux find</h3>
			  <Typography variant="body1" gutterBottom>The idea here is to suppress any "permission denied" items that one might otherwise see in the output of the find command. A way I recently learned to do that:</Typography>
			  <SyntaxHighlighter language='javascript' style={docco} wrapLines={true}>
			  find ./ -name [filename] 2>/dev/null
			  </SyntaxHighlighter>
              </article>

              <article>
			  <h2>JavaScript</h2>
              <h3>JavaScript sort numeric</h3>
			  <Typography variant="body1" gutterBottom>Not long ago, I ran into a situation in which I found that numbers weren't being sorted as numbers but as if they were strings. So, for example, 10 would appear before 4, because the character '1' precedes the character '4' in a string sort. I learned that Array.prototype.sort() is, indeed, documented as behaving this way: "The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."</Typography>
			  <Typography variant="body1" gutterBottom>A simple way to deal perform a numeric sort:</Typography>
			  <SyntaxHighlighter language='javascript' style={docco} wrapLines={true}>
			  arr.sort((a, b) => a-b);
			  </SyntaxHighlighter>
			  <Typography variant="body1" gutterBottom>The subtraction forces the use of numeric values, and (a-b) returns a positive number if a > b, and, therefore, their relative positions in the array need to be switched.</Typography>
              </article>

			  <article>
			  <h2>JavaScript</h2>
			  <h3>Generators</h3>
			  <Typography variant="body1" gutterBottom>I recent started playing with generators in JavaScript. The concept was a new for me, so assimilation wasn't instant; however, it wasn't long before I find myself wanting to solve a problem for which a generator seemed just the thing.</Typography>
			  <Typography variant="body1" gutterBottom>I was playing with the concept of the primitive Pythagorean triple (that is, a Pythagorean triple whose elements have a GCF of 1) and wanted to be able to get the "next" square from a list of odd squares, beginning at a certain point and continuing as long as needed.</Typography>
			  <Typography variant="body1" gutterBottom>The code looked like this:</Typography>
			  <SyntaxHighlighter language='javascript' style={docco} wrapLines={true}>
			  {generatorCode}
			  </SyntaxHighlighter>
			  </article>
            </div>
		);
	}
}

export default withStyles(styles)(Professional);

