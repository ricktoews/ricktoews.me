import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Decimal from './Decimal';
import Logophilia from './Logophilia';
import Bookshelf from './Bookshelf';
import Travel from './Travel';
import Professional from './Professional';
import Autodidact from './Autodidact';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
	backgroundColor: "#eeeeee",
    paddingBottom: theme.spacing.unit * 2,
	margin: "auto",
    width: "85%",
    minHeight: '100vh',
  },
});

class Main extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MediaQuery query="(max-width:4096px) and (min-width:481px)">
        <Paper className={classes.root} elevation={1}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/decimal' component={Decimal}/>
            <Route path='/logophilia' component={Logophilia}/>
            <Route path='/books' component={Bookshelf}/>
            <Route path='/travel' component={Travel}/>
            <Route path='/professional' component={Professional}/>
            <Route path='/learning' component={Autodidact}/>
          </Switch>
        </Paper>
        </MediaQuery>

        <MediaQuery query="(max-width:480px)">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/decimal' component={Decimal}/>
            <Route path='/logophilia' component={Logophilia}/>
            <Route path='/books' component={Bookshelf}/>
            <Route path='/travel' component={Travel}/>
            <Route path='/professional' component={Professional}/>
            <Route path='/learning' component={Autodidact}/>
          </Switch>
        </MediaQuery>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

