import { container, title } from "assets/jss/material-kit-pro-react.jsx";
import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

const navbarsStyle = theme => ({
  container,
  ...headerLinksStyle(theme),
  section: {
    padding: "-10px",
    // paddingBottom: "0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  socialStyle: {
    display: "flex",
    width: "100%",
  },
  btnStyle: {
    display: "flex",
    flexDirection: "row",

  },
  genderFormControl: {
    marginTop: "10px"
  },
  hrStyle: {
    display: "flex",
    flexDirection: "row"
  },
  resetStyle: {
    display : "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textCenter: {
    textAlign: "center",
    flex: 1,
    justifyContent: "space-around",
    width: "100%"
    // marginLeft: 30,
    // marginRight: 30
  },
  navbar: { 
    position: 'fixed', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0,
    // marginBottom: "-20px",
    zIndex: "100",
    // position: "relative",
   // overflow: "hidden",
    "& header": {
      borderRadius: "0",
      zIndex: "unset"
    }
  },
  navigation: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "7px",
    paddingBottom: "7px"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    borderRadius: "50%",
    marginLeft: "5px"
  }
});

export default navbarsStyle;
