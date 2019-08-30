import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.jsx";
import Switch from '@material-ui/core/Switch';

const fakeData = require("../../../Data/FakeData");

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#203470",
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
        minWidth: "100%",
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
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
    const { classes } = props;
    const player = fakeData.userData;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <colgroup>
                    <col width="10%" />
                    <col width="10%" />
                    <col width="60%" />
                    <col width="10%" />
                </colgroup>
                <TableHead>
                    <TableRow>
                        <CustomTableCell align="center">#</CustomTableCell>
                        <CustomTableCell align="center">Serve</CustomTableCell>
                        <CustomTableCell align="center">Score</CustomTableCell>
                        <CustomTableCell align="center">Time Outs</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow >
                        <CustomTableCell align="center">1</CustomTableCell>
                        <CustomTableCell align="center">S</CustomTableCell>
                        <CustomTableCell align="center">6</CustomTableCell>
                        <CustomTableCell align="center">1</CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="center">2</CustomTableCell>
                        <CustomTableCell align="center">S</CustomTableCell>
                        <CustomTableCell align="center">5</CustomTableCell>
                        <CustomTableCell align="center">2</CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="center">3</CustomTableCell>
                        <CustomTableCell align="center">S</CustomTableCell>
                        <CustomTableCell align="center">2</CustomTableCell>
                        <CustomTableCell align="center">1</CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="center">4</CustomTableCell>
                        <CustomTableCell align="center">S</CustomTableCell>
                        <CustomTableCell align="center">2</CustomTableCell>
                        <CustomTableCell align="center">4</CustomTableCell>
                    </TableRow>
                    <TableRow >
                        <CustomTableCell align="center">5</CustomTableCell>
                        <CustomTableCell align="center">S</CustomTableCell>
                        <CustomTableCell align="center">12</CustomTableCell>
                        <CustomTableCell align="center">3</CustomTableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);