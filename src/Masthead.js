import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MobileNav from './mobile/MobileNav';
import { cards } from './cards';

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
        <MobileNav primaryColor={ primary }/>
        { title }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(Masthead));
