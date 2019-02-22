import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
      </div>
    );
  }
}

MobileNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileNav);

