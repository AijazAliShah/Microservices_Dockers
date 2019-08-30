import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Favorite from "@material-ui/icons/Favorite";
import Create from "@material-ui/icons/Create";
import Drafts from "@material-ui/icons/Drafts";
import Publish from "@material-ui/icons/Publish";
import Schedule from "@material-ui/icons/Schedule";
import Visibility from "@material-ui/icons/Visibility";
import GetApp from "@material-ui/icons/GetApp";
import Settings from "@material-ui/icons/Settings";
import Edit from "@material-ui/icons/Edit"; 
import { Divider } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import SearchIcon from "@material-ui/icons/Search";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
import CustomCard from "components/CustomCard/CustomCard.jsx";
import CustomHeader from "components/CustomHeader/CustomHeader.jsx";
import RotatingCards from "components/RotatingCard/RotatingCards.jsx";
import MyRotatingCards from "components/MyRotatingCard/MyRotatingCard.jsx";
import CustomInputIcon from "components/CustomInputIcon/CustomInputIcon.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import CreateComponent from "./Sections/Create.jsx";
import CreateComponent1 from "./Sections/CreateComponent.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import CreateDesktop from "./Sections/CreateDesktop";
import CreateMobile from "./Sections/CreateMobile";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { landingAsync } from "store/actions";
import { organizerTournamentsAsync } from "store/actions";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

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
import NavPills from "components/NavPills/NavPills.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

