import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Nav from './Nav';
import Main from './Main';

const style = ({
  root: {
    background: '#000',
    height: "100vh",
  },
});

const App = (props) => {
	const { classes } = props;

	return (
    <div className={classes.root}>
      <Nav />
      <Main />
    </div>
	);
}

export default withStyles(style)(App);
