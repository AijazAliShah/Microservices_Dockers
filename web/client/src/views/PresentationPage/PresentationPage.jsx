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
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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

import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { landingAsync } from "store/actions";
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
      open: false,
      topPlayers: [],
      featuredTournamentList: [],
      foo: null,
      filters: {
        countries: 0,
        ages: 0,
        categories: 0,
        types: 0
      },
      countries: [
        { name: "All", Key: 0 },
        { name: "Mid-South", key: 1 },
        { name: "Mountain", key: 2 },
        { name: "Atlantic", key: 3 },
        { name: "Great Lakes", key: 4 },
        { name: "Middle States", key: 5 },
        { name: "Atlantic South", key: 6 },
        { name: "Pacific Northwest", key: 7 },
        { name: "Great Plains", key: 8 },
        { name: "West", key: 9 },
        { name: "Mid-Atlantic", key: 10 }
      ],
      ages: [
        { name: "All", key: 0 },
        { name: "10-14", key: 1 },
        { name: "15-19", key: 2 },
        { name: "20-24", key: 3 },
        { name: "25-29", key: 4 },
        { name: "30-34", key: 5 },
        { name: "35-39", key: 6 },
        { name: "40-44", key: 7 },
        { name: "45-49", key: 8 },
        { name: "50-54", key: 9 },
        { name: "55-59", key: 10 },
        { name: "60-64", key: 11 },
        { name: "65-69", key: 12 },
        { name: "70-74", key: 13 },
        { name: "75-79", key: 15 }
      ],

      categories: [
        { name: "All", key: 0 },
        { name: "Mixed Doubles", key: 1 },
        { name: "Mens Singles", key: 2 },
        { name: "Mens Doubles", key: 3 },
        { name: "Womens Singles", key: 4 },
        { name: "Womens Doubles", key: 5 }
      ],
      tournaments: [],
      filteredTournaments: this.props.tournaments,
      finalTournaments: [],
      types: [
        { name: "All", key: 0 },
        { name: "Seniors", key: 1 },
        { name: "Juniors", key: 2 }
      ],

    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  componentWillMount() {
    this.props.landingAsync();

  }

  handleChangeGenerate = (key, value) => {
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        [key]: value
      }
    }));
  };
  getFilteredData = () => {
    let that = this;
    let lables = {};
    let filters = Object.keys(that.state.filters).map(k => {
      let filter = that.state.filters[k];
      let applyFilter = that.applyFilters[k];
      let found = that.state[k].find(c => c.key === that.state.filters[k]);
      lables[k] = (filter && found && found.name) || k;
      return tournament => {
        // debugger;
        console.log(this.state.filters);
        return !filter || applyFilter(tournament, found);
      };
    });
    return {

      lables,
      tournaments: filters.reduce(
        (tournaments, filter) => this.props.tournaments.filter(filter),
        [...that.props.tournaments]
      )
    };
  };

  signIn() {
    return (
      <h1>df</h1>)
  }
  handleOpen = () => {
    this.setState({ open: true });
};

