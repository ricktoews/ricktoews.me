import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DecimalData from './DecimalData';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width:50,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

class DecimalCalc extends React.Component {

	constructor(props) {
		super(props);
console.log('DecimalCalc props', props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		var params = this.props.match ? this.props.match.params : { denom: 7 };
		var denom = params.denom;
		fetch('//arithmo-rest.toewsweb.net/dc/' + denom)
		.then(res => {
			return res.json();
		})
		.then(res => {
			this.setState({ data: res });
		});
	}

	render() {
		return (
        <div><DecimalData classes={this.props.classes} rows={this.state.data} /></div>
		);
	}
}
export default withStyles(styles)(DecimalCalc);

