import {
    container,
    title,
    main,
    whiteColor,
    grayColor,
    mainRaised,
    hexToRgb,
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
    transition,
    boxShadow,
    drawerWidth,
    blackColor,
  } from "assets/jss/material-kit-pro-react.jsx";
  import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

  const tournamentStyle = theme => ({
    ...footerStyle,

    main: {
      ...main,
      margin: 10
      /*overflow: "hidden"*/
    },
    mainRaised,

    parallax: {
      height: "40vh",
      overflow: "hidden"
    },
    rotateCards: {
      flex: 6,
      display: "flex",
      flexDirection: "row",
      margin: 20,
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    rotateCard: {
      flex: 1,
      width: "100%"
     // width: "100%"
    },

    heading:{
      textAlign: "center",
      fontWeight: "bold"
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
    container: {
      ...container,
      zIndex: 1,
    },
    title: {
      ...title,
      color: whiteColor
    }, 
    card: {
      flex: "6",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      height: "100%",
      width:"100%",
      "@media (max-width: 700px)": {
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }
      },
   innerContainer: {
     display: "flex",
    // flexDirection: "row",

   },
   searchFlex:{
     flex: "1",
     display: "flex",
     flexDirection: "column",
     height: "100%",
     width:"100%",
     "@media (max-width: 800px)": {
      marginBottom: "30px"
    }
    },
   cardsFlex:{
    flex: "3"
  },
  dropDown: {
    width: "100%",
    height: "100%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  searchHeading:{
    textAlign: "center",
  },
  margin_10: {
      margin: 10
    },
    absolute: {
      position: "absolute",
      top: "auto"
    },
    fixed: {
      position: "fixed"
    },
    container: {
      ...container,
      minHeight: "50px",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "nowrap"
    },
    title: {
      "&,& a": {
        ...defaultFont,
        minWidth: "unset",
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        whiteSpace: "nowrap",
        color: "inherit",
        "&:hover,&:focus": {
          color: "inherit",
          background: "transparent"
        }
      }
    },
    appResponsive: {
      margin: "20px 10px",
      marginTop: "0px"
    },
    primary: {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.46)"
    },
    info: {
      backgroundColor: infoColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.46)"
    },
    success: {
      backgroundColor: successColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.46)"
    },
    warning: {
      backgroundColor: warningColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.46)"
    },
    danger: {
      backgroundColor: dangerColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.46)"
    },
    rose: {
      backgroundColor: roseColor[0],
      color: whiteColor,
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(roseColor[0]) +
        ", 0.46)"
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "25px",
      color: whiteColor
    },
    dark: {
      color: whiteColor,
      backgroundColor: grayColor[9] + " !important",
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(grayColor[9]) +
        ", 0.46)"
    },
    white: {
      border: "0",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: grayColor[15],
      backgroundColor: whiteColor + " !important",
      boxShadow:
        "0 4px 18px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 7px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.15)"
    },
    drawerPaper: {
      border: "none",
      bottom: "0",
      transitionProperty: "top, bottom, width",
      transitionDuration: ".2s, .2s, .35s",
      transitionTimingFunction: "linear, linear, ease",
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      ...transition
    },
    hidden: {
      width: "100%"
    },
    collapse: {
      [theme.breakpoints.up("md")]: {
        display: "flex !important",
        MsFlexPreferredSize: "auto",
        flexBasis: "auto"
      },
      WebkitBoxFlex: "1",
      MsFlexPositive: "1",
      flexGrow: "1",
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center"
    },
    closeButtonDrawer: {
      position: "absolute",
      right: "8px",
      top: "9px",
      zIndex: "1"
    }   
  });
  
  export default tournamentStyle;  