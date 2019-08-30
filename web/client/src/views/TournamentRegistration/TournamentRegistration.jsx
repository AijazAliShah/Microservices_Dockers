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

function validate(fName, lName, email, uspaCode) {
  //true means invalid, so our conditions got reversed
  let email_error = false;
  let fName_error = false;
  let lName_error = false;
  let uspaCode_error = false;

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

  if (uspaCode.length < 5 ) {
    uspaCode_error = true;
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
    uspaCode_error
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
      uspaCode: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { fName, lName, email, uspaCode } = this.state;
    //alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.uspaCode
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {

    const errors = validate(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.uspaCode
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    let emailSize=false;
    let fNameSize=false;
    let lNameSize=false;
    let uspaCodeSize=false;
    if(this.state.fName!==''){
      fNameSize=true;
    }
    if(this.state.lName!==''){
      lNameSize=true;
    }
    if(this.state.email!==''){
      emailSize=true;
    }
    if(this.state.uspaCode!==''){
      uspaCodeSize=true;
    }
    
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
                      <h4 className={classes.cardTitle}>Tournament Registration</h4>
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
                        id="USPA Code"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "USPA Code",
                          type: "text",
                          onChange: ev =>
                            this.setState({ uspaCode: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        value={this.state.uspaCode}
                        error = {errors.uspaCode_error && uspaCodeSize}
                      />

                    </CardBody>
 
                    <div className={classes.textCenter}>
                      <Button
                        simple
                        color="primary"
                        size="lg"
                        component={Link}
                        to="/payment-page"
                        textColor="#8A2BE2"
                        disabled={isDisabled}
                      >
                        Payment
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

export default withStyles(loginPageStyle)(LoginPage);
