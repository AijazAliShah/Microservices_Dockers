import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "components/CustomButtons/Button.jsx";
import DirectionsIcon from "@material-ui/icons/Directions";
import classNames from "classnames";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
     paddingRight: "30px",
    "&.small": {
      [theme.breakpoints.up("md")]: {
        width: 180
      }
    },
    justifyContent: "center",
    maxWidth: "calc(100% - 20px)",
    margin: 10,
    height: 40
  },
  input: {
    marginLeft: 8,
    flex: 1,
    borderRadius: "30%",
    textColor: "#000",
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  divStyle: {
    display: "flex",
    width: "100%"
  },
  buttonDivStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "2%",
    boxShadow: `1px 13px 52px ${"#c5c5c5c"}`,
    justifyContent: "space-around",
    "@media (max-width: 700px)": {
      width: "100%",
    }
  }
});





class CustomizedInputBase extends React.Component {

  constructor(props){
    super(props);
    this.state = {
       pop : false,
    }
  }

  render() {
    const {
      classes,
      labelText,
      small,
      rightIcon: RightIcon,
      onRightClick
    } = this.props;
    
    // function showPopUp() {
    //   this.setState({
    //     pop: true
    //   })
    // }
    console.log("oooooooooo")
    console.log(this.props)
    return (
      <div >
        <Paper
          className={classNames(classes.root, {
            small
          })}
          elevation={1}
        >
          <InputBase
            className={classes.input}
            type="button text"
            placeholder={labelText}
            // onClick={()=> (
            //   this.setState({pop: !this.state.pop})
            // )}
            {...(this.props.inputProps || {})}
            on={()=>(
              this.setState({pop: false})
            )}
          />

          {RightIcon && (
            <IconButton
              onClick={onRightClick}
              className={classes.iconButton}
              aria-label="Search"
            >
              <RightIcon />
            </IconButton>
          )}
        </Paper>
        {/* {this.state.pop ? (
          <div className={classes.buttonDivStyle}>
            <Button color="primary" size="md" component={Link} to="">
              All
          </Button>
            <Button color="primary" size="md" component={Link} to="">
              Tournaments
          </Button>
            <Button color="primary" size="md" component={Link} to="">
              Players
          </Button>
          </div>
        ) : null} */}
      </div>
    );
  }
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
