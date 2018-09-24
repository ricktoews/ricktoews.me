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

const DecimalData = (props) => {
	var data = props.rows;
	if (data) {
	var rows = (
	  <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>Fraction</CustomTableCell>
            <CustomTableCell>Decimal</CustomTableCell>
            <CustomTableCell>Repeating</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
		{data.map(item => {
			return (
              <TableRow className={props.classes.row} key={item.num}>
                <CustomTableCell>{item.fraction}</CustomTableCell>
                <CustomTableCell>.{item.decimal}</CustomTableCell>
                <CustomTableCell>{item.repeating}</CustomTableCell>
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

export default withStyles(styles)(DecimalData);
