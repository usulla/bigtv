import React, { Component } from "react";
import CustomPaginationActionsTable from "../Table/CustomPaginationActionsTable.jsx";
import * as utils from "./actions.js";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from '@material-ui/core/TableHead';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import HorizontalLinearStepper from '../HorizontalLinearStepper/HorizontalLinearStepper.jsx'
import MaterialTable from '../MaterialTable/MaterialTable.jsx';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
    marginTop:'50px'
  }
}));

const SampleFab = () => {
  const classes = useStyles();
  return <div className={classes.progressblock}><CircularProgress className={classes.progress} color="secondary" /></div>;
}
const ButtonEl = () => {
  const classes = useStyles();
  return <Button variant="contained" color="primary" className={classes.button}>Сохранить</Button>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sourceTables: [],
      comparedTables: []
    };
  }

  componentDidMount() {
    function checkStatus(response) {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
    function parseJSON(response) {
      return response.json();
    }
    let urls = ["/data/tempData1.json", "/data/tempData2.json"];

    Promise.all(
      urls.map(url =>
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
      )
    ).then(
      results => {
        console.log(results);

        this.setState({ comparedTables: utils.compareTable(results) });
        this.setState({
          sourceTables: results,
          isLoaded: true
        });
      },
      error => {
        console.log(error);
        this.setState({
          error,
          isLoaded: true
        });
      }
    ).then(
      console.log(this.state.comparedTables, ';;')
    );
  }
  
  render() {   
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <SampleFab/>
    } else if (isLoaded) {
      return (
        <div className='center_block'>   
         {/*<CustomPaginationActionsTable dataForTable={this.state.comparedTables}/> 
         <HorizontalLinearStepper/>    */}
         <MaterialTable dataForTable={this.state.comparedTables}/>
          {/* <ButtonEl/> */}
        </div>
      );
    }
  }
}

export default App;
