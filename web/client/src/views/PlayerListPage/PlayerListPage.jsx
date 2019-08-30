import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Favorite from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import { Divider } from "@material-ui/core";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Visibility from "@material-ui/icons/Visibility";
import GetApp from "@material-ui/icons/GetApp";
import Settings from "@material-ui/icons/Settings";
import Edit from "@material-ui/icons/Edit";
import Publish from "@material-ui/icons/Publish"; 

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomCard from "components/CustomCard/CustomCard.jsx";
import CustomHeader from "components/CustomHeader/CustomHeader.jsx";
import RotatingCards from "components/RotatingCard/RotatingCards.jsx";
import MyRotatingCards from "components/MyRotatingCard/MyRotatingCard.jsx";
import CustomInputIcon from "components/CustomInputIcon/CustomInputIcon.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { landingAsync } from "store/actions";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
//import "node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.jsx";
import SectionCards from "views/PresentationPage/Sections/SectionCards.jsx";
import SectionContent from "views/PresentationPage/Sections/SectionContent.jsx";
import SectionSections from "views/PresentationPage/Sections/SectionSections.jsx";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.jsx";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.jsx";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";
import MyTable from "./Sections/MyTable";
const fakeData = require("../../Data/FakeData");

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlayers: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  componentWillMount() {
    this.props.landingAsync();
  }

  render() {
    const { classes } = this.props;
    let dropState = false;

    return (
      <div>
        <CustomHeader />
        <div className={classes.playersStyle}>
          <h1>Players List</h1>
         
          {/* {this.state.showPlayer ? ( 
           <div> */}
           

              <MyTable />
              <br />
            
          
            {/* </div>
           ) : null}  */}
        </div>
        {/* <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.creative-tim.com">Creative Tim</a> for a
                better web.
              </div>
            </div>
          }
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.landingData.tournamentsEntities,
  players: state.landingData.playersEntities,
  loading: state.landingData.loading,
  error: state.landingData.error
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      landingAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(presentationStyle)(PresentationPage));
