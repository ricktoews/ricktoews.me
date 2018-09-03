import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DecimalData from './DecimalData';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width:50,
	},
});

function calcDecimals(denom) {
	return fetch('//arithmo-rest.toewsweb.net/dc/' + denom)
	.then(res => {
		return res.json();
	})
	.then(res => {
		return res;
	});
}

class DenomInput extends Component {
	constructor(props) {
		super(props);
		let denom = props.match ? props.match.params.denom : '';
		this.state = {
			denom: denom,
		};
		if (denom) {
			calcDecimals(denom).then((res) => {
				this.setState({ data: res });
			});
		}
	}

	handleChange = event => {
		this.setState({ denom: event.target.value });
	}


	handleClick = event => {
		const { history } = this.props;
		var denom = this.state.denom;;
		calcDecimals(denom).then((res) => {
console.log(res);
			this.setState({ data: res });
		});
		let newUrl = '/decimal/' + denom;
		history.push(newUrl);
	};

	render() {
		const { classes } = this.props;
		let dataRows = <div></div>;
		if (this.state.data ) {
			dataRows = <div><DecimalData classes={this.props.classes} denom={this.state.denom} rows={this.state.data} /></div>
		}

		return (
			<div>
			  <TextField id="denom" label="Denominator" 
                 type="number" 
                 onChange={this.handleChange}
                 className={classes.textField}
                 InputLabelProps={{ shrink: true, }} margin="normal" />
              <Button  onClick={this.handleClick}><CheckCircle /></Button>
              {dataRows}
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(DenomInput));
