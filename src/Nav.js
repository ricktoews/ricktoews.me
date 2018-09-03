import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import QueueIcon from '@material-ui/icons/Queue';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import TravelIcon from '@material-ui/icons/FlightTakeoff';

const styles = {
  root: {
    background: "none",
  },
};

class Nav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/decimal" label="Math" icon={<QueueIcon />} />
        <BottomNavigationAction component={Link} to="/logophilia" label="Logophila" icon={<SpellcheckIcon />} />
        <BottomNavigationAction component={Link} to="/books" label="Books" icon={<SpellcheckIcon />} />
        <BottomNavigationAction component={Link} to="/travel" label="Travel" icon={<TravelIcon />} />
      </BottomNavigation>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Nav);
