import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width:50,
	},
});

class Pythagorean extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = event => {
	}


	handleClick = event => {
		const { history } = this.props;
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
              <Typography variant="body1" gutterBottom>Pythagorean Triples</Typography>
              <Typography variant="body1" gutterBottom>One learns about the Pythagorean Theorem and the (3, 4, 5) triangle as an example in grade school. The idea is that the squares of the two legs, when added, equal the square of the hypotenuse. So 3^2 (9) + 4^2 (16) = 5^2 (25). Thus, (3, 4, 5) is known as a Pythagorean Triple.</Typography>
              <Typography variant="body1" gutterBottom>Any multiple of (3, 4, 5) is also a Pythagorean Triple: (6, 8, 10), (9, 12, 15), &c. However, that sort doesn't really interest me. I'd rather look at those that don't share a common factor. After (3, 4, 5), the next example is (5, 12, 13): 25 + 144 = 169.</Typography>
              <Typography variant="body1" gutterBottom>For me, the simplest way to find these is to start with an odd square: 9, 25, 49, 81, &c. It's a square because this number is to be the b^2 in the Pythagorean Theorem. It's odd because the difference between two consecutive squares is an odd number, and those consecutive squares are going to be the a^2 and the c^2.</Typography>
              <Typography variant="body1" gutterBottom>The way I make sense of it is to visualize a square grid with an arbitrary number of unit squares. The number of squares is obviously a square, so that the number of squares on each side is the square root. I then wrap a layer of squares from the upper right corner, around the upper left corner, and down to the bottom left corner. The result is a new square, whose square root is one greater than the square root of the original square, because there's one more square per side.</Typography>
              <Typography variant="body1" gutterBottom>The number of squares wrapped around is always odd. If, in addition, it is itself a square number, we have the makings of a Pythagorean Triple.</Typography>
              <Typography variant="body1" gutterBottom>So if we start with an odd number that's a square and use that to wrap the smaller square, we just need to calculate the dimensions of the smaller square. Let's call the starting number x. Since x covers two equal sides plus a corner, we can express x as 2a+1, and a is one of the elements of a Pythagorean Triple. For example, if we start with x = 25, and let 25 = 2a + 1, we get a value of 12 for a. Our b value is the square root of x, so 5.</Typography>
              <Typography variant="body1" gutterBottom>Returning to our illustrative square grid, how many squares are on each side of the square now? Since we wrapped 25 squares around a smaller square, the number of squares per side is 13: the corner square belongs to both the top and the side. Thus, in this case, 13 is our c value.</Typography>
              <Typography variant="body1" gutterBottom>We can equally well determine the c value by adding the squares of a and b (144 + 25 = 169) and taking the square root. The square root of 169 is 13.</Typography>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(Pythagorean));
