import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

let counter = 0;

function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return {id: counter, name, calories, fat, carbs, protein};
}

const columnData = [
    {id: 'name', numeric: false, disablePadding: true, label: 'Asset'},
    {id: 'calories', numeric: true, disablePadding: false, label: 'Price ($)'},
    {id: 'fat', numeric: true, disablePadding: false, label: 'Operation'},
    {id: 'carbs', numeric: true, disablePadding: false, label: 'CO2 / Natural capital'},
    {id: 'protein', numeric: true, disablePadding: false, label: 'Quantity ($)'},
];

class DataTableHead extends React.Component {
    static propTypes = {
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.string.isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };

    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {onSelectAllClick, order, orderBy, numSelected, rowCount} = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox color="primary"
                                  indeterminate={numSelected > 0 && numSelected < rowCount}
                                  checked={numSelected === rowCount}
                                  onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columnData.map(column => {
                        return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? 'none' : 'default'}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.id}
                                        direction={order}
                                        onClick={this.createSortHandler(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}


let DataTableToolbar = props => {
    const {numSelected} = props;

    return (
        <Toolbar
            className={classNames("table-header", {
                ["highlight-light"]: numSelected > 0,
            })}
        >
            <div className="title">
                {numSelected > 0 ? (
                    <Typography type="subheading">{numSelected} selected</Typography>
                ) : (
                    <Typography type="title">Transactions</Typography>
                )}
            </div>
            <div className="spacer"/>
            <div className="actions">
                {numSelected > 0 && (
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    );
};

DataTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


class DataTable extends React.Component {
    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        const data =
            order === 'desc'
                ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        this.setState({data, order, orderBy});
    };
    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState({selected: this.state.data.map(n => n.id)});
            return;
        }
        this.setState({selected: []});
    };
    handleKeyDown = (event, id) => {
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
    };
    handleClick = (event, id) => {
        const {selected} = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({selected: newSelected});
    };
    handleChangePage = (event, page) => {
        this.setState({page});
    };
    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };
    isSelected = id => this.state.selected.indexOf(id) !== -1;

    constructor(props, context) {
        super(props, context);

        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [
              createData('Tree token', 159, 'Buy', 24, 50000),
              createData('Flower token', 234, 'Buy', 24, 4554),
              createData('Plant token', 159, 'Buy', 24, 2342),
              createData('Air token', 23, 'Buy', 24, 50000),
              createData('Fire token', 234, 'Buy', 24, 3423),
              createData('Flower token', 234, 'Buy', 24, 50000),
              createData('Sunflower token', 567, 'Buy', 24, 5757),
              createData('Plant token', 159, 'Buy', 24, 2342),
              createData('Air token', 23, 'Buy', 24, 50000),
              createData('Fire token', 234, 'Buy', 24, 3423),
              createData('Flower token', 234, 'Buy', 24, 50000),
              createData('Tree token', 159, 'Buy', 24, 567565),
              createData('Tree token', 567, 'Buy', 24, 76576),
              createData('Tree token', 159, 'Buy', 24, 8979),
            ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
            page: 0,
            rowsPerPage: 5,
        };
    }

    render() {
        const {data, order, orderBy, selected, rowsPerPage, page} = this.state;

        return (
            <Paper>
                <DataTableToolbar numSelected={selected.length}/>
                <div className="flex-auto">
                    <div className="table-responsive-material">
                        <Table className="">
                            <DataTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={this.handleSelectAllClick}
                                onRequestSort={this.handleRequestSort}
                                rowCount={data.length}
                            />
                            <TableBody>
                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                    const isSelected = this.isSelected(n.id);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => this.handleClick(event, n.id)}
                                            onKeyDown={event => this.handleKeyDown(event, n.id)}
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={n.id}
                                            selected={isSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox color="primary" checked={isSelected}/>
                                            </TableCell>
                                            <TableCell padding="none">{n.name}</TableCell>
                                            <TableCell numeric>{n.calories}</TableCell>
                                            <TableCell numeric>{n.fat}</TableCell>
                                            <TableCell numeric>{n.carbs}</TableCell>
                                            <TableCell numeric>{n.protein}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        count={data.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default DataTable;