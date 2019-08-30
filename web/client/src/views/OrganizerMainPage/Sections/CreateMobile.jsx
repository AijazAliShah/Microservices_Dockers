import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import DatePicker from "react-date-picker";
import ModernDatepicker from "react-modern-datepicker";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import TimePicker from 'react-time-picker';
import TimezonePicker from 'react-timezone';

// import Form from '@material-ui/core/Form';
// import FormInput from '@material-ui/core/FormInput';

const styles = theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  container: {
    display: "flex",
   // flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  stepperStyle: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 780px)": {
      flexDirection: "column"
    }
  },
  formStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: "44%"
  },
  buttonsStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%"
    // marginTop: "20px"
  },
  venueStyle: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  calStyle: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: "15px"
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  GridStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%"
  },
  regDetailsRow: {
    display: "flex",
    flexDirection: "column"
  },
  marginTop: {
    marginTop: "20px"
  },
  dateDivStyle: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "Space-around",
    alignItems: "center",
    marginBottom: "20px",
  },
  dateRowStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  inputRoot: {
    height: 45
  },
  labelRoot: {
    height: 45
  },
  zoneRoot:{
    width: "250px"
  }
});

function getSteps() {
  return [
    "Tournament Info",
    "Registration",
    "Venue",
    "Tournament Description",
    "Notes",
    "Payment Options"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1: Select campaign settings...";
    case 1:
      return "Step 2: What is an ad group anyways?";
    case 2:
      return "Step 3: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

const names = [
  "Mens Singles",
  "Mens Doubles",
  "Womens Singles",
  "Womens Doubles",
  "Mixed Doubles"
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium
  };
}

class HorizontalNonLinearAlternativeLabelStepper extends React.Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
    inputs: ["input-0"],
    date: new Date(),
    tournamentName: "",
    organizerName: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    tstartDate: new Date(),
    tEnddate: new Date(),
    regStart: new Date(),
    regEnd: new Date(),
    memeber: "",
    guest: "",
    slotsAvailableMS: "",
    waitingSlotsMS: "",
    BracketTypeMS: "",
    EntryFeeMS: "",
    slotsAvailableMD: "",
    waitingSlotsMD: "",
    BracketTypeMD: "",
    EntryFeeMD: "",
    slotsAvailableWS: "",
    waitingSlotsWS: "",
    BracketTypeWS: "",
    EntryFeeWS: "",
    slotsAvailableWD: "",
    waitingSlotsWD: "",
    BracketTypeWD: "",
    EntryFeeWD: "",
    slotsAvailableMXD: "",
    waitingSlotsMXD: "",
    BracketTypeMXD: "",
    EntryFeeMXD: "",
    venueImage: "",
    veneueDescription: "",
    tournamentHistory: "",
    breifIntro: "",
    tournamentDescription: "",
    tournamentRules: "",
    refundPolicy: "",
    hotelDiscounts: "",
    notes: [],
    name: "",
    time: '10:00',
    shareholders: [{ name: "" }],
    customNote: []
  };

  totalSteps = () => getSteps().length;

  isStepOptional = step => step === 1;

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleNext = () => {
    let activeStep;
    console.log("111111111111111");
    console.log(this.state);
    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  handleComplete = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed
    });

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== this.totalSteps() - this.skippedSteps()) {
      this.handleNext();
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set()
    });
  };

  skippedSteps() {
    return this.state.skipped.size;
  }

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() - this.skippedSteps();
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput])
    }));
  }

  onChange1 = tstartDate => this.setState({ tstartDate });
  onChange2 = tEnddate => this.setState({ tEnddate });
  onChange3 = regStart => this.setState({ regStart });
  onChange4 = regEnd => this.setState({ regEnd });

  addNotes() {
    this.setState({ notes: [...this.state.notes, ""] });
  }

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  handleChangeMultiple = event => {
    console.log(".............");
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      division: value
    });

    console.log(this.state.division);
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {/* <GridContainer> */}
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={this.handleStep(index)}
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}

          {/* </GridContainer> */}
        </Stepper>

        <div>
          {this.allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div className={classes.instructions}>
                {/* <Typography className={classes.instructions}>{getStepContent(activeStep, this.props)}</Typography> */}
                <Typography>
                  {activeStep === 0 ? (
                    <div className={classes.formStyle}>
                      <form
                        className={classes.container}
                        noValidate
                        autoComplete="off"
                      >
                        <GridContainer>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                          //  className={classes.buttonsStyle}
                          >
                            <TextField
                              className={classes.formControl}
                              id="outlined-name"
                              label="Tournament Name"
                              className={classes.textField}
                              value={this.state.tournamentName}
                              fullWidth
                              onChange={ev =>
                                this.setState({ tournamentName: ev.target.value })
                              }
                              margin="normal"
                              variant="outlined"
                              type="text"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-name"
                              label="organizer Group Name"
                              className={classes.textField}
                              value={this.state.organizerName}
                              fullWidth
                              onChange={ev =>
                                this.setState({ organizerName: ev.target.value })
                              }
                              margin="normal"
                              variant="outlined"
                              type="text"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-name"
                              label="Street Address"
                              className={classes.textField}
                              value={this.state.streetAddress}
                              fullWidth
                              onChange={ev =>
                                this.setState({ streetAddress: ev.target.value })
                              }
                              margin="normal"
                              variant="outlined"
                              type="text"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-name"
                              label="City"
                              className={classes.textField}
                              value={this.state.city}
                              fullWidth
                              onChange={ev =>
                                this.setState({ city: ev.target.value })
                              }
                              margin="normal"
                              variant="outlined"
                              type="text"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-name"
                              label="State/Province/Region"
                              className={classes.textField}
                              value={this.state.province}
                              fullWidth
                              onChange={ev =>
                                this.setState({ province: ev.target.value })
                              }
                              margin="normal"
                              variant="outlined"
                              type="text"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-name"
                              label="Zip Code"
                              className={classes.textField}
                              value={this.state.zipCode}
                              fullWidth
                              onChange={ev =>
                                this.setState({ zipCode: ev.target.value })
                              }
                              margin="normal"
                              variant="outlined"
                              type="text"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <div className={classes.calStyle}>
                              <p>Start Date: </p>
                              <DatePicker
                                value={this.state.tstartDate}
                                onChange={this.onChange1}
                              />
                            </div>
                          </GridItem>

                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <div className={classes.calStyle}>
                              <p>End Date: </p>
                              <DatePicker
                                value={this.state.tEnddate}
                                onChange={this.onChange2}
                              />
                            </div>
                          </GridItem>
                        </GridContainer>
                      </form>
                    </div>
                  ) : null}
                  {activeStep === 1 ? (
                    <div className={classes.formStyle}>
                      <form
                        className={classes.container}
                        noValidate
                        autoComplete="off"
                      >
                        <GridContainer className={classes.GridStyle}>

                          <div className={classes.dateDivStyle}>
                            < div className={classes.dateRowStyle}>
                              <GridItem
                                md={4}
                                sm={4}
                                sx={4}
                                lg={4}
                                // className={classes.buttonsStyle}
                              >
                                <div className={classes.calStyle}>
                                  <p>Registration Date Start</p>
                                  <DatePicker
                                    value={this.state.regStart}
                                    onChange={this.onChange3}
                                  />
                                </div>
                              </GridItem>

                              <GridItem
                                md={4}
                                sm={4}
                                sx={4}
                                lg={4}
                                // className={classes.buttonsStyle}
                              >
                                <div className={classes.calStyle}>
                                  <p>Registration Time Start</p>
                                  <TimePicker
                                    onChange={this.onChange}
                                    value={this.state.time}
                                  />
                                </div>

                              </GridItem>

                              <GridItem
                                md={4}
                                sm={4}
                                sx={4}
                                lg={4}
                                // className={classes.buttonsStyle}
                              >
                                <div className={classes.calStyle}>
                                  <p>Select Time Zone</p>
                                  <TimezonePicker
                                    value="Asia/Yerevan"
                                    onChange={timezone => console.log('New Timezone Selected:', timezone)}
                                    inputProps={{
                                      placeholder: 'Select Timezone...',
                                      name: 'timezone'
                                    }}
                                    className ={ classes.zoneRoot}
                                  />
                                </div>

                              </GridItem>

                            </div>

                            < div className={classes.dateRowStyle}>
                              <GridItem
                                md={4}
                                sm={4}
                                sx={4}
                                lg={4}
                                // className={classes.buttonsStyle}
                              >
                                <div className={classes.calStyle}>
                                  <p>Registration Date Start</p>
                                  <DatePicker
                                    value={this.state.regStart}
                                    onChange={this.onChange3}
                                  />
                                </div>
                              </GridItem>

                              <GridItem
                                md={4}
                                sm={4}
                                sx={4}
                                lg={4}
                                // className={classes.buttonsStyle}
                              >
                                <div className={classes.calStyle}>
                                  <p>Registration Time Start</p>
                                  <TimePicker
                                    onChange={this.onChange}
                                    value={this.state.time}
                                  />
                                </div>

                              </GridItem>

                              <GridItem
                                md={4}
                                sm={4}
                                sx={4}
                                lg={4}
                                // className={classes.buttonsStyle}
                              >
                                <div className={classes.calStyle}>
                                  <p>Select Time Zone</p>
                                  <TimezonePicker
                                    value="Asia/Yerevan"
                                    onChange={timezone => console.log('New Timezone Selected:', timezone)}
                                    inputProps={{
                                      placeholder: 'Select Timezone...',
                                      name: 'timezone'
                                    }}
                                    className ={ classes.zoneRoot}
                                  />
                                </div>

                              </GridItem>

                            </div>
                          </div>
                          <br />
                          <br />
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            className={classes.marginTop}
                          >
                            <h5>Divisions</h5>
                          </GridItem>

                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <h4>Mens Singles</h4>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotsAvailableMS}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotsAvailableMS: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlotsMS}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlotsMS: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                            </InputLabel>
                                <Select
                                  native
                                  value={this.state.BracketTypeMS}
                                  onChange={ev =>
                                    this.setState({ BracketTypeMS: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.EntryFeeMS}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ EntryFeeMS: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                -
                               </Button>
                            </GridItem>
                          </div>
                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                             <h4>Mens Doubles</h4>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotsAvailableMD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotsAvailableMD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlotsMD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlotsMD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                            </InputLabel>
                                <Select
                                  native
                                  value={this.state.BracketTypeMD}
                                  onChange={ev =>
                                    this.setState({ BracketTypeMD: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.EntryFeeMD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ EntryFeeMD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                -
                               </Button>
                            </GridItem>
                          </div>

                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <h4>Womens Singles</h4>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotsAvailableWS}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotsAvailableWS: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlotsWS}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlotsWS: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl} margin="normal"
                                variant="outlined">
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                                </InputLabel>
                                <Select
                                  native
                                  value={this.state.BracketTypeWS}
                                  onChange={ev =>
                                    this.setState({ BracketTypeWS: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.EntryFeeWS}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ EntryFeeWS: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                -
                               </Button>
                            </GridItem>
                          </div> 
                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <h4>Womens Doubles</h4>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotsAvailableWD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotsAvailableWD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlotsWD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlotsWD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl} margin="normal"
                                variant="outlined">
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                                </InputLabel>
                                <Select
                                  native
                                  value={this.state.BracketTypeWD}
                                  onChange={ev =>
                                    this.setState({ BracketTypeWD: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.EntryFeeWD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ EntryFeeWD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                -
                               </Button>
                            </GridItem>
                          </div> 
                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <h4>Mixed Doubles</h4>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotsAvailableMXD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotsAvailableMXD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlotsMXD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlotsMXD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl} margin="normal"
                                variant="outlined">
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                                </InputLabel>
                                <Select
                                  native
                                  value={this.state.BracketTypeMXD}
                                  onChange={ev =>
                                    this.setState({ BracketTypeMXD: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.EntryFeeMXD}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ EntryFeeMXD: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                -
                               </Button>
                            </GridItem>
                          </div> 

                          {/* <div className={classes.regDetailsRow}>
                            <GridItem
                              md={3}
                              sm={3}
                              sx={3}
                              lg={3}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                            </InputLabel>
                                <Select
                                  native
                                  value={this.state.bracketType}
                                  onChange={ev =>
                                    this.setState({ bracketType: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Mens Singles</option>
                                  <option value={20}>Mens Doubles</option>
                                  <option value={30}>Womens Singles</option>
                                  <option value={40}>Womens Doubles</option>
                                  <option value={50}>Mixed Doubles</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotesAvailable}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotesAvailable: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlots}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlots: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                            </InputLabel>
                                <Select
                                  native
                                  value={this.state.bracketType}
                                  onChange={ev =>
                                    this.setState({ bracketType: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.entryFee}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ entryFee: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                +
                               </Button>
                            </GridItem>
                          </div>
                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={3}
                              sm={3}
                              sx={3}
                              lg={3}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Name of Division
                                </InputLabel>
                                <Select
                                  native
                                  value={this.state.bracketType}
                                  onChange={ev =>
                                    this.setState({ bracketType: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Mens Singles</option>
                                  <option value={20}>Mens Doubles</option>
                                  <option value={30}>Womens Singles</option>
                                  <option value={40}>Womens Doubles</option>
                                  <option value={50}>Mixed Doubles</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotesAvailable}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotesAvailable: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlots}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlots: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                            </InputLabel>
                                <Select
                                  native
                                  value={this.state.bracketType}
                                  onChange={ev =>
                                    this.setState({ bracketType: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.entryFee}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ entryFee: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                +
                               </Button>
                            </GridItem>
                          </div>

                          <div className={classes.regDetailsRow}>
                            <GridItem
                              md={3}
                              sm={3}
                              sx={3}
                              lg={3}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">
                                  Name of Division
                            </InputLabel>
                                <Select
                                  native
                                  value={this.state.bracketType}
                                  onChange={ev =>
                                    this.setState({ bracketType: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Mens Singles</option>
                                  <option value={20}>Mens Doubles</option>
                                  <option value={30}>Womens Singles</option>
                                  <option value={40}>Womens Doubles</option>
                                  <option value={50}>Mixed Doubles</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Slots Available"
                                className={classes.textField}
                                value={this.state.slotesAvailable}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ slotesAvailable: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Waiting Slots"
                                className={classes.textField}
                                value={this.state.waitingSlots}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ waitingSlots: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="number"
                              />
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <FormControl className={classes.formControl} margin="normal"
                                variant="outlined">
                                <InputLabel htmlFor="age-native-simple">
                                  Select Bracket Type
                                </InputLabel>
                                <Select
                                  native
                                  value={this.state.bracketType}
                                  onChange={ev =>
                                    this.setState({ bracketType: ev.target.value })
                                  }
                                  inputProps={{
                                    name: "bracketType",
                                    id: "age-native-simple"
                                  }}
                                >
                                  <option value="" />
                                  <option value={10}>Round Robin</option>
                                  <option value={20}>Knockout Winner</option>
                                  <option value={30}>Knockout Loser</option>
                                </Select>
                              </FormControl>
                            </GridItem>

                            <GridItem
                              md={2}
                              sm={2}
                              sx={2}
                              lg={2}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-name"
                                label="Entry Fee"
                                className={classes.textField}
                                value={this.state.entryFee}
                                fullWidth
                                InputProps={{ classes: { root: classes.inputRoot } }}
                                InputLabelProps={{
                                  FormLabelClasses: {
                                    root: classes.labelRoot
                                  }
                                }}
                                onChange={ev =>
                                  this.setState({ entryFee: ev.target.value })
                                }
                                margin="normal"
                                variant="outlined"
                                type="text"
                              />
                            </GridItem>

                            <GridItem
                              md={1}
                              sm={1}
                              sx={1}
                              lg={1}
                              // className={classes.buttonsStyle}
                            >

                              <Button
                                variant="contained"
                                color="primary"
                                // onClick={this.handleNext}
                                className={classes.button}
                              >
                                +
                               </Button>
                            </GridItem>
                          </div> */}
                          {/* <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <TextField
                            id="outlined-name"
                            label="Entry Fee"
                            className={classes.textField}
                            value={this.state.entryFee}
                            fullWidth
                            onChange={ev =>
                              this.setState({ entryFee: ev.target.value })
                            }
                            margin="normal"
                            variant="outlined"
                            type="text"
                          />
                        </GridItem>
                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <TextField
                            id="outlined-name"
                            label="Member"
                            className={classes.textField}
                            value={this.state.memeber}
                            fullWidth
                            onChange={ev =>
                              this.setState({ memeber: ev.target.value })
                            }
                            margin="normal"
                            variant="outlined"
                            type="text"
                          />
                        </GridItem>
                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <TextField
                            id="outlined-name"
                            label="Guest"
                            className={classes.textField}
                            value={this.state.guest}
                            fullWidth
                            onChange={ev =>
                              this.setState({ guest: ev.target.value })
                            }
                            margin="normal"
                            variant="outlined"
                            type="text"
                          />
                        </GridItem>
                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <TextField
                            id="outlined-name"
                            label="Player Spots"
                            className={classes.textField}
                            value={this.state.playerSpots}
                            fullWidth
                            onChange={ev =>
                              this.setState({ playerSpots: ev.target.value })
                            }
                            margin="normal"
                            variant="outlined"
                            type="number"
                          />
                        </GridItem>
                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="select-multiple-native">
                              Divisions
                            </InputLabel>
                            <Select
                              multiple
                              native
                              value={this.state.division}
                              onChange={this.handleChangeMultiple}
                              inputProps={{
                                id: "select-multiple-native"
                              }}
                            >
                              {names.map(name => (
                                <option key={name} value={name}>
                                  {name}
                                </option>
                              ))}
                            </Select>
                          </FormControl>
                        </GridItem>

                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">
                              Select Bracket Type
                            </InputLabel>
                            <Select
                              native
                              value={this.state.bracketType}
                              onChange={ev =>
                                this.setState({ bracketType: ev.target.value })
                              }
                              inputProps={{
                                name: "bracketType",
                                id: "age-native-simple"
                              }}
                            >
                              <option value="" />
                              <option value={10}>Round Robin</option>
                              <option value={20}>Knockout Winner</option>
                              <option value={30}>Knockout Loser</option>
                            </Select>
                          </FormControl>
                        </GridItem>
                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <div className={classes.calStyle}>
                            <p>Registration Start: </p>
                            <DatePicker
                              value={this.state.regStart}
                              onChange={this.onChange3}
                            />
                          </div>
                        </GridItem>

                        <GridItem
                          md={12}
                          sm={12}
                          sx={12}
                          lg={12}
                          // className={classes.buttonsStyle}
                        >
                          <div className={classes.calStyle}>
                            <p>Registration End: </p>
                            <DatePicker
                              value={this.state.regEnd}
                              onChange={this.onChange4}
                            />
                          </div>
                        </GridItem> */}
                        </GridContainer>
                      </form>
                    </div>
                  ) : null}
                  {activeStep === 2 ? (
                    <div className={classes.formStyle}>
                      <form
                        className={classes.container}
                        noValidate
                        autoComplete="off"
                      >
                        <GridContainer className={classes.GridStyle}>
                          <div className={classes.venueStyle}>
                            <GridItem md={12} sm={12} sx={12} lg={12}>
                              <h4>Regular Image</h4>
                              <ImageUpload
                                addButtonProps={{ round: true, color: "primary" }}
                                changeButtonProps={{ round: true }}
                                removeButtonProps={{
                                  round: true,
                                  color: "danger"
                                }}
                                value={this.state.venueImage}
                                onChange={ev =>
                                  this.setState({ venueImage: ev.target.value })
                                }
                              />
                            </GridItem>
                            <GridItem md={12} sm={12} sx={12} lg={12}>
                              <TextField
                                id="outlined-multiline-static"
                                label="Venue Description"
                                multiline
                                rows="4"
                                //defaultValue="Default Value"
                                value={this.state.veneueDescription}
                                fullWidth
                                onChange={ev =>
                                  this.setState({
                                    veneueDescription: ev.target.value
                                  })
                                }
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                              />
                            </GridItem>
                          </div>
                        </GridContainer>
                      </form>
                    </div>
                  ) : null}
                  {activeStep === 3 ? (
                    <div className={classes.formStyle}>
                      <form
                        className={classes.container}
                        noValidate
                        autoComplete="off"
                      >
                        <GridContainer className={classes.GridStyle}>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-multiline-static"
                              label="Brief Intro"
                              multiline
                              rows="4"
                              //defaultValue="Default Value"
                              value={this.state.breifIntro}
                              fullWidth
                              onChange={ev =>
                                this.setState({
                                  breifIntro: ev.target.value
                                })
                              }
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-multiline-static"
                              label="Tournament History"
                              multiline
                              rows="4"
                              //defaultValue="Default Value"
                              value={this.state.tournamentHistory}
                              fullWidth
                              onChange={ev =>
                                this.setState({
                                  tournamentHistory: ev.target.value
                                })
                              }
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-multiline-static"
                              label="Tournament Description"
                              multiline
                              rows="4"
                              //defaultValue="Default Value"
                              value={this.state.tournamentDescription}
                              fullWidth
                              onChange={ev =>
                                this.setState({
                                  tournamentDescription: ev.target.value
                                })
                              }
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          </GridItem>
                        </GridContainer>
                      </form>
                    </div>
                  ) : null}
                  {activeStep === 4 ? (
                    <div className={classes.formStyle}>
                      <form
                        className={classes.container}
                        noValidate
                        autoComplete="off"
                      >
                        <GridContainer className={classes.GridStyle}>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-multiline-static"
                              label="Tournament Rules"
                              multiline
                              rows="4"
                              //defaultValue="Default Value"
                              value={this.state.tournamentRules}
                              fullWidth
                              onChange={ev =>
                                this.setState({
                                  tournamentRules: ev.target.value
                                })
                              }
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-multiline-static"
                              label="Refund Policy"
                              multiline
                              rows="4"
                              //defaultValue="Default Value"
                              value={this.state.refundPolicy}
                              fullWidth
                              onChange={ev =>
                                this.setState({ refundPolicy: ev.target.value })
                              }
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          </GridItem>
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <TextField
                              id="outlined-multiline-static"
                              label="Hotel Discounts"
                              multiline
                              rows="4"
                              //defaultValue="Default Value"
                              value={this.state.hotelDiscounts}
                              fullWidth
                              onChange={ev =>
                                this.setState({ hotelDiscounts: ev.target.value })
                              }
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                            />
                          </GridItem>

                          {this.state.shareholders.map((shareholder, idx) => (
                            <GridItem
                              md={12}
                              sm={12}
                              sx={12}
                              lg={12}
                              // className={classes.buttonsStyle}
                            >
                              <TextField
                                id="outlined-multiline-static"
                                label={`Custom Note #${idx + 1}`}
                                multiline
                                rows="4"
                                //defaultValue="Default Value"
                                value={this.state.customNote}
                                fullWidth
                                onChange={ev =>
                                  this.setState({ customNote: ev.target.value })
                                }
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                              />
                              <Button
                                variant="contained"
                                color="primary"
                                size="sm"
                                onClick={this.handleRemoveShareholder(idx)}
                                className={classes.button}
                              >
                                -
                            </Button>
                            </GridItem>
                          ))}
                          <GridItem
                            md={12}
                            sm={12}
                            sx={12}
                            lg={12}
                            // className={classes.buttonsStyle}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              size="md"
                              onClick={this.handleAddShareholder}
                              className={classes.button}
                            >
                              Add Notes
                          </Button>
                          </GridItem>
                        </GridContainer>
                      </form>
                    </div>
                  ) : null}
                </Typography>
                <div >
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                   {activeStep !== steps.length &&
                    (this.state.completed[this.state.activeStep] ? (
                      <Typography variant="caption" className={classes.completed}>
                        Step {activeStep + 1} already completed
                    </Typography>
                    ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleComplete}
                        >
                          {this.completedSteps() === this.totalSteps() - 1
                            ? "Finish"
                            : "Complete Step"}
                        </Button>
                      ))}
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

HorizontalNonLinearAlternativeLabelStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalNonLinearAlternativeLabelStepper);
