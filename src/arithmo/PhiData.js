import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width:50,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const PhiData = (props) => {
	var data = props.rows;
	if (data) {
	var rows = (
	  <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>Power</CustomTableCell>
            <CustomTableCell>Phi^n</CustomTableCell>
            <CustomTableCell>Terms</CustomTableCell>
            <CustomTableCell>Fibonacci</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
		{data.map(item => {
			return (
              <TableRow className={props.classes.row} key={item.power}>
                <CustomTableCell>{item.power}</CustomTableCell>
                <CustomTableCell>{item.phi}</CustomTableCell>
                <CustomTableCell>{item.terms}</CustomTableCell>
                <CustomTableCell>{item.fibonacci}</CustomTableCell>
              </TableRow>
            );
		})}
        </TableBody>
	  </Table>
	);
	} else {
		rows = <div></div>
	}
	return rows;
};

export default withStyles(styles)(PhiData);
