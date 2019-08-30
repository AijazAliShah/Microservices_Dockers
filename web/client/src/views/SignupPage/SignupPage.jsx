import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import MyButton from "@material-ui/core/Button";

import { Link } from "react-router-dom";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
import Eye from "@material-ui/icons/Face";
import Person from "@material-ui/icons/Person";
import Date from "@material-ui/icons/Person";

//from react bootstrap
//import { FaDate } from "@fortawesome/free-solid-svg-icons";

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

import image from "assets/img/bg16.jpg";
import { bindActionCreators } from "redux";
import { signupAsync } from "store/actions";
import { connect } from "react-redux";

function validate(fName, lName, email, password, age) {
  //true means invalid, so our conditions got reversed
  let email_error = false;
  let fName_error = false;
  let lName_error = false;
  let age_error = false;
  let password_error = false;

  if (typeof email !== "undefined") {
    let lastAtPos = email.lastIndexOf("@");
    let lastDotPos = email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") == -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      email_error = true;
    }
  }
  if (typeof fName !== "undefined") {
    if (!fName.match(/^[a-zA-Z]+$/)) {
      fName_error = true;
    }
  }

  if (age < 0 || age > 100) {
    fName_error = true;
  }
  if (password.length < 8 ) {
    password_error = true;
  }

  if (typeof lName !== "undefined") {
    if (!lName.match(/^[a-zA-Z]+$/)) {
      lName_error = true;
    }
  }
  return {
    fName_error,
    lName_error,
    email_error,
    password_error,
    age_error
  };
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      fName: "",
      lName: "",
      age: "",
      email: "",
      password: ""
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  componentWillMount() {
    // this.props.signupAsync(
    //   this.state.fName,
    //   this.state.lName,
    //   this.state.email,
    //   this.state.password,
    //   this.state.age
    // );
  }

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { fName, lName, email, password, age } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.password,
      this.state.age
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  getAge(dateString) {
    var today = new Date();
    var myYear = Number(dateString.substr(0, 4));
    var year = today.getFullYear(0);
    var age = year - myYear;
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //     age--;
    // }
    return age;
  }

  
  render() {
    const errors = validate(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.password,
      this.state.age
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    let emailSize=false;
    let passwordSize=false;
    let fNameSize=false;
    let lNameSize=false;
    let ageSize=false;
    if(this.state.fName!==''){
      fNameSize=true;
    }
    if(this.state.lName!==''){
      lNameSize=true;
    }
    if(this.state.email!==''){
      emailSize=true;
    }
    if(this.state.password!==''){
      passwordSize=true;
    }
    if(this.state.age!==''){
      ageSize=true;
    }
    // console.log("state apni");
    // console.log(
    //   this.state.fName + " " + this.state.email + "" + this.state.age
    // );
    // console.log("returen");
    // console.log(this.props);
    const { classes } = this.props;
    const styles = theme => ({
      button: {
        margin: theme.spacing.unit,
        zIndex: "4"
      },
      input: {
        display: "none"
      }
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
            {/* <Button color="primary" className={classes.button}>
                Sign Up
            </Button> */}
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                  <Card>
                    <CardHeader
                      color="primary"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Sign Up</h4>
                    </CardHeader>

                    <CardBody signup>
                      <CustomInput
                        id="First Name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "First Name",
                          type: "text",
                          onChange: ev =>
                            this.setState({ fName: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        value={this.state.fName}
                        error = {errors.fName_error && fNameSize}
                      />

                      <CustomInput
                        id="Last Name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Last Name",
                          type: "text",
                          onChange: ev =>
                            this.setState({ lName: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        value={this.state.lName}
                        error = {errors.lName_error && lNameSize}
                      />

                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          onChange: ev =>
                            this.setState({ email: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        value={this.state.email}
                        error = {errors.email_error && emailSize}
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Password",
                          type: "password",
                          onChange: ev =>
                            this.setState({ password: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        value={this.state.password}
                        error = {errors.password_error && passwordSize}
                      />

                      <CustomInput
                        id="date"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "",
                          type: "date",
                          onChange: ev =>
                            this.setState({ age: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon position="start">
                                <Date className={classes.inputIconsColor} />
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        value={this.state.age}                        
                        error = {errors.age_error && ageSize}
                      />
                    </CardBody>

                    <div className={classes.textCenter}>
                      <Button
                        simple
                        color="primary"
                        size="lg"
                        component={Link}
                        to="/signup-page2"
                        textColor="#8A2BE2"
                        disabled={isDisabled}
                        onClick={
                          () => (this.props.signupAsync(
                            this.state.fName,
                            this.state.lName,
                            this.state.email,
                            this.state.password,
                            this.state.age
                          ))
                        }
                      >
                        Next
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
      signupAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(loginPageStyle)(LoginPage));
