import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import MobileNav from './mobile/MobileNav';
import HomeIcon from '@material-ui/icons/Home';
import Filter from './Filter';
import CardIcon from './CardIcon';
import { cards, homeCardTheme } from './cards';

const styles = (theme) => {
console.log('gutters', theme.mixins.gutters());
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
      boxShadow: '0 1px 5px 0px #000',
    },
    titleBar: {
      ...theme.mixins.gutters(),
      height: 64,
      display: "flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "space-between",
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

  homeClick = e => {
    const { history } = this.props;
    history.push('/');
  };

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
      <div style={{ position: 'relative', zIndex:1 }}>
        {/* Desktop */}
        <MediaQuery query="(max-width: 4096px) and (min-width: 481px)">
          <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
            <div className={ classes.topTrim } style={{backgroundColor: cardTheme.palette.primary.dark }}></div>
            <div className={ classes.titleBar } style={{color: cardTheme.palette.primary.contrastText, backgroundColor: cardTheme.palette.primary.light }}>
              <HomeIcon onClick={this.homeClick} style={{ cursor: 'pointer', color: primary.dark }}/>
              ricktoews.me
              <Filter color="primary"/>
            </div>
          </div>
        </MediaQuery>

        {/* Mobile device */}
        <MediaQuery query="(max-width: 480px)">
          <div className={ classes.topTrimMobile } style={{backgroundColor: primary.dark}}></div>
          <div className={ classes.shadowBarMobile }></div>
          <div className={ classes.titleBarMobile } style={{color: primary.contrastText, backgroundColor: primary.light}}>
            <HomeIcon onClick={this.homeClick} style={{ cursor: 'pointer', color: primary.dark }}/>
            { title }
            <Filter color="primary"/>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Masthead));
