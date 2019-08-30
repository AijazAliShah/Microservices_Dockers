import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomCard from "components/CustomCard/CustomCard.jsx";
import Tabs from "components/NavPills/NavPills.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import CustomDropDown from "components/CustomDropdown/CustomDropdown.jsx";
import RotatingCards from "../../components/RotatingCard/RotatingCards.jsx";
import CustomInputIcon from "components/CustomInputIcon/CustomInputIcon.jsx";

import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.jsx";

import Favorite from "@material-ui/icons/Favorite";

import { Link } from "react-router-dom";

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
import SectionPills from "./Sections/SectionPills.jsx";
import DropDown from "./Sections/DropDowns.jsx";
import MyDropDown from "./Sections/MyDropDown.jsx";
import Filters from "./Sections/Filters.jsx";
import FiltersHorizontal from "./Sections/FiltersHorizontal.jsx";
import CustomHeader from "components/CustomHeader/CustomHeader.jsx";

import tournamentStyle from "assets/jss/material-kit-pro-react/views/tournamentStyle.jsx";

import { bindActionCreators } from "redux";
import { tournamentsAsync } from "store/actions";
import { connect } from "react-redux";
const fakeData = require("../../Data/FakeData");

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      mytournaments: []
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
    this.changeAgesOpen = this.changeAgesOpen.bind(this);
    this.changeAgesSeniors = this.changeAgesSeniors.bind(this);
    this.changeAgesJuniors = this.changeAgesJuniors.bind(this);
  }

  changeAgesOpen() {
    this.setState({ ages: this.state.ages_all });
  }
  changeAgesJuniors() {
    this.setState({ ages: this.state.ages_juniors });
  }
  changeAgesSeniors() {
    this.setState({ ages: this.state.ages_seniors });
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
   // console.log("props, connected login", this.props);
  }

  render() {
    const { classes } = this.props;
   // console.log(fakeData.fakedata.tournaments);

    return (
      <div>
      
        <CustomHeader />
        <Parallax
          image={require("assets/img/bg16.jpg")}
          className={classes.parallax}
        />
 
        <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <CustomInputIcon
              labelText="Search Tournament and Player by name and location"
              rightIcon={SearchIcon}
              onRightClick={() => {}}
              onClick={this.dropState=true}
        /> */}
          {/* <Filters /> */}
          <FiltersHorizontal />
        </div>

        <div />
        <Footer
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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments.entities,

});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      tournamentsAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(tournamentStyle)(PresentationPage));
