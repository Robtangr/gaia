import React from 'react';
import Table from '@material-ui/core/Table';import TableBody from '@material-ui/core/TableBody';import TableCell from '@material-ui/core/TableCell';import TableHead from '@material-ui/core/TableHead';import TableRow from '@material-ui/core/TableRow';

let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return {id, name, calories, fat, carbs, protein};
}

const data = [
    createData('BTD', 159, 6.0, 24, 4.0),
    createData('GSC', 237, 9.0, 37, 4.3),
    createData('MGO', 262, 16.0, 24, 6.0),
    createData('IOTA', 305, 3.7, 67, 4.3),
    createData('ETH', 356, 16.0, 49, 3.9),
];

function BasicTable() {

    return (
        <div className="table-responsive-material">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Asset</TableCell>
                        <TableCell numeric>Amount of tokens</TableCell>
                        <TableCell numeric>Cost of position</TableCell>
                        <TableCell numeric>Total CO2</TableCell>
                        <TableCell numeric>Token Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell>{n.name}</TableCell>
                                <TableCell numeric>{n.calories}</TableCell>
                                <TableCell numeric>{n.fat}</TableCell>
                                <TableCell numeric>{n.carbs}</TableCell>
                                <TableCell numeric>{n.protein}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}


export default BasicTable;