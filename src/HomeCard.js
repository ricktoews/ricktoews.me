import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
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
	rootMobile: {
		position: 'relative',
		width: '100%',
		backgroundColor: "#ffffff",
	},
	topTrim: {
		height: 12,
	},
	topTrimMobile: {
		height: 6,
	},
	shadowBar: {
		position: 'absolute',
		top: '16px',
		left: '3px',
		width: '294px',
		height: '60px',
		boxShadow: '0 1px 5px 0px #666',
	},
	shadowBarMobile: {
		position: 'absolute',
		top: '8px',
		left: '1px',
		width: 'calc(100% - 2px)',
		height: '33px',
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
	titleBarMobile: {
    	...theme.mixins.gutters(),
		height: 36,
		display: "flex",
		position: "relative",
		alignItems: "center",
		fontSize: "12pt",
		fontWeight: "bold",
		cursor: "pointer",
	},
	cardContent: {
		...theme.mixins.gutters(),
		marginTop: 12,
		overflowY: "scroll",
		height: 200,
	},
	cardContentMobile: {
		...theme.mixins.gutters(),
		marginTop: 12,
		overflowY: 'hidden',
	},
    itemImage: {
        width: 50,
        float: 'left',
        marginRight: 5
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
        const homeItem = cards[id].homeItem || cards.default.homeItem;
        const itemImage = homeItem.image ? <img className={ classes.itemImage } src={homeItem.image} alt={homeItem.title} /> : '';
		const title = cards[id].title;
		const primaryColor = cards[id].primaryColor;
		const cardTheme = homeCardTheme({ primaryColor });
		const palette = cardTheme.palette.primary;
		var c = React.Children.toArray(children);
		const paragraphs = c.map(p => p.props.children);
console.log('HomeCard paragraphs', paragraphs);
		return (
            <MuiThemeProvider theme={cardTheme}>
            <MediaQuery query="(max-width: 4096px) and (min-width: 481px)">
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
            </MediaQuery>

            <MediaQuery query="(max-width: 480px)">
			<div className={ classes.rootMobile }>
			  <div className={ classes.topTrimMobile } style={{backgroundColor: palette.dark}}>
              </div>
			  <div className={ classes.shadowBarMobile }></div>
			  <div onClick={this.handleClick} className={ classes.titleBarMobile } style={{color: palette.contrastText, backgroundColor: palette.light}}>
			  <CardIcon id={id} color="secondary" />
			    { homeItem.title }
			  </div>
			  <div className={ classes.cardContentMobile }>
				{ paragraphs.map((text, key) => (
				<Typography key={key} variant="body1" gutterBottom>{ text }</Typography>
				)) }
			  </div>
			  <div className={ classes.cardContentMobile }>
                { itemImage }
				{ homeItem.blurb && homeItem.blurb.map((text, key) => (
				<Typography key={key} variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: text }}></Typography>
				)) }
			  </div>
			</div>
            </MediaQuery>
			</MuiThemeProvider>
		);
	}
}
export default withRouter(withStyles(styles)(HomeCard));
