import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MastheadWrapped } from './cards.js';

const styles = {
	root: {
	}
};

class Professional extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div>
			  <MastheadWrapped id="professional" />
            </div>
		);
	}
}

export default withStyles(styles)(Professional);

