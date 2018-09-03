import React, { Component } from 'react';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Book, { fetchBooks } from './Book.js';

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
	}
	});
};


class Bookshelf extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}

	componentDidMount() {
		fetchBooks().then(books => {
			this.setState({ books });
		});
	}

	render() {
		const { classes } = this.props;
		const title = 'Bookshelf';
		const primaryColor = '080';
		const cardTheme = mastheadTheme({ primaryColor });
		const palette = cardTheme.palette.primary;

		return (
            <div>
			  <div className={ classes.topTrim } style={{backgroundColor: palette.dark}}></div>
			  <div className={ classes.titleBar } style={{color: palette.contrastText, backgroundColor: palette.light}}>{ title }</div>
			  { this.state.books.map((item, ndx) => {
			  	return <Book key={ndx} bookData={item} />
			  }) }
            </div>
		);
	}
}

export default withStyles(styles)(Bookshelf);

