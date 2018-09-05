import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Masthead from './Masthead';

const styles = {
	root: {
	}
};

class Professional extends Component {

	render() {
		return (
            <div>
			  <Masthead id="professional" />
            </div>
		);
	}
}

export default withStyles(styles)(Professional);

