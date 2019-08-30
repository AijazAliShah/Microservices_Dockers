import {
  container,
  coloredShadow,
  title,
  cardTitle,
  description,
  mlAuto,
  infoColor,
  whiteColor,
  roseColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

import imageStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import rotatingCards from "assets/jss/material-kit-pro-react/rotatingCards.jsx";

const styles = {
  container,
  coloredShadow,
  title,
  mlAuto,
  cardTitle,
  ...imageStyles,
  ...rotatingCards,
  sectionGray: {
    background: grayColor[8]
  },
  inputWidth: {
    width: "100%"
  },
  paper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    marginTop: "2%",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: "#fff",
    boxShadow: 8,
  },
  buttonSytle: {
    justifyContent: "flex-end",
  },
  card: {
    maxWidth: "100%",
    "@media (max-width: 425px)": {
      maxWidth: "100%"
    },
    "@media (max-width: 700px)": {
      maxWidth: "100%"
    },
    alignItems: "center"
  },
  divRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
  },
  flipCardStyle: {
    display: "flex",
    justifyContent: "space-around"
  },
  detailsCardDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsCardSubDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsCardDivElements: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20
  },
  elementStyle: {
    ...title,
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    margin: 10
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  buttonAlign: {
    // display: "flex",
    //justifyContents: "center"
    alignItems: "center"
  },
  customContainer: {
    maxWidth: "22%",
    "@media (max-width: 425px)": {
      maxWidth: "100%"
    },
    "@media (max-width: 700px)": {
      maxWidth: "100%"
    },
    alignItems: "center"
  },
  sectionWhite: {
    background: whiteColor
  },
  cardTitleAbsolute: {
    ...cardTitle,
    position: "absolute !important",
    bottom: "15px !important",
    left: "15px !important",
    color: whiteColor + " !important",
    fontSize: "1.125rem !important",
    textShadow: "0 2px 5px rgba(" + hexToRgb(grayColor[8]) + ", 0.5) !important"
  },
  cardTitleWhite: {
    "&, & a": {
      ...title,
      marginTop: ".625rem",
      marginBottom: "0",
      minHeight: "auto",
      color: whiteColor + " !important"
    }
  },
  cardCategory: {
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "8px"
    }
  },
  cardCategorySocial: {
    marginTop: "10px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategorySocialWhite: {
    marginTop: "10px",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "22px",
      position: "relative",
      marginTop: "-4px",
      top: "2px",
      marginRight: "5px"
    },
    "& svg": {
      position: "relative",
      top: "5px"
    }
  },
  cardCategoryWhite: {
    marginTop: "10px",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7)"
  },
  cardCategoryFullWhite: {
    marginTop: "10px",
    color: whiteColor
  },
  cardDescription: {
    ...description
  },
  cardDescriptionWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
  },
  author: {
    display: "inline-flex",
    "& a": {
      color: grayColor[8]
    }
  },
  authorWhite: {
    display: "inline-flex",
    "& a": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    }
  },
  avatar: {
    width: "30px",
    height: "30px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "5px"
  },
  statsWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
    display: "inline-flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  stats: {
    color: grayColor[8],
    display: "flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  iconWrapper: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[8],
    borderRadius: "50%",
    lineHeight: "174px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "55px",
      lineHeight: "55px"
    },
    "& svg": {
      width: "55px",
      height: "55px"
    }
  },
  iconWrapperColor: {
    borderColor: "rgba(" + hexToRgb(whiteColor) + ", 0.25)"
  },
  iconWhite: {
    color: whiteColor
  },
  iconRose: {
    color: roseColor[0]
  },
  iconInfo: {
    color: infoColor[0]
  },
  marginTop30: {
    marginTop: "30px"
  },
  textCenter: {
    textAlign: "center"
  },
  marginBottom20: {
    marginBottom: "20px"
  }
};

export default styles;
