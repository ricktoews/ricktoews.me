import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MobileNav from './mobile/MobileNav';
import CardIcon from './CardIcon';
import { cards, homeCardTheme } from './cards';

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
    topTrimMobile: {
      height: 6,
    },
	shadowBarMobile: {
		position: 'absolute',
		top: '8px',
		left: '1px',
		width: 'calc(100% - 2px)',
		height: '34px',
		boxShadow: '0 1px 5px 0px #666',
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
    titleBarMobile: {
      ...theme.mixins.gutters(),
      height: 36,
      display: "flex",
      position: "relative",
      alignItems: "center",
      fontSize: "14pt",
      marginBottom: "20px",
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
    const cardTheme = homeCardTheme({ primaryColor });
    const primary = cardTheme.palette.primary;
    return (
      <MuiThemeProvider theme={cardTheme}>
      <MediaQuery query="(max-width: 4096px) and (min-width: 481px)">
        <div className={ classes.topTrim } style={{backgroundColor: primary.dark}}></div>
        <div className={ classes.titleBar } style={{color: primary.contrastText, backgroundColor: primary.light}}>
        <MobileNav primaryColor={ primary }/>
          <span style={{display: "inline-block", width:"40px"}}></span>{ title }
        </div>
      </MediaQuery>

      <MediaQuery query="(max-width: 480px)">
        <div className={ classes.topTrimMobile } style={{backgroundColor: primary.dark}}></div>
        <div className={ classes.shadowBarMobile }></div>
        <div className={ classes.titleBarMobile } style={{color: primary.contrastText, backgroundColor: primary.light}}>
        <MobileNav primaryColor={ primary }/>
          <span style={{ display: "inline-block", width: "40px" }}></span>
			  <CardIcon id={id} color="secondary" />
          { title }
        </div>
      </MediaQuery>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(Masthead));