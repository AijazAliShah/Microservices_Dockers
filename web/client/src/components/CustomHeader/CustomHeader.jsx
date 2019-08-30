import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Close from "@material-ui/icons/Close";
import Person from "@material-ui/icons/Person";
import Event from "@material-ui/icons/Event";
import Phone from "@material-ui/icons/Phone";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
// import DateFnsUtils from '@date-io/date-fns';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputIcon from "components/CustomInputIcon/CustomInputIcon.jsx";
import logo from "assets/img/logo/pickleball-newlogo.png";

import { Link } from "react-router-dom";
import axios from 'axios'

import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
import { bindActionCreators } from "redux";
import { loginAsync } from "store/actions";
import { logoutAsync } from "store/actions";
import { signupAsync } from "store/actions";
import { connect } from "react-redux";
import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

//for signin
function validate1(email, password) {
  //true means invalid, so our conditions got reversed
  let email_error = false;
  if (typeof email !== "undefined") {
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

function validate2(fName, lName, email, password, age) {
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
  if (password.length < 8) {
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class SectionNavbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open2: false,
      withEmail: false,
      forgotPassword: false,
      //signin
      user: {},
      userId: '',
      name: '',
      email: '',
      password: '',
      picture: '',

      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: "",
      isLoggedIn: false,

      //signup
      fName: "",
      lName: "",
      age: "",
      email: "",
      password: "",
      gender: "",
      country: "",
      phone: "",

      resetEmail: ""
    };
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    console.log("props, connected login", this.props);

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isLoggedIn: !!user })
      console.log("user", user)
    })
  }
  componentWillMount() {
    // loginAsync(this.state.email, this.state.password);
  }
  componentDidUpdate() {
    this.getGeoInfo();

  }

  handleSubmit1 = evt => {
    if (!this.canBeSubmitted1()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted1() {
    const errors1 = validate1(this.state.email, this.state.password);
    const isDisabled1 = Object.keys(errors1).some(x => errors1[x]);
    return !isDisabled1;
  }

  handleSubmit2 = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { fName, lName, email, password, age } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted2() {
    const errors2 = validate2(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.password,
      this.state.age
    );
    const isDisabled2 = Object.keys(errors2).some(x => errors2[x]);
    return !isDisabled2;
  }

  handleOpen1 = () => {
    this.setState({ open1: true });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };

  handleOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleChangeGender = event => {
    this.setState({ gender: event.target.value });
  };

  getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        this.setState({
            country: data.country_name,
            // countryCode: data.country_calling_code
        });
    }).catch((error) => {
        console.log(error);
    });
  };

  signupAction = () => {
    this.setState({open1: true, open2: false})
    this.props.signupAsync(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.password,
      this.state.age,
      this.state.phone,
      this.state.gender,
      this.state.country
    )
  }
  render() {
    const { classes } = this.props;
    const show = false;

    const errors1 = validate1(this.state.email, this.state.password);
    const isDisabled1 = Object.keys(errors1).some(x => errors1[x]);
    let emailSize1 = false;
    let passwordSize1 = false;
    if (this.state.email !== '') {
      emailSize1 = true;
    }
    if (this.state.password !== '') {
      passwordSize1 = true;
    }

    const styles = theme => ({
      button: {
        margin: theme.spacing.unit,
        zIndex: "4"
      },
      input: {
        display: "none"
      }
    });

    const errors2 = validate2(
      this.state.fName,
      this.state.lName,
      this.state.email,
      this.state.password,
      this.state.age
    );
    const isDisabled2 = Object.keys(errors2).some(x => errors2[x]);

    let emailSize2 = false;
    let passwordSize2 = false;
    let fNameSize = false;
    let lNameSize = false;
    let ageSize = false;

    if (this.state.fName !== '') {
      fNameSize = true;
    }
    if (this.state.lName !== '') {
      lNameSize = true;
    }
    if (this.state.email !== '') {
      emailSize2 = true;
    }
    if (this.state.password !== '') {
      passwordSize2 = true;
    }
    if (this.state.age !== '') {
      ageSize = true;
    }

    return (
      <div className={`${classes.section} cd-section`} id="navigation">
        <div id="navbar" className={classes.navbar}>
          <Header
            brand={logo}
            color="white"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="primary"
                    // dropdownHeader="Dropdown Header"
                    buttonText={
                      <img
                        src={profileImage}
                        className={classes.img}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      <Link to="/userprofile-page" style={{ color: '#000', alignItems: "center" }}>Profile</Link>,
                      <Link to="/organizermain-page" style={{ color: '#000', alignItems: "center" }}>Organizer</Link>,
                      <Link to="" style={{ color: '#000', alignItems: "center" }}>Referee</Link>,
                      <Link to="" style={{ color: '#000', alignItems: "center" }}>SignOut</Link>,
                    ]}
                  />
                </ListItem>

                <ListItem className={classes.listItem}>
                  <div>
                    <Button
                      link
                      // component={Link}
                      // to="/signin-page"
                      color={window.innerWidth < 960 ? "white" : "white"}
                      //target="_blank"
                      className={classes.navButton}
                      // round
                      size="md"
                      color="white"
                      onClick={this.handleOpen2}
                    >
                      Sign up
                  </Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.open2}
                      onClose={this.handleClose2}
                    >
                      <form className={classes.form} onSubmit={this.handleSubmit1}>

                        <div style={getModalStyle()} className={classes.paper}>
                          <Typography variant="subtitle1" id="simple-modal-description">
                            <div>
                              <Button color="transparent" size="sm" onClick={this.handleClose2}>
                                <Close />
                              </Button>
                            </div>
                            <div>
                              {
                                  this.state.isLoggedIn ? (
                                    <span>
                                      <div>logged in!</div>
                                      <button onClick={() => firebase.auth().signOut()}>SignOut</button>
                                      <h5>{firebase.auth().currentUser.displayName}</h5>
                                    </span>
                                  ) : (
                                      <StyledFirebaseAuth
                                        uiConfig={this.uiConfig}
                                        firebaseAuth={firebase.auth()}
                                        className={classes.socialStyle}
                                      />
                                    )
                              }
                              <div className={classes.hrStyle}>
                                <hr /><p>or</p><hr />
                              </div>
                              {
                                this.state.withEmail ? (
                                  <div>
                                    <CustomInput
                                      id="First Name"
                                      formControlProps={{
                                        // fullWidth: true
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
                                      error={errors2.fName_error && fNameSize}
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
                                      error={errors2.lName_error && lNameSize}
                                    />

                                    <CustomInput
                                      id="email"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        placeholder: "Email",
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
                                      error={errors2.email_error && emailSize2}
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
                                      error={errors2.password_error && passwordSize2}
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
                                              <Event className={classes.inputIconsColor} />
                                            </Icon>
                                          </InputAdornment>
                                        )
                                      }}
                                      value={this.state.age}
                                      error={errors2.age_error && ageSize}
                                    />

                                    <CustomInput
                                      id="phone"
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      inputProps={{
                                        placeholder: "phone",
                                        type: "phone",
                                        onChange: ev =>
                                          this.setState({ phone: ev.target.value }),
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <Phone className={classes.inputIconsColor} />
                                          </InputAdornment>
                                        )
                                      }}
                                      value={this.state.phone}
                                      // error={errors2.email_error && emailSize2}
                                    />
                                    
                                  <FormControl component="fieldset" className={classes.genderFormControl}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                      aria-label="Gender"
                                      name="gender1"
                                      className={classes.group}
                                      value={this.state.gender}
                                      onChange={this.handleChangeGender}
                                    >
                                   
                                      <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female" />
                                      <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male" />
                                  
                                    </RadioGroup>
                                  </FormControl>
                                    <div className={classes.textCenter}>
                                      <Button
                                        simple
                                        color="primary"
                                        size="lg"
                                        // component={Link}
                                        // to="/signup-page2"
                                        textColor="#8A2BE2"
                                        disabled={isDisabled2}
                                        onClick={this.signupAction}
                                      >
                                        Sign up
                                      </Button>
                                    </div>
                                    <div className={classes.textCenter}>
                                      <span><Typography>Already Have and Account?<Button
                                        simple
                                        color="primary"
                                        size="sm"
                                        // component={Link}
                                        // to="/signup-page2"
                                        textColor="#8A2BE2"
                                        onClick={this.signupAction}
                                      >
                                        Sign In
                                      </Button></Typography>
                                      </span>
                                     </div>
                                  </div>
                                ) : (
                                    <div className={classes.textCenter}>
                                      <Button
                                        
                                        // color={window.innerWidth < 960 ? "white" : "white"}
                                        //target="_blank"
                                        // className={classes.navButton}
                                        
                                        size="md"
                                        color="primary"
                                        onClick={() => this.setState({ withEmail: true })}
                                      >
                                        Sign up with Email
                                  </Button>
                                    </div>
                                  )
                              }
                            </div>
                          </Typography>
                        </div>
                      </form>
                    </Modal>
                  </div>
                </ListItem>

                <ListItem className={classes.listItem}>

                  <div>
                    <Button
                      link
                      // component={Link}
                      // to="/signin-page"
                      color={window.innerWidth < 960 ? "white" : "white"}
                      //target="_blank"
                      className={classes.navButton}
                      // round
                      size="md"
                      color="white"
                      onClick={this.handleOpen1}
                    >
                      Log in
                  </Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.open1}
                      onClose={this.handleClose1}
                    >
                      <form className={classes.form} onSubmit={this.handleSubmit1}>

                        <div style={getModalStyle()} className={classes.paper}>
                          <Typography variant="subtitle1" id="simple-modal-description">
                            <div>
                              <Button color="transparent" size="sm" onClick={this.handleClose1}>
                                <Close />
                              </Button>

                            </div>
                            {!this.state.forgotPassword ? 
                            (<div>
                              {this.state.isLoggedIn ? (
                                <span>
                                  <div>logged in!</div>
                                  <button onClick={() => firebase.auth().signOut()}>SignOut</button>
                                  <h5>{firebase.auth().currentUser.displayName}</h5>
                                </span>
                              ) : (
                                  <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                    className={classes.socialStyle}
                                  />
                                )}
                              <div className={classes.hrStyle}>
                                <hr /><p>or</p><hr />
                              </div>
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
                                error={errors1.email_error && emailSize1}
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
                                error={errors1.password_error && passwordSize1}
                              //icon={Eye}
                              />
                              <div className={classes.textCenter}>
                                <Button simple color="primary" size="lg" disabled={isDisabled1}
                                  component={Link}
                                  to="/presentation-page"
                                  onClick={
                                    () => (this.props.loginAsync(
                                      this.state.email,
                                      this.state.password
                                    ))
                                  }>
                                  Sign In
                              </Button>
                              </div>

                              <div className={classes.textCenter}>
                                <Button
                                  simple
                                  color="primary"
                                  size="md"
                                  onClick={() => this.setState({ forgotPassword: true })}
                                >
                                  Forgot Password??
                                </Button>

                                <Button
                                  simple
                                  color="primary"
                                  size="md"
                                  onClick={() => this.setState({ open1: false, open2: true })}
                                >
                                  Create account
                             </Button>
                              </div>

                            </div>) : (
                              <div>
                                <h5><b>Reset Password</b></h5>
                                <p>Enter the email address associated with your account, and we’ll email you a link to reset your password.</p>
                                <CustomInput
                                id="resetEmail"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  placeholder: "Reset Email",
                                  type: "email",
                                  onChange: ev => this.setState({ resetEmail: ev.target.value }),
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Email className={classes.inputIconsColor} />
                                    </InputAdornment>
                                  )
                                }}
                                value={this.state.resetEmail}
                                error={errors1.email_error && emailSize1}
                                //icon={Eye}
                              />
                              <div className={classes.resetStyle}>
                                <Button
                                  simple
                                  color="primary"
                                  size="lg"
                                  onClick={() => this.setState({ forgotPassword: false })}
                                >
                                 <KeyboardArrowLeft /> Back to Login
                                </Button>
                                <Button
                                  color="primary"
                                  size="md"
                                  onClick={() => this.setState({ forgotPassword: true })}
                                >
                                 Send Reset link
                                </Button>
                              </div>
                              </div>
                            )}
                          </Typography>
                        </div>
                      </form>
                    </Modal>
                  </div>

                </ListItem>

              </List>
            }
          />
          
        </div>
        
      </div>
    );
  }
}


const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({
    loginAsync,
    logoutAsync,
    signupAsync
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(navbarsStyle)(SectionNavbars));

