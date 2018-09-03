import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

const cards = {
	arithmophile: {
		title: 'Arithmophile',
		primaryColor: '3f51b5',
		iconPath: 'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
		link: '/decimal',
	},
	bookshelf: {
		title: 'Bookshelf',
		primaryColor: 'e91e63',
		iconPath: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
		link: '/books',
	},
	autodidact: {
		title: 'Lifelong Autodidact',
		primaryColor: 'd500f9',
		iconPath: ['M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4', 'M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z'],
		link: '/learning',
	},
	quote: {
		title: 'Eye-catching Quote',
		primaryColor: '76ff03',
		iconPath: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
		link: '/logophilia',
	},
	professional: {
		title: 'My Craft',
		primaryColor: 'ff3d00',
		iconPath: 'M 12 2 C 8.308 2 5.0855156 4.016 3.3535156 7 L 5.7949219 7 C 6.6949219 5.888 7.8693281 5.0079531 9.2363281 4.5019531 C 8.9233281 5.2299531 8.6724688 6.08 8.4804688 7 L 10.537109 7 C 11.016109 5.023 11.687 4 12 4 C 12.313 4 12.983891 5.023 13.462891 7 L 15.519531 7 C 15.327531 6.08 15.075672 5.2299531 14.763672 4.5019531 C 16.129672 5.0079531 17.305078 5.888 18.205078 7 L 20.646484 7 C 18.914484 4.016 15.692 2 12 2 z M 1 9 L 2.2421875 15 L 3.5507812 15 L 4.4003906 11.529297 L 5.2480469 15 L 6.5507812 15 L 7.7929688 9 L 6.2890625 9 L 5.7519531 12.365234 L 4.953125 9 L 3.8398438 9 L 3.0390625 12.371094 L 2.5078125 9 L 1 9 z M 8.6035156 9 L 9.8457031 15 L 11.154297 15 L 12.003906 11.529297 L 12.851562 15 L 14.154297 15 L 15.396484 9 L 13.894531 9 L 13.355469 12.365234 L 12.558594 9 L 11.443359 9 L 10.644531 12.371094 L 10.111328 9 L 8.6035156 9 z M 16.207031 9 L 17.449219 15 L 18.757812 15 L 19.607422 11.529297 L 20.455078 15 L 21.757812 15 L 23 9 L 21.496094 9 L 20.958984 12.365234 L 20.160156 9 L 19.046875 9 L 18.246094 12.371094 L 17.714844 9 L 16.207031 9 z M 3.3535156 17 C 5.0855156 19.984 8.308 22 12 22 C 15.692 22 18.914484 19.984 20.646484 17 L 18.205078 17 C 17.305078 18.112 16.130672 18.992047 14.763672 19.498047 C 15.075672 18.770047 15.325578 17.92 15.517578 17 L 13.460938 17 C 12.981938 18.977 12.311047 20 11.998047 20 C 11.685047 20 11.016109 18.977 10.537109 17 L 8.4804688 17 C 8.6724688 17.92 8.9243281 18.770047 9.2363281 19.498047 C 7.8703281 18.992047 6.6949219 18.112 5.7949219 17 L 3.3535156 17 z',
		link: '/professional',
	},

	travel: {
		title: 'Travel',
		primaryColor: '3f51b5',
		iconPath: 'M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z',
		link: '/travel',
	}
};


const homeCardTheme = specs => {
	return createMuiTheme({
		palette: {
			primary: {
				main: '#' + specs.primaryColor,
			},
			secondary: {
				main: '#' + specs.secondaryColor,
			},
		},
	});
}


const mastheadTheme = specs => {
	return createMuiTheme({
		palette: {
			primary: {
				main: '#' + specs.primaryColor,
			},
		},
	});
}

const styles = (theme) => {
	return ({
	root: {
		position: 'relative',
		backgroundColor: "#ffffff",
	},
	topTrim: {
		height: 12,
	},
	titleBar: {
    	...theme.mixins.gutters(),
		height: 64,
		display: "flex",
		position: "relative",
		alignItems: "center",
		fontSize: "18pt",
		marginBottom: "20px",
	},
	cardContent: {
		...theme.mixins.gutters(),
		marginTop: 12,
		overflowY: "scroll",
		height: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	});
};


class Masthead extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { history } = this.props;
		history.push('/');
	}

	render() {
		const { id, classes } = this.props;
		const title = cards[id].title;
		const primaryColor = cards[id].primaryColor;
		const cardTheme = mastheadTheme({ primaryColor });
		const primary = cardTheme.palette.primary;
		return (
		  <MuiThemeProvider theme={cardTheme}>
		    <div className={ classes.topTrim } style={{backgroundColor: primary.dark}}></div>
			<div className={ classes.titleBar } style={{color: primary.contrastText, backgroundColor: primary.light}}>
		      <IconButton color="primary" className={classes.button}>
		        <HomeIcon onClick={this.handleClick}  />
		      </IconButton>
		      { title }
		    </div>
		  </MuiThemeProvider>
		);
	}
}

const MastheadWrapped = withRouter(withStyles(styles)(Masthead));


export { cards, homeCardTheme, MastheadWrapped };