handleClose = () => {
    this.setState({ open: false });
}; 
  render() {
    console.log("landing props: ////////////////////////////////////////////");
    console.log(this.props);
    const { lables, tournaments } = this.getFilteredData();
    const { classes } = this.props;
    let dropState = false;
    this.state.featuredTournamentList = this.props.tournaments
      .map(tournament => (
        //<div className={classes.rotateCard}>
        <GridItem md={4} sm={6} sx={12} lg={3}>
          <RotatingCards
            image={tournament.image}
            heading={tournament.name}
            text={tournament.category}
            introDetails={tournament.introDetails}
            details={tournament.detail}
            id={tournament.id}
            category={tournament.category}
            myTournament={tournament}
            buttonName="Tournament Details"
            buttonPath={"/tournamentdetails-page/" + tournament.id}
          />
        </GridItem>

        //</div>
      ))
      .slice(0, 4);

    this.state.topPlayers = this.props.players
      .slice()
      .sort((a, b) => (a.rating > b.rating ? -1 : 1));

    const topPlayersList = this.state.topPlayers
      .map(player => (
        //<div className={classes.rotateCard}>
        <GridItem md={4} sm={6} sx={12} lg={3}>
          <RotatingCards
            image={player.picture}
            heading={player.firstName}
            text={"rating: " + player.rating}
            introDetails={player.intro}
            details={player.intro}
            id={player.id}
            player={player}
            buttonName="Player Profile"
            buttonPath="/playerprofile-page"
          />
        </GridItem>
        // </div>
      ))
      .slice(0, 3);

    return (
      <div>
        <CustomHeader />
      
        {/* <Parallax
          image={require("assets/img/bg15.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>Welcome To Pickleball</h1>
                  <h3 className={classes.title}>The world of new experience</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax> */}
        <div className={classes.bodyAlignment}>
          <div className={classes.SearchBarStyle}>
            <CustomInputIcon
              labelText="Search Tournament and Player by name and location"
              rightIcon={SearchIcon}
              onRightClick={() => { }}
              onClick={this.dropState = true}
            />
          </div>

          {/* <div className={classes.buttonDivStyle}>
            &nbsp;
              <CustomDropdown
              // dropdownHeader={"Dropdown header"}
              buttonText={lables.countries}
              buttonProps={{
                block: true,
                color: "primary",
                size: "sm"
              }}
              dropPlacement="bottom"
              hoverColor="primary"
              dropdownList={this.state.countries.map((country, index) => (
                <Button
                  simple
                  onClick={() =>
                    this.handleChangeGenerate("countries", country.key)
                  }
                  color="primary"
                  size="sm"
                >
                  {country.name}
                </Button>
              ))}
            />


            <CustomDropdown
              // dropdownHeader="Dropdown header"
              buttonText={lables.categories}
              buttonProps={{
                block: true,
                color: "primary",
                size: "sm"
              }}
              hoverColor="primary"
              dropPlacement="bottom"
              dropdownList={this.state.categories.map((category, index) => (
                <Button
                  simple
                  onClick={() =>
                    this.handleChangeGenerate("categories", category.key)
                  }
                  color="primary"
                  size="sm"
                >
                  {category.name}
                </Button>
              ))}
            />


            <CustomDropdown
              // dropdownHeader="Dropdown header"
              buttonText={lables.ages}
              buttonProps={{
                block: true,
                color: "primary",
                size: "sm"
              }}
              hoverColor="primary"
              dropPlacement="bottom"
              dropdownList={this.state.ages.map((age, index) => (
                <Button
                  simple
                  onClick={() => this.handleChangeGenerate("ages", age.key)}
                  color="primary"
                  size="sm"
                >
                  {age.name}
                </Button>
              ))}
            />

            <CustomDropdown
              // dropdownHeader="Dropdown header"
              buttonText={lables.types}
              buttonProps={{
                block: true,
                color: "primary",
                size: "sm"
              }}
              drhoverColor="primary"
              opPlacement="bottom"
              dropdownList={this.state.types.map((type, index) => (
                <Button
                  simple
                  onClick={() => this.handleChangeGenerate("types", type.key)}
                  color="primary"
                  size="sm"
                >
                  {type.name}
                </Button>
              ))}
            />

          </div> */}

          <Divider />

          <div className={classes.headingDiv}>
            <h2 className={classes.heading}>Featured Tournaments</h2>
            <Link to="/tournament-page" style={{ color: 'blue', alignItems: "center" }}>See All</Link>
          </div>

          {/* <div className={classes.rotateCards}> */}
          <GridContainer style={{ padding: "10px" }}>
            {this.props.loading ? (
              <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}>
                <CircularProgress />
              </div>
            ) : (
                this.state.featuredTournamentList
              )}
            {/* <MyRotatingCards /> */}
          </GridContainer>

          {/* </div> */}

          <div className={classes.headingDiv}>
            <h2 className={classes.heading}>Top Players</h2>
            <Link to="/player-page" style={{ color: 'blue', alignItems: "center" }}>See All</Link>
          </div>

          <GridContainer style={{
            padding: "10px", "@media (max-width: 700px)": {
              width: "100%",
              height: "100%",
              flexDirection: "column",
            }
            }}>
            {this.props.loading ? (
              <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}>
                <CircularProgress />
              </div>
            ) : (
                topPlayersList
              )}
          </GridContainer>
          {/* <CustomDropdown
                      dropdownHeader="Dropdown header"
                      buttonText="Dropdown"
                      buttonProps={{
                        round: true,
                        block: true,
                        color: "info"
                      }}
                      dropPlacement="bottom"
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Sometjing else here",
                        { divider: true },
                        "Separeted link"
                      ]}
          /> */}
          <br />
        </div>
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
