import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Edit from "@material-ui/icons/Edit";
import Button from "components/CustomButtons/Button.jsx";
import Switch from "@material-ui/core/Switch";
import Delete from "@material-ui/icons/Delete";
import { ExportToCsv } from 'export-to-csv';
import DatePicker from "react-date-picker";

const fakeData = require("../../../Data/FakeData");

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#489E86",
    color: theme.palette.common.white,
   // border: '2px solid gray'

  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  playersStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  inputsStyle: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    margin: "20px"
  },
  inputDivStyle: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center"
  },
  playersButtonStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
},
csvButtonStyle:{
  display: "flex",
  flexDirection: "column"
},
ButtonStyle: {
  border: '2px solid gray'
}
});

let id = 0;

const options = { 
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true, 
  showTitle: true,
  title: 'My Awesome CSV',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

const csvExporter = new ExportToCsv(options);

class CustomizedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlayers: false,
      rows: [],
      showInputs: false,
      fName: "",
      lName: "",
      gender: "",
      age: "",
      rating: "",
      paid: "",
      confirm: "",
      paidDate: "",
      phone: "",
      address: "",
      country: "",
      showMore: false
    };
  }



  createData(fName, lName, gender, age, rating, paid, confirm, paidDate, phone, address, country) {
    id += 1;
    return { id, fName, lName, gender, age, rating, paid, confirm, paidDate, phone, address, country};
  }

  deleteRow(id) {
    console.log("hisdsa");
    console.log(id);
    console.log(this.state.rows);
    this.state.rows.splice(id, 1);
    console.log(this.state.rows);
    this.forceUpdate();
  }

  addPlayer() {
    this.setState({
      showInputs: !this.state.showInputs
    });
  }
  submitPlayer() {
    this.state.rows.push(
      this.createData(
        this.state.fName,
        this.state.lName,
        this.state.gender,
        this.state.age,
        this.state.rating,
        this.state.paid,
        this.state.confirm
      )
    );
    this.setState({
      showInputs: !this.state.showInputs,
      fName: "",
      lName: "",
      gender: "",
      age: "",
      rating: "",
      paid: "",
      confirm: "",
      paidDate: "",
      phone: "",
      address: "",
      country: ""
    });
    this.forceUpdate();
  }

  exportToCSV(row){
    csvExporter.generateCsv(row);
  }
  componentDidMount(){
    this.state.rows.push(
      this.createData("Aijaz", "Ali", "Male", "25", "4.5", "Yes", "Yes", "25/04/2018", "92456484635", "karachi, Sindh", "Pakistan")
    );
    this.state.rows.push(
      this.createData("Aijaz", "Ali", "Male", "25", "4.5", "Yes", "Yes", "25/04/2018", "92456484635", "karachi, Sindh", "Pakistan")
    );
    this.state.rows.push(
      this.createData("Aijaz", "Ali", "Male", "25", "4.5", "Yes", "Yes", "25/04/2018", "92456484635", "karachi, Sindh", "Pakistan")
    );
    this.state.rows.push(
      this.createData("Aijaz", "Ali", "Male", "25", "4.5", "Yes", "Yes", "25/04/2018", "92456484635", "karachi, Sindh", "Pakistan")
    );
    this.state.rows.push(
      this.createData("Aijaz", "Ali", "Male", "25", "4.5", "Yes", "Yes", "25/04/2018", "92456484635", "karachi, Sindh", "Pakistan")
    );
    this.state.rows.push(
      this.createData("Aijaz", "Ali", "Male", "25", "4.5", "Yes", "Yes", "25/04/2018", "92456484635", "karachi, Sindh", "Pakistan")
    );
    this.forceUpdate();
  }

  render() {
    const { classes } = this.props;
    const player = fakeData.userData;
    return (
      <Paper className={classes.root}>
        <div className={classes.playersStyle}>
          {/* <Button
            //round
            color="primary"
            size="md"
            onClick={() => this.dataCreattion()}
          >
            Show List of All Players!
          </Button> */}
          <br />
          <Button
            //round
            className={classes.ButtonStyle}
            color="white"
            size="md"
            onClick={() => this.addPlayer()}
          >
            Add new Player
          </Button>
        </div>
        <br />
        <br />
        { this.state.showInputs ? (
          <div className={classes.inputDivStyle}>
            <div className={classes.inputsStyle}>
              <TextField
                id="outlined-uncontrolled"
                label="First Name"
                value={this.state.fName}
                onChange={ev => this.setState({ fName: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-uncontrolled"
                label="Last Name"
                value={this.state.lName}
                onChange={ev => this.setState({ lName: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-uncontrolled"
                label="Gender"
                value={this.state.gender}
                onChange={ev => this.setState({ gender: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-uncontrolled"
                label="Age"
                value={this.state.age}
                onChange={ev => this.setState({ age: ev.target.value })}
                className={classes.textField}
                type="number"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-uncontrolled"
                label="rating"
                value={this.state.rating}
                onChange={ev => this.setState({ rating: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-uncontrolled"
                label="paid"
                value={this.state.paid}
                onChange={ev => this.setState({ paid: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-uncontrolled"
                label="confirm"
                value={this.state.confirm}
                onChange={ev => this.setState({ confirm: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-uncontrolled"
                label="Phone"
                value={this.state.phone}
                onChange={ev => this.setState({ phone: ev.target.value })}
                className={classes.textField}
                type="phone"
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-uncontrolled"
                label="Address"
                value={this.state.address}
                onChange={ev => this.setState({ address: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-uncontrolled"
                label="Country"
                value={this.state.country}
                onChange={ev => this.setState({ country: ev.target.value })}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="date"
                label="Paid Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                value={this.state.paidDate}
                onChange={ev => this.setState({ paidDate: ev.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={classes.playersStyle}>
              <Button
                //round
                color="primary"
                size="md"
                onClick={() => this.submitPlayer()}
              >
                Submit
              </Button>
            </div>
          </div>
        ) : null}

        <br />
        {!this.state.showMore?
        (<Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">No.</CustomTableCell>
              <CustomTableCell align="center">First Name</CustomTableCell>
              <CustomTableCell align="center">LastName</CustomTableCell>
              <CustomTableCell align="center">Gender</CustomTableCell>
              <CustomTableCell align="center">age</CustomTableCell>
              <CustomTableCell align="center">Rating</CustomTableCell>
              <CustomTableCell align="center">Paid</CustomTableCell>
              <CustomTableCell align="center">Confirm</CustomTableCell>
              <CustomTableCell align="center"> </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row, index) => (
              <TableRow className={classes.row} key={row.id}>
                {/* <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell> */}
                <CustomTableCell align="center">{row.id}</CustomTableCell>
                <CustomTableCell align="center">{row.fName}</CustomTableCell>
                <CustomTableCell align="center">{row.lName}</CustomTableCell>
                <CustomTableCell align="center">{row.gender}</CustomTableCell>
                <CustomTableCell align="center">{row.age}</CustomTableCell>
                <CustomTableCell align="center">{row.rating}</CustomTableCell>
                <CustomTableCell align="center">{row.paid}</CustomTableCell>
                <CustomTableCell align="center">{row.confirm}</CustomTableCell>
                <CustomTableCell align="center">
                  <Button
                    //round
                    color="white"
                    size="sm"
                    onClick={() => this.deleteRow(index)}
                  >
                    <Delete />
                  </Button>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>): (<Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">No.</CustomTableCell>
              <CustomTableCell align="center">First Name</CustomTableCell>
              <CustomTableCell align="center">LastName</CustomTableCell>
              <CustomTableCell align="center">Gender</CustomTableCell>
              <CustomTableCell align="center">age</CustomTableCell>
              <CustomTableCell align="center">Rating</CustomTableCell>
              <CustomTableCell align="center">Paid</CustomTableCell>
              <CustomTableCell align="center">Confirm</CustomTableCell>
              <CustomTableCell align="center">Paid Date</CustomTableCell>
              <CustomTableCell align="center">Phone</CustomTableCell>
              <CustomTableCell align="center">Address</CustomTableCell>
              <CustomTableCell align="center">Country</CustomTableCell>
              <CustomTableCell align="center"> </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row, index) => (
              <TableRow className={classes.row} key={row.id}>
                {/* <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell> */}
                <CustomTableCell align="center">{row.id}</CustomTableCell>
                <CustomTableCell align="center">{row.fName}</CustomTableCell>
                <CustomTableCell align="center">{row.lName}</CustomTableCell>
                <CustomTableCell align="center">{row.gender}</CustomTableCell>
                <CustomTableCell align="center">{row.age}</CustomTableCell>
                <CustomTableCell align="center">{row.rating}</CustomTableCell>
                <CustomTableCell align="center">{row.paid}</CustomTableCell>
                <CustomTableCell align="center">{row.confirm}</CustomTableCell>
                <CustomTableCell align="center">{row.paidDate}</CustomTableCell>
                <CustomTableCell align="center">{row.phone}</CustomTableCell>
                <CustomTableCell align="center">{row.address}</CustomTableCell>
                <CustomTableCell align="center">{row.country}</CustomTableCell>
                <CustomTableCell align="center">
                  <Button
                    //round
                    color="white"
                    size="sm"
                    onClick={() => this.deleteRow(index)}
                  >
                    <Delete />
                  </Button>
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>)}
        <div className={classes.playersButtonStyle}>
                <div className={classes.csvButtonStyle}>
                  <Button
                    //round
                    color="white"
                    size="md"
                    className={classes.ButtonStyle}
                    onClick={() => {
                      csvExporter.generateCsv(this.state.rows);
                    }}
                    // component={Link}
                    // to={{
                    //   pathname: ""
                    // }}
                  >
                    Export to CSV
                  </Button>
                  <Button
                    //round
                    color="white"
                    size="md"
                    className={classes.ButtonStyle}
                    onClick={() => this.setState({})}
                    // component={Link}
                    // to={{
                    //   pathname: ""
                    // }}
                  >
                    Export to Excel
                  </Button>
                </div>
                <div>
                <Button
                  //round
                  color="white"
                  size="md"
                  className={classes.ButtonStyle}
                  onClick={() => this.setState({showMore: !this.state.showMore})}
                  // component={Link}
                  // to={{
                  //   pathname: ""
                  // }}
                >
                  {!this.state.showMore ? ('Show More') : ("show less") }
                </Button>
                </div>
            </div>
      </Paper>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
