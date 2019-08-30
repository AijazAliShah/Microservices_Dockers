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
import CustomHeader from "components/CustomHeader/CustomHeader.jsx";


import tournamentStyle from "assets/jss/material-kit-pro-react/views/tournamentStyle.jsx";
import FiltersHorizontal from "./Sections/FiltersHorizontal.jsx";




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

  changeAgesOpen(){
    this.setState({ages: this.state.ages_all});
 
  }
  changeAgesJuniors(){

    this.setState({ages: this.state.ages_juniors});
 
  }
  changeAgesSeniors(){ 
 
    this.setState({ages: this.state.ages_seniors});
    
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
  }

  render() {
    const { classes } = this.props;
    console.log(fakeData.fakedata.tournaments);

    return (
      <div>
        {/* <Header
          brand={
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              width="140px"
              height="100px"
            />
          }
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        /> */}
        <CustomHeader />
        <Parallax
          image={require("assets/img/bg16.jpg")}
          className={classes.parallax}
        />

        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <Filters /> */}
          <FiltersHorizontal />
        </div>
        {/* <div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.headingDiv}>
              <h2 className={classes.heading}> Tournaments</h2>
              <div className={classes.section}>
                <div className={classes.container}>
                  <div id="navigation-pills">
                    <GridContainer>
                      <GridItem xs={12} sm={8} md={6} lg={6}>
                        <NavPills
                          color="rose"
                          tabs={[
                            {
                              tabButton: "Open",
                              
                              tabContent: <span onClick={this.changeAgesOpen}/>
                            },
                            {
                              tabButton: "Seniors",
                              
                              tabContent: <span onClick={this.changeAgesSeniors}/>
                            },
                            {
                              tabButton: "Juniors",
                              
                              tabContent: <span onClick={this.changeAgesJuniors}/>
                            },
                            {
                              tabButton: "Age/Skills",
                              
                              tabContent: <span onClick={this.changeAgesOpen}/>
                            }
                          ]}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.innerContainer}>
              <div className={classes.searchFlex}>
                <h3 className={classes.searchHeading}>
                  <b>Filters</b>
                </h3>
                <Hidden smDown implementation="css" className={classes.hidden}>
                  <div className={classes.collapse}>
                    <div className={classes.searchFlex}>
                      <div className={classes.DropDown}>
                        <MyDropDown name="Country" list={this.state.countries}/>
                        <MyDropDown name="Age" list={this.state.ages}/>
                        <MyDropDown name="Category" list={this.state.categories}/>
                      </div>
                    </div>
                  </div>
                </Hidden>
                <Hidden mdUp>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                  >
                    <Menu />
                  </IconButton>
                </Hidden>
              </div>

              <Hidden mdUp implementation="css">
                <Drawer
                  variant="temporary"
                  anchor={"right"}
                  open={this.state.mobileOpen}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  onClose={this.handleDrawerToggle}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.closeButtonDrawer}
                  >
                    <Close />
                  </IconButton>
                  <div className={classes.appResponsive}>
                    <div className={classes.searchFlex}>
                    <div className={classes.DropDown}>
                        <MyDropDown name="Country" list={this.state.countries}/>
                        <MyDropDown name="Age" list={this.state.ages}/>
                        <MyDropDown name="Category" list={this.state.categories}/>
                    </div>
                    </div>
                  </div>
                </Drawer>
              </Hidden>

              <div className={classes.rotateCards}>
                {fakeData.fakedata.tournaments.map(tournament => (
                  <div className={classes.rotateCard}>
                    <RotatingCards
                      image={tournament.image}
                      heading={tournament.name}
                      text={tournament.category}
                      introDetails={tournament.introDetails}
                      details={tournament.detail}
                    />
                  </div>
                )).slice(0,4)}
              </div>
            </div>
          </div>
        </div> */}

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

export default withStyles(tournamentStyle)(PresentationPage);
