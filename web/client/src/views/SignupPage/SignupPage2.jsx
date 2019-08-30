import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import MyButton from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Link } from "react-router-dom";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
import Eye from "@material-ui/icons/Face";

// core components
import Header from "components/Header/Header.jsx"; 
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import { bindActionCreators } from "redux";
// import { signup2Async } from "store/actions";
import { connect } from "react-redux";

import image from "assets/img/bg16.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      gender: "male",
      country: "",
      phone: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const styles = theme => ({
      button: {
        margin: theme.spacing.unit,
        zIndex: "4"
      },
      input: {
        display: 'none',
      },
    });
    return (
      <div className={classes.whole}>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >


          <div className={classes.container}>
           
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
              <form className={classes.form}>
                <Card >
                    <CardHeader
                      color="primary"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Sign Up</h4>
                    
                    </CardHeader>
                   
                    <CardBody signup>
                      <div className={classes.toggleButton}>
                        <h6><b>Select Gender:</b></h6>
                        <h6>Male</h6>
                        <Switch 
                          defaultChecked 
                         // checked={this.state.checkedB}
                         onChange ={ ev =>
                          this.setState({ gender: "female" })}
                          //onChange={}
                          value="checkedF" 
                          color="default" />

                        <h6>Female</h6>
                      </div>

            <div className={classes.toggleButton}>  
                <h6><b>Select Country:</b></h6> 
                <FormControl >
                    <Select
                      value={this.state.country}
                      onChange ={ ev =>
                      this.setState({ country: ev.target.value })}
                      name="Country"
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                <MenuItem value="" disabled>
                  Country
                </MenuItem>
                <MenuItem value={10}>Pakistan</MenuItem>
                <MenuItem value={20}>USA</MenuItem>
                <MenuItem value={30}>Singapore</MenuItem>
              </Select>
              <FormHelperText>Placeholder</FormHelperText>
            </FormControl>
        </div>

                      <CustomInput
                        id="phone"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Phone",
                          type: "tel",
                          onChange: ev =>
                            this.setState({ phone: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        value={this.state.phone}

                      />

        <FormControlLabel
          control={
            <Checkbox
             // checked={this.state.checkedB}
             // onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="I agree all the statements in term of services"
        />
                    </CardBody>

                    <div className={classes.textCenter}>
                      
                      <Button simple color="primary" size="lg"  component={Link}
                        to="/signin-page">
                        Skip
                      </Button>

                      <Button simple color="primary" size="lg"  component={Link}
                        to="/signin-page"
                        // onClick={
                        //   () => (this.props.signup2Async(
                        //     this.state.gender,
                        //     this.state.country,
                        //     this.state.phone
                        //   ))
                        // }
                        >
                        Sign Up
                      </Button>

                    </div>
          
                    </Card>
                  </form>
              </GridItem>
            </GridContainer>
          </div>
         
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      // signup2Async
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(loginPageStyle)(LoginPage));
