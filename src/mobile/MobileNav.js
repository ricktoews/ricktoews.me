import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import NavOptions from './NavOptions';


const styles = {
  list: {
    width: 250,
  },
  menuButton: {
    position: 'absolute',
    alignItems: 'center',
    left: 10,
  }
};

class MobileNav extends Component {
  state = {
    right: false,
  };

  homeClick = e => {
    const { history } = this.props;
    history.push('/');
  };

  toggleDrawer = (open) => () => {
    this.setState({
      right: open,
    });
  };

  render() {
    const { primaryColor, classes } = this.props;
    const iconColor = primaryColor ? primaryColor.dark : '#000';

    const sideList = (
      <div className={classes.list}>
        <List><NavOptions /></List>
      </div>
    );

    return (
      <div className={ classes.menuButton }>
      <HomeIcon onClick={this.homeClick} style={{ fontSize: 40, cursor: 'pointer', color: iconColor }}/>
{/*
        <IconButton onClick={this.toggleDrawer(true)}>
        <MenuIcon style={{ color: iconColor }}/>
        </IconButton>
        <Drawer anchor="left" open={this.state.right} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
*/}
      </div>
    );
  }
}

MobileNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MobileNav));

