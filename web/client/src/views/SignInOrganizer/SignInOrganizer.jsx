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
import { loginAsync } from "store/actions";
import { connect } from "react-redux";
import image from "assets/img/bg16.jpg";


function validate(email, password) {
  //true means invalid, so our conditions got reversed
  let email_error =false;
  if(typeof email !== "undefined"){
    let lastAtPos = email.lastIndexOf('@');
    let lastDotPos = email.lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
      email_error = true;
     }
  } 

  return {
    email_error,
    password_error: password.length < 8
  };
}


class LoginPage extends React.Component {

  constructor(props){
        super(props);
        this.state ={
            user: {},
            email: '',
            password: '',

            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: ""
        }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    console.log("props, connected login", this.props);
  }
  componentWillMount(){
   // loginAsync(this.state.email, this.state.password);
  }
  componentDidUpdate(){
  //  loginAsync(this.state.email, this.state.password);
  }

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {

    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    let emailSize=false;
    let passwordSize=false;
    if(this.state.email!==''){
      emailSize=true;
    }
    if(this.state.password!==''){
      passwordSize=true;
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
    console.log("user info");
    console.log(this.props.auth.user);
    console.log(this.state.email + " %% " + this.state.password)

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
                      <h4 className={classes.cardTitle}>Organizer Sign In</h4>
                    </CardHeader>

                    <CardBody signup>
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          onChange: ev => this.setState({ email: ev.target.value }),
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
                          onChange: ev => this.setState({ password: ev.target.value }),
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        value={this.state.password}
                        error = {errors.password_error && emailSize}
                        //icon={Eye}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color="primary" size="lg" disabled={isDisabled}
                       component={Link}
                       to="/presentation-page">
                        Sign In
                      </Button>
                    </div>

                    <div className={classes.textCenter}>
                      <Button
                        simple
                        color="primary"
                        size="lg"
                        component={Link}
                        to="/forgotpassword-page"
                      >
                        Forgot Password??
                      </Button>

                      <Button
                        simple
                        component={Link}
                        to="/signup-page"
                        color="primary"
                        size="lg"
                      >
                        Create account
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
  bindActionCreators({
    loginAsync
  },dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(LoginPage));
