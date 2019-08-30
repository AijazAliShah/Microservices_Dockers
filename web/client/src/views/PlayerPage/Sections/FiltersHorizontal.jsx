import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CircularProgress } from "@material-ui/core";

// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";

// core components
import Accordion from "components/Accordion/Accordion.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

import suit1 from "assets/img/examples/suit-1.jpg";
import suit2 from "assets/img/examples/suit-2.jpg";
import suit3 from "assets/img/examples/suit-3.jpg";
import suit4 from "assets/img/examples/suit-4.jpg";
import suit5 from "assets/img/examples/suit-5.jpg";
import suit6 from "assets/img/examples/suit-6.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color3 from "assets/img/examples/color3.jpg";
import color2 from "assets/img/examples/color2.jpg";
import dg3 from "assets/img/dg3.jpg";
import dg1 from "assets/img/dg1.jpg";
import { Link } from "react-router-dom";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import { bindActionCreators } from "redux";
import { playersAsync } from "store/actions";
import { connect } from "react-redux";

import RotatingCards from "../../../components/RotatingCard/RotatingCards.jsx";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";

const fakeData = require("../../../Data/FakeData");

class SectionProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        { name: "Mid-Atlantic", key: 10 },
      ],
      ages: [
        { age: "All", key: 0 },
        { age: "10-14", key: 1 },
        { age: "15-19", key: 2 },
        { age: "20-24", key: 3 },
        { age: "25-29", key: 4 },
        { age: "30-34", key: 5 },
        { age: "35-39", key: 6 },
        { age: "40-44", key: 7 },
        { age: "45-49", key: 8 },
        { age: "50-54", key: 9 },
        { age: "55-59", key: 10 },
        { age: "60-64", key: 11 },
        { age: "65-69", key: 12 },
        { age: "70-74", key: 13 },
        { age: "75-79", key: 15 }
      ],

      categories: [
        { cat: "All", key: 0 },
        { cat: "Mixed Doubles", key: 1 },
        { cat: "Mens Singles", key: 2 },
        { cat: "Mens Doubles", key: 3 },
        { cat: "Womens Singles", key: 4 },
        { cat: "Womens Doubles", key: 5 }
      ],
      players: fakeData.fakedata.players,
      filteredPlayers: fakeData.fakedata.players,
      finalplayers: [],
      types: [
        { type: "All", key: 0 },
        { type: "Seniors", key: 1 },
        { type: "Juniors", key: 2 }
      ],
      cChecked: [],
      aChecked: [],
      catChecked: [],
      tChecked: [],
      priceRange: [1, 5],
      index: 0,
      cCheck: []
    };
  }
  componentWillMount() {
    this.props.playersAsync();
  }


  handleToggleCountry(value) {
    console.log("yahan agya");
    if (value == 0) {
      this.setState({
        filteredPlayers: this.state.players
      });
    }

    console.log(value);

    var countr;
    this.state.countries.filter(function (count) {
      if (count.key === value) {
        countr = count.name;
      }
    });

    console.log(countr);
    console.log(this.state.filteredPlayers);
    this.state.filteredPlayers = this.state.players.filter(function (
      player
    ) {
      return player.country == countr;
    });
    this.forceUpdate();
  }

  handleToggleAge(value) {
    if (value == 0) {
      this.setState({
        filteredPlayers: this.state.players
      });
    }

    console.log(value);

    var countr;
    this.state.ages.filter(function (count) {
      if (count.key === value) {
        countr = count.age;
      }
    });

    console.log(countr);
    console.log(this.state.filteredPlayers);
    this.state.filteredPlayers = this.state.players.filter(function (
      tournament
    ) {
      return tournament.age == countr;
    });
    this.forceUpdate();
  }

  handleToggleCategory(value) {
    if (value == 0) {
      this.setState({
        filteredPlayers: this.state.players
      });
    }

    console.log(value);

    var countr;
    this.state.categories.filter(function (count) {
      if (count.key === value) {
        countr = count.cat;
      }
    });

    console.log(countr);
    console.log(this.state.filteredPlayers);
    this.state.filteredPlayers = this.state.players.filter(function (
      tournament
    ) {
      return tournament.category == countr;
    });
    this.forceUpdate();
  }

  handleToggleType(value) {
    if (value == 0) {
      this.setState({
        filteredPlayers: this.state.players
      });
    }

    console.log(value);

    var countr;
    this.state.types.filter(function (count) {
      if (count.key === value) {
        countr = count.type;
      }
    });

    console.log(countr);
    console.log(this.state.filteredPlayers);
    this.state.filteredPlayers = this.state.players.filter(function (
      tournament
    ) {
      return tournament.type == countr;
    });
    this.forceUpdate();
  }

  render() {
    const { classes } = this.props;
    // this.state.players = fakeData.fakedata.players;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>players</h2>
          {/* 
          <div className={classes.dropDownStyle}>
            <div className={classes.dropDownItems}>
              <CustomDropdown
                //dropdownHeader="Dropdown header"
                buttonText="Location"
                buttonProps={{
                  round: true,
                  block: true,
                  color: "primary"
                }}
                dropPlacement="bottom"
                hoverColor="primary"
                dropdownList={
                  this.state.countries.map((country, index) => (
                  <Button
                    simple
                    onClick={() => this.handleToggleCountry(country.key)}
                    color="primary"
                    size="sm"
                  >
                    {country.name}
                  </Button>
                ))
              }
              />
            </div>


            <div className={classes.dropDownItems}>
              <CustomDropdown
                // dropdownHeader="Dropdown header"
                buttonText="Type"
                buttonProps={{
                  round: true,
                  block: true,
                  color: "primary"
                }}
                drhoverColor="primary"
                opPlacement="bottom"
                dropdownList={this.state.types.map((type, index) => (
                  <Button
                    simple
                    onClick={() => this.handleToggleType(type.key)}
                    color="primary"
                    size="sm"
                  >
                    {type.type}
                  </Button>
                ))}
              /> 
            </div>
          </div> */}

          <br />

          <GridContainer>
            {
              this.props.loading ?
                (<div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <CircularProgress />
                </div>) :
                this.props.players.length > 0 ?
                  (this.props.players.map(player => (
                    <GridItem md={4} sm={4}>
                      {/* 
                    <RotatingCards
                          image={tournament.image}
                          heading={tournament.name}
                          text={tournament.category}
                          introDetails={tournament.introDetails}
                          details={tournament.detail}
                        />  */}
                      <Card plain product>
                        <CardHeader noShadow image>
                          <img src={player.picture} alt=".." />
                        </CardHeader>
                        <CardBody plain>
                          <a href="#pablo">
                            <h3 className={classes.cardTitle}>{player.name}</h3>
                          </a>
                          <h5 className={classes.cardTitle}>{player.clubName}</h5>
                          <h5 className={classes.cardTitle}>{player.country}</h5>
                        </CardBody>
                        <CardFooter plain className={classes.justifyContentBetween}>
                          <Button
                            round
                            color="primary"
                            onClick={() =>
                              this.setState({
                                activeRotate2: ""
                              })
                            }
                            component={Link}
                            to={{
                              pathname: "/playerprofile-page",
                              state: { cardid: player.id }
                            }}
                          >
                            Player Profile
                    </Button>
                        </CardFooter>
                      </Card>
                    </GridItem>
                  ))) :
                  (<h3>No Player Found</h3>)
            }
          </GridContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ players: state.players.entities, loading: state.players.loading, error: state.players.error });
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({
    playersAsync
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SectionProducts));

