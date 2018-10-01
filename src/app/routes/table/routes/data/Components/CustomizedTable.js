import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return {id, name, calories, fat, carbs, protein};
}

const data = [
    createData('Tree token', 159, 'Buy', 24, 50000),
    createData('Flower token', 234, 'Buy', 24, 4554),
    createData('Plant token', 159, 'Buy', 24, 2342),
    createData('Air token', 23, 'Buy', 24, 50000),
    createData('Fire token', 234, 'Buy', 24, 3423),
    createData('Flower token', 234, 'Buy', 24, 50000),
    createData('Sunflower token', 567, 'Buy', 24, 5757),
    createData('Tree token', 159, 'Buy', 24, 567565),
    createData('Tree token', 567, 'Buy', 24, 76576),
    createData('Tree token', 159, 'Buy', 24, 8979),
];

function CustomizedTable(props) {
    const {classes} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Asset</CustomTableCell>
                        <CustomTableCell numeric>Price (E)</CustomTableCell>
                        <CustomTableCell>Operation</CustomTableCell>
                        <CustomTableCell numeric>CO2 / Natural capital</CustomTableCell>
                        <CustomTableCell numeric>Quantity ($)</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow className={classes.row} key={n.id}>
                                <CustomTableCell>{n.name}</CustomTableCell>
                                <CustomTableCell numeric>{n.calories}</CustomTableCell>
                                <CustomTableCell numeric>{n.fat}</CustomTableCell>
                                <CustomTableCell numeric>{n.carbs}</CustomTableCell>
                                <CustomTableCell numeric>{n.protein}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);