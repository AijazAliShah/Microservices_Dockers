import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import MyButton from '@material-ui/core/Button';

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
                   
                      <h6>We will send you the reset link to your recovery Email to reset your password. </h6>
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />

                    </CardBody>

                    <div className={classes.textCenter}>
                      <Button 
                          simple color="primary" 
                          size="lg"  
                          component={Link}
                          to="/forgotpassword-page2"
                          textColor="#8A2BE2">
                        Send
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