const fakeData = require("../../Data/FakeData");

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);
    this.applyFilters = {
      countries: (data, found) => found.name === data.location,
      ages: (data, found) => found.name === data.ageLimit,
      categories: (data, found) => found.name === data.category,
      types: (data, found) => found.name === data.type
    };
    this.state = {
      t: true,
      active: 3,
      buttonColor: "white",
      searchValue: "",
      searchedTournament: this.props.tournaments
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  componentWillMount() {
    this.props.landingAsync();
    this.props.organizerTournamentsAsync();
  }

  search(searchValue) {
    let searchedTournament = this.props.tournaments.filter(function(tournament) {
      return ((tournament.name == searchValue) || (tournament.date == searchValue))
    });
    console.log(",,,,,,,,,,,,")
    console.log(searchedTournament)
  }
  
  render() {
    const { classes } = this.props;
    let dropState = false;
   
    return (
      <div>
        <CustomHeader />

        <div className={classes.bodyAlignment}>
          <h3 className={classes.tabsStyle}>Tournament Management</h3>
          <br />
          <br />
          <NavPills
            color="primary"
            alignCenter
            active={this.state.active}
            tabs={[
              {
                tabButton: "Create",
                tabIcon: Create,
                tabContent: (
                  <div>
                    <div className={classes.hideMobile}>
                      <CreateDesktop />
                    </div>
                    <div className={classes.hideDesktop}>
                      <CreateMobile />
                    </div>
                  </div>
                )
              },
              {
                tabButton: "Past",
                tabIcon: Schedule,
                tabContent: (
                  <div>
                    <div className={classes.section}>
                      <div className={classes.container}>

                        <div>
                          <CustomInputIcon
                          labelText="Search Tournament by Name and Date"
                          rightIcon={SearchIcon}
                          onRightClick={this.search}
                          onChange={this.search}
                          value={this.state.searchValue}
                          onChange={ this.search }
                        />
                        
                        </div>

                        <GridContainer>
                          {this.props.loading ? (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <CircularProgress />
                            </div>
                          ) : this.props.tournaments.length > 0 ? (
                            this.props.tournaments.map(tournament => (
                              <GridItem md={4} sm={6} className={classes.cardBorder}>
                                <Card testimonial>
                                  <CardHeader image>
                                    <img src={tournament.image} alt=".." />
                                  </CardHeader>
                                  <CardBody plain>
                                    <a href="#pablo">
                                      <h3 className={classes.cardTitle}>
                                        {tournament.name}
                                      </h3>
                                    </a>
                                    <h5 className={classes.cardTitle}>
                                      Date/Time , City
                                    </h5>
                                    <h5 className={classes.cardTitle}>
                                      Location
                                    </h5>
                                  </CardBody>
                                  <CardFooter
                                    plain
                                    className={classes.buttonsStyle}
                                  >
                                    <Button
                                      //round
                                      color={this.state.buttonColor}
                                      size="sm"
                                      variant="outlined"
                                      onClick={() =>
                                        this.setState({
                                          buttonColor: "primary"
                                        })
                                      }
                                      component={Link}
                                      to="/organizerviewtournament-page"
                                    >
                                      <Visibility />
                                      View
                                    </Button>
                                  </CardFooter>
                                </Card>
                              </GridItem>
                            ))
                          ) : (
                                <h3>No Tournament Found</h3>
                              )}
                        </GridContainer>
                      </div>
                    </div>

                  </div>
                )
              },
              {
                tabButton: "Drafts",
                tabIcon: Drafts,
                tabContent: (
                  <div>
                    <div className={classes.section}>
                      <div className={classes.container}>
                        <GridContainer>
                          {this.props.loading ? (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <CircularProgress />
                            </div>
                          ) : this.props.tournaments.length > 0 ? (
                            this.props.tournaments.map(tournament => (
                              <GridItem md={4} sm={6}>
                                <Card testimonial>
                                  <CardHeader  image>
                                    <img src={tournament.image} alt=".." />
                                  </CardHeader>
                                  <CardBody plain>
                                    <a href="#pablo">
                                      <h3 className={classes.cardTitle}>
                                        {tournament.name}
                                      </h3>
                                    </a>
                                    <h5 className={classes.cardTitle}>
                                      Date/Time , City
                                    </h5>
                                    <h5 className={classes.cardTitle}>
                                      Location
                                    </h5>
                                  </CardBody>
                                  <CardFooter
                                    plain
                                    className={classes.buttonsStyle}
                                  >
                                    <div className={classes.twoButtons}>
                                      <Button
                                        //round
                                        color={this.state.buttonColor}
                                        size="sm"
                                        variant="outlined"
                                        onClick={() =>
                                          this.setState({
                                            buttonColor: "primary"
                                          })
                                        }
                                        component={Link}
                                        to={{
                                          pathname: "",
                                          state: { cardid: tournament.id }
                                        }}
                                      >
                                        <Edit />
                                        Edit
                                      </Button>
                                      <Button
                                        //round
                                        color={this.state.buttonColor}
                                        size="sm"
                                        variant="outlined"
                                        onClick={() =>
                                          this.setState({
                                            buttonColor: "primary"
                                          })
                                        }
                                        component={Link}
                                        to={{
                                          pathname: "/organizerviewtournament-page/1",
                                          state: { cardid: tournament.id }
                                        }}
                                      >
                                        <Visibility />
                                        View
                                      </Button>
                                      <Button
                                        //round
                                        color={this.state.buttonColor}
                                        size="sm"
                                        variant="outlined"
                                        onClick={() =>
                                          this.setState({
                                            buttonColor: "primary"
                                          })
                                        }
                                        component={Link}
                                        to={{
                                          pathname: "",
                                          state: { cardid: tournament.id }
                                        }}
                                      >
                                        <Publish />
                                        Publish
                                      </Button>
                                    </div>
                                  </CardFooter>
                                </Card>
                              </GridItem>
                            ))
                          ) : (
                                <h3>No Tournament Found</h3>
                              )}
                        </GridContainer>
                      </div>
                    </div>

                  </div>
                )
              },
              {
                tabButton: "Publish",
                tabIcon: Publish,
                tabContent: (
                  <div>
                    {this.state.t ? (
                      <div className={classes.section}>
                        <div className={classes.container}>
                          <GridContainer>
                            {this.props.loading ? (
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                              >
                                <CircularProgress />
                              </div>
                            ) : this.props.tournaments.length > 0 ? (
                              this.props.tournaments.map(tournament => (
                                <GridItem md={4} sm={6}>
                                  <Card testimonial>
                                    <CardHeader  image>
                                      <img src={tournament.image} alt=".." />
                                    </CardHeader>
                                    <CardBody plain>
                                      <a href="#pablo">
                                        <h3 className={classes.cardTitle}>
                                          {tournament.name}
                                        </h3>
                                      </a>
                                      <h5 className={classes.cardTitle}>
                                        Date/Time , City
                                      </h5>
                                      <h5 className={classes.cardTitle}>
                                        Location
                                      </h5>
                                    </CardBody>
                                    <CardFooter
                                      plain
                                      className={classes.buttonsStyle}
                                    >
                                      <div className={classes.twoButtons}>
                                        <Button
                                          //round
                                          color={this.state.buttonColor}
                                          size="sm"
                                          variant="outlined"
                                          onClick={() =>
                                            this.setState({
                                              buttonColor: "primary"
                                            })
                                          }
                                          component={Link}
                                          to={{
                                            pathname: "/organizerviewtournament-page/1",
                                            state: { cardid: tournament.id }
                                          }}
                                        >
                                          <Visibility />
                                          View
                                        </Button>
                                        <Button
                                          //round
                                          color={this.state.buttonColor}
                                          size="sm"
                                          variant="outlined"
                                          onClick={() =>
                                            this.setState({
                                              buttonColor: "primary"
                                            })
                                          }
                                          component={Link}
                                          to={{
                                            pathname: "",
                                            state: { cardid: tournament.id }
                                          }}
                                        >
                                          <GetApp />
                                          Unpublish
                                        </Button>
                                      </div>
                                      <div>
                                        <CustomDropdown
                                          left
                                          caret={false}
                                          hoverColor="primary"
                                          // dropdownHeader="Dropdown Header"
                                          buttonText={
                                            <Button
                                              //round
                                              color={this.state.buttonColor}
                                              size="sm"
                                              variant="outlined"
                                              onClick={() =>
                                                this.setState({
                                                  buttonColor: "primary"
                                                })
                                              }
                                              component={Link}
                                              to={{
                                                pathname: "",
                                                state: { cardid: tournament.id }
                                              }}
                                            >
                                              <Settings />
                                              Manage Tournament
                                            </Button>
                                          }
                                          buttonProps={{
                                            className:
                                              classes.navLink +
                                              " " +
                                              classes.imageDropdownButton,
                                            color: "transparent"
                                          }}
                                          dropdownList={[
                                            <Link
                                              to="/playerlist-page"
                                              style={{
                                                color: "#000",
                                                alignItems: "center"
                                              }}
                                            >
                                              Player List
                                            </Link>,
                                            <Link
                                              to=""
                                              style={{
                                                color: "#000",
                                                alignItems: "center"
                                              }}
                                            >
                                              Refree List
                                            </Link>,
                                            <Link
                                              to="/tournamentbrackets-page"
                                              style={{
                                                color: "#000",
                                                alignItems: "center"
                                              }}
                                            >
                                              Bracket assignment
                                            </Link>,
                                            <Link
                                              to=""
                                              style={{
                                                color: "#000",
                                                alignItems: "center"
                                              }}
                                            >
                                              Email/ App Push Notification
                                            </Link>
                                          ]}
                                        />
                                      </div>
                                    </CardFooter>
                                  </Card>
                                </GridItem>
                              ))
                            ) : (
                                  <h3>No Tournament Found</h3>
                                )}
                          </GridContainer>
                        </div>
                      </div>
                    ) : (
                        <div className={classes.cardTitle}>
                          <Button
                            //round
                            color="primary"
                            size="lg"
                            onClick={() =>
                              this.setState({
                                active: 0
                              })
                            }
                            component={Link}
                            to={{
                              pathname: ""
                            }}
                          >
                            <Settings />
                            Create Tournament...
                        </Button>
                        </div>
                        // <Link
                        //   to=""
                        //   style={{
                        //     color: "#000",
                        //     alignItems: "center"
                        //   }}
                        // >
                        //   Create Tournament...
                        // </Link>
                      )}
                  </div>
                )
              }
            ]}
          />
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

// const mapStateToProps = state => ({
//   tournaments: state.organizerTournaments.tournamentsEntities,
// });
// const mapDispatchToProps = (dispatch, ownProps) =>
//   bindActionCreators(
//     {
//       organizerTournamentsAsync
//     },
//     dispatch
//   );

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(presentationStyle)(PresentationPage));


const mapStateToProps = state => ({
  tournaments: state.landingData.tournamentsEntities,
  players: state.landingData.playersEntities,
  loading: state.landingData.loading,
  error: state.landingData.error
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      landingAsync,
      organizerTournamentsAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(presentationStyle)(PresentationPage));
