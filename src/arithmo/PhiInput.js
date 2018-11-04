import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PhiData from './PhiData';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width:50,
	},
});

function calcPhi(nth) {
	return fetch('//arithmo-rest.toewsweb.net/phi/powers/' + nth)
	.then(res => {
		return res.json();
	})
	.then(res => {
        res.forEach((row, ndx) => {
            res[ndx].phi = '(' + row.phi_num.whole + ' + ' + row.phi_num.sqrt_5_coef + '√5) / 2';
            let term = row.phi_num.sqrt_5_coef*Math.pow(5, .5);
            term = Math.round(term*10000) / 10000;
            res[ndx].terms = row.phi_num.whole + ', ' + term;
            res[ndx].fibonacci = row.phi_num.sqrt_5_coef;
        });
        return res;
	});
}

class PhiInput extends Component {
	constructor(props) {
		super(props);
		let nth = props.match ? props.match.params.nth : '';
		this.state = {
			nth: nth,
		};
		if (nth) {
			calcPhi(nth).then((res) => {
				this.setState({ data: res });
			});
		}
	}

	handleChange = event => {
		this.setState({ nth: event.target.value });
	}


	handleClick = event => {
		const { history } = this.props;
		var nth = this.state.nth;
		calcPhi(nth).then((res) => {
			this.setState({ data: res });
		});
		let newUrl = '/arithmo/phi/' + nth;
		history.push(newUrl);
	};

	render() {
		const { classes } = this.props;
		let dataRows = <div></div>;
		if (this.state.data ) {
			dataRows = <div><PhiData classes={this.props.classes} nth={this.state.nth} rows={this.state.data} /></div>
		}

		return (
			<div>
			  <TextField id="nth" label="Power" 
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

export default withRouter(withStyles(styles)(PhiInput));
