import {
  container,
  title,
  main,
  whiteColor,
  grayColor,
  cardTitle,
  section,
  mainRaised,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";
import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

const presentationStyle = {
  ...footerStyle,
  main: {
    ...main
    /*overflow: "hidden"*/
  },
  mainRaised,  
   
  parallax: {
    height: "90vh", 
    overflow: "hidden"
  },
  hideMobile: {
    "@media (max-width: 480px)": {
      display: "none"
    }
  },
  hideDesktop: {
    "@media not all and (max-width: 480px)": {
      display: "none"

    }
  },
  cardBorder: {
    borderRadius: 4,
    borderWidth: 5,
    borderColor: '#000',
  },
  pillsStyle: {
      display: "flex",
      alignItems: "center"
  },
  cardTitle: { 
    ...cardTitle,
    textAlign: "center",
    marginBottom: "0px !important"
  },
  buttonsStyle:{
    display: "flex",
    flexDirection: "column"
  },
  twoButtonsH:{
    display: "flex",
    flexDirection: "row"
  },
  twoButtonsV:{
    display: "flex",
    flexDirection: "column"
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  SearchBarStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "primary"
  },
  buttonDivStyle:{
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-around",
  },
  container: {
    ...container,
    zIndex: 1
  },
  title: {
    ...title,
    color: whiteColor
  },
  playersStyle:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  playersButtonStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
  },
  csvButtonStyle:{
    display: "flex",
    flexDirection: "column"
  },
  tabsStyle:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px"
  },
  brand: {
    color: whiteColor,
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    }
  },
  rotateCards: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between"
  
  },
  gridStyle:{
    display: "flex",
    flexWrap: "wrap"
  },
  rotateCard: {
    margin: 10
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "100%",
    width:"100%",
    "@media (max-width: 700px)": {
      width: "100%", 
      height: "100%",
      flexDirection: "column",
    }

  },
  bodyAlignment: {
    marginTop: 80, marginLeft: 50, marginRight: 50, 
    "@media (max-width: 700px)": {
      marginTop: 80, 
      marginLeft: 10, 
      marginRight: 0
  }
  },
  dropDownStyle: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 700px)": {
      flexDirection: "column",
    }
    //justifyContent: "space-between"
  },
  dropDownItems:{
    flex: 1,
    margin: "1%"
  },
  buttonDivStyle: {
    display: "flex",
    flexDirection: "row",
    width: "35%",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width: 800)": {
      width: "100%",
    }
  },
  heading:{
    textAlign: "center",
    fontWeight: "bold",
    color: "github"
  },
  headingDiv:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2%"
  },
  linkStyle: {
    textDecoration: "underline",
  
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)"
  },
  margin_10: {
    margin: 10
  }
};

export default presentationStyle;
