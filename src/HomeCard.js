import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardIcon from './CardIcon';
import { cards, homeCardTheme } from './cards';

const styles = (theme) => {
	return ({
	root: {
		position: 'relative',
		width: 300,
		height: 300,
		backgroundColor: "#ffffff",
	},
	topTrim: {
		height: 12,
	},
	shadowBar: {
		position: 'absolute',
		top: '16px',
		left: '3px',
		width: '294px',
		height: '60px',
		boxShadow: '0 1px 5px 0px #666',
	},
	titleBar: {
    	...theme.mixins.gutters(),
		height: 64,
		display: "flex",
		position: "relative",
		alignItems: "center",
		fontSize: "18pt",
		cursor: "pointer",
	},
	cardContent: {
		...theme.mixins.gutters(),
		marginTop: 12,
		overflowY: "scroll",
		height: 200,
	}
	});
};

class HomeCard extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { id, history } = this.props;
		const link = cards[id] ? cards[id].link : '';
		history.push(link);
	}

	render() {
		const { id, children, classes } = this.props;
		const title = cards[id].title;
		const primaryColor = cards[id].primaryColor;
		const cardTheme = homeCardTheme({ primaryColor });
		const palette = cardTheme.palette.primary;

		var c = React.Children.toArray(children);
		const paragraphs = c.map(p => p.props.children);
		return (
			<MuiThemeProvider theme={cardTheme}>
			<div className={ classes.root }>
			  <div className={ classes.topTrim } style={{backgroundColor: palette.dark}}>
              </div>
			  <div className={ classes.shadowBar }></div>
			  <div onClick={this.handleClick} className={ classes.titleBar } style={{color: palette.contrastText, backgroundColor: palette.light}}>
			  <CardIcon id={id} color="secondary" />
			    { title }
			  </div>
			  <div className={ classes.cardContent }>
				{ paragraphs.map((text, key) => (
				<Typography key={key} variant="body1" gutterBottom>{ text }</Typography>
				)) }
			  </div>
			</div>
			</MuiThemeProvider>
		);
	}
}
const HomeCardWrapped = withRouter(withStyles(styles)(HomeCard));

export default HomeCardWrapped;
