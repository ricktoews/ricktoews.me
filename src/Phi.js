import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: { main: purple[500] },
        secondary: { main: green[500] },
    }
});

const style = theme => ({
    root: {
        width:300,
    },
})

const phi = (1 + Math.pow(5, .5)) / 2;

const phiPower = (p) => {
	return Math.pow(phi, p);
}

var powers = [];
fetch('//arithmo-rest.toewsweb.net/phi/powers/10')
.then(response => {
    var data = response.json();
    return data;
})
.then(result => {
    powers = result;
	console.log('phi powers result', result);
});

const Phi = (props) => {
    const { classes } = props;

    return ( 
  <MuiThemeProvider theme={theme}>
    <Typography variant="title" color="primary" gutterBottom>Phi</Typography> 
    <div className={classes.root}>
      <Typography color="secondary" gutterBottom>Phi is calculated as (1 + √5) / 2. The table shows this, represented in three ways, for the number of powers you specify.</Typography>

      <Typography color="secondary" gutterBottom><strong>Phi<sup>n</sup></strong>. The fractional form of phi raised to the nth power--but with a slight twist. For each fraction, the denominator of 2 is kept, even when it's possible to simplify. The reason for doing this is to preserve continuity of the coefficient of √5 for each power. Notice that each of these is the nth Fibonacci number.</Typography>

      <Typography color="secondary" gutterBottom><strong>Variant</strong>. This column represents phi as a fraction, but with n*√5 multiplied out and approximated. Notice that as the powers increase, this approximation approaches the number to the left, to which it is being added.</Typography>

      <Typography color="secondary" gutterBottom><strong>Approx</strong>. This is the Variant divided by √5. It also improves as an approximation of the nth Fibonacci number, the large the value of n.</Typography>

      <Typography color="secondary" gutterBottom>Notice also that for each power of phi, the coefficient of √5 is the corresponding Fibonacci number.</Typography>
    </div>
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Column Heading
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Cell Data
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </MuiThemeProvider>
    );
}

export default withStyles(style)(Phi);
