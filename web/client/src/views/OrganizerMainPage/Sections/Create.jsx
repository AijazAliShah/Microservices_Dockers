import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        // justifyContent: "center",
        // alignItems: "center"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    stepperStyle: {
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 780px)": {

            flexDirection: "column",
        }
    },
    formStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "44%"
    },
    buttonsStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});



function getSteps() {
    return ['Tournament Info', 'Registration', 'Venue', 'Tournament description', "Notes", 'Payment options'];
}



class HorizontalNonLinearStepper extends React.Component {
    state = {
        activeStep: 0,
        completed: {},
        name: "",

    };

    totalSteps = () => getSteps().length;

    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleComplete = () => {
        const { completed } = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
            completed,
        });
        this.handleNext();
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: {},
        });
    };

    completedSteps() {
        return Object.keys(this.state.completed).length;
    }

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                

                    <Stepper nonLinear activeStep={activeStep} >
                    {/* <GridContainer> */}
                        {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepButton onClick={this.handleStep(index)} completed={this.state.completed[index]}>
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
                                <Typography >
                                    {
                                        activeStep === 0 ? (
                                            <div className={classes.formStyle}>
                                                <form className={classes.container} noValidate autoComplete="off">
                                                    <GridContainer >
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Tournament Name"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="organizer Group Name"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Address"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="date"
                                                                label="Start date"
                                                                type="date"
                                                                defaultValue="2017-05-24"
                                                                className={classes.textField}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                        </GridItem>
                                                        <br />
                                                        <br />
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="date"
                                                                label="End Date"
                                                                type="date"
                                                                defaultValue="2017-05-24"
                                                                className={classes.textField}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                        </GridItem>
                                                    </GridContainer>
                                                </form>

                                            </div>) : null
                                    }
                                    {activeStep === 1 ? (
                                        <div className={classes.formStyle}>
                                            <form className={classes.container} noValidate autoComplete="off">
                                                <GridContainer >
                                                    <GridItem md={12} sm={12} sx={12} lg={12}>
                                                                <TextField
                                                                    id="date"
                                                                    label="Registration Start"
                                                                    type="date"
                                                                    defaultValue="2017-05-24"
                                                                    className={classes.textField}
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    margin="normal"
                                                                    variant="outlined"
                                                                />
                                                    </GridItem>  
                                                    <GridItem md={12} sm={12} sx={12} lg={12}>
                                                                <TextField
                                                                    id="date"
                                                                    label="Registration End"
                                                                    type="date"
                                                                    defaultValue="2017-05-24"
                                                                    className={classes.textField}
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    margin="normal"
                                                                    variant="outlined"
                                                                />
                                                    </GridItem>
                                                    <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Entry Fee"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Member"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Guest"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Player Spots"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="number"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Divisons"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                        <GridItem md={12} sm={12} sx={12} lg={12}>
                                                            <TextField
                                                                id="outlined-name"
                                                                label="Bracket Type"
                                                                className={classes.textField}
                                                                value={this.state.name}
                                                                onChange={this.handleChange('name')}
                                                                margin="normal"
                                                                variant="outlined"
                                                                type="text"
                                                            />
                                                        </GridItem>
                                                </GridContainer>
                                            </form>

                                        </div>) : null
                                    }
                                </Typography>
                                <div className={classes.buttonsStyle}>
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
                                                <Button variant="contained" color="primary" onClick={this.handleComplete}>
                                                    {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
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

HorizontalNonLinearStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalNonLinearStepper);