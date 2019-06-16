import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from '@material-ui/core/TableHead';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
//import TablePaginationActions from "./TablePaginationActions.jsx";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
}));

function createData(obj) {
  const rows = {};
  for (var key in obj){
      rows.push(obj[key]);
  }
  return rows;
}

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

function CustomPaginationActionsTable(props) {
  const rows = props.dataForTable;
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20005);
  const [selected, setSelected] = React.useState([]);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const isSelected = name => selected.indexOf(name) !== -1;
  console.log(isSelected, 'isSelected')

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }
  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  return (
    
    <div className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
         <TableHead>
            <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">IDEC</TableCell>
            <TableCell align="right">Дата эфира</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Серия</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.IDEC);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    onClick={event => handleClick(event, row.IDEC)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.IDEC}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.IDEC}
                    </TableCell>
                    <TableCell align="right">{row.datetime}</TableCell>
                    <TableCell align="right">{row.HOUSE_ID}</TableCell>
                    <TableCell align="right">{row.HOUSE_ID}</TableCell>
                  </TableRow>
                );
              })}

            {/* {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
          </TableBody>
          {/*
          <TableFooter>
            <TableRow>
              <TablePaginationActions count={rows.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage}/>
            </TableRow>
          </TableFooter>
          */}
        </Table>
      </div>
    </div>
  );
}

export default CustomPaginationActionsTable;