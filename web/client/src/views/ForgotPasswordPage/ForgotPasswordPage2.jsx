import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import MyButton from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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

import image from "assets/img/bg16.jpg";

class LoginPage extends React.Component {

    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

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
            {/* <Button color="primary" className={classes.button}>
                Sign Up
            </Button> */}
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
              <form className={classes.form}>
                <Card >
                    <CardHeader
                      color="primary"
                      signup
                      className={classes.cardHeader}
                    >
                    <h4 className={classes.cardTitle}>Reset Password</h4>
                    
                    </CardHeader>
                   
                    <CardBody signup>
                       <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Enter Your Old Password",
                          type: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}

                      />

                    <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Enter your New password",
                          type: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}

                      />

                    <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Verify Your New Password",
                          type: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}

                      />

                    </CardBody>

                    <div className={classes.textCenter}>

                        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                             Change Password
                        </Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title"></DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                          You have successffully changed your Password.
                                    </DialogContentText>
                                </DialogContent>

                                <DialogActions className={classes.textCenter}>
                                    <Button 
                                     color="primary"
                                     component={Link}
                                     to="/signin-page"
                                     textColor="#8A2BE2" >
                                        Done
                                    </Button>
                                                                  
                                 </DialogActions>
                        </Dialog>
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
