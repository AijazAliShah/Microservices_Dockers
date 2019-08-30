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

import RotatingCards from "../../../components/RotatingCard/RotatingCards.jsx";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";

const fakeData = require("../../../Data/FakeData");

class SectionProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [
        {name: "All", Key: 0},
        { name: "California", key: 1 },
        { name: "Carolinas", key: 2 },
        { name: "Florida", key: 3 },
        { name: "Mid-Atlantic", key: 4 },
        { name: "MidWest", key: 5 },
        { name: "New England", key: 6 },
        { name: "South", key: 7 },
        { name: "Texas", key: 8 },
        { name: "West", key: 9 },
        { name: "Canada", key: 10 },
        { name: "UK", key: 11 }
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
      ages_juniors: ["10-14", "15-19", "20-24"],
      ages_seniors: ["50-54", "55-59", "60-64", "65-69", "70-74", "75-79"],
      ages_all: [
        "10-14",
        "15-19",
        "20-24",
        "25-29",
        "30-34",
        "35-39",
        "40-44",
        "45-49",
        "50-54",
        "55-59",
        "60-64",
        "65-69",
        "70-74",
        "75-79"
      ],
      categories: [
        { cat: "Mixed Doubles", key: 0 },
        { cat: "Mixed Doubles", key: 1 },
        { cat: "Mens Singles", key: 2 },
        { cat: "Mens Doubles", key: 3 },
        { cat: "Womens Singles", key: 4 },
        { cat: "Womens Doubles", key: 5 }
      ],
      tournaments: fakeData.fakedata.tournaments,
      filteredTournaments: fakeData.fakedata.tournaments,
      finalTournaments: [],
      types: [
        { type: "All", key: 2 },
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
  componentDidMount() {
    // var slider = this.refs.slider1;
    // var priceLow = this.refs.priceLow;
    // var priceHigh = this.refs.priceHigh;
    // nouislider
    //   .create(slider, {
    //     start: this.state.priceRange,
    //     connect: true,
    //     range: { min: 30, max: 900 },
    //     step: 1
    //   })
    //   .on("update", function(values, handle) {
    //     let currencyLow = priceLow.dataset.currency;
    //     let currencyHigh = priceHigh.dataset.currency;
    //     priceLow.innerHTML = currencyLow + Math.round(values[0]);
    //     priceHigh.innerHTML = currencyHigh + Math.round(values[1]);
    //   });
  }

  handleToggleCountry(value) {
    if(value == 0){
      this.setState({
        filteredTournaments: this.state.tournaments
      })
    }
    const { cChecked } = this.state;
    const currentIndex = cChecked.indexOf(value);
    const newChecked = [...cChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      cChecked: newChecked
    });
    console.log(value);

    console.log(newChecked);

    newChecked.map(c => {
      var countr;
      this.state.countries.filter(function(count) {
        if (count.key === c) {
          countr = count.name;
        }
      });

      console.log(countr);

      this.state.filteredTournaments = this.state.tournaments.filter(function(
        tournament
      ) {
        return tournament.location == countr;
      });
    });
  }

  handleToggleAge(value) {
    if(value == 0){
      this.setState({
        filteredTournaments: this.state.tournaments
      })
    }
    const { aChecked } = this.state;
    const currentIndex = aChecked.indexOf(value);
    const newChecked = [...aChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      aChecked: newChecked
    });
    console.log(value);

    console.log(newChecked);

    newChecked.map(c => {
      var sAge;
      this.state.ages.filter(function(count) {
        if (count.key === c) {
          sAge = count.age;
        }
      });

      console.log(sAge);

      this.state.filteredTournaments = this.state.tournaments.filter(function(
        tournament
      ) {
        return tournament.ageLimit == sAge;
      });
    });
  }

  handleToggleCategory(value) {
    if(value == 0){
      this.setState({
        filteredTournaments: this.state.tournaments
      })
    }
    const { catChecked } = this.state;
    const currentIndex = catChecked.indexOf(value);
    const newChecked = [...catChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      catChecked: newChecked
    });
    console.log(value);

    console.log(newChecked);

    newChecked.map(c => {
      var cat;
      this.state.categories.filter(function(count) {
        if (count.key === c) {
          cat = count.cat;
        }
      });

      console.log(cat);

      this.state.filteredTournaments = this.state.tournaments.filter(function(
        tournament
      ) {
        return tournament.category == cat;
      });
    });
  }

  handleToggleType(value) {
    if(value == 0){
      this.setState({
        filteredTournaments: this.state.tournaments
      })
    }
    const { tChecked } = this.state;
    const currentIndex = tChecked.indexOf(value);
    const newChecked = [...tChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      tChecked: newChecked
    });
    console.log(value);

    console.log(newChecked);

    newChecked.map(c => {
      var cat;
      this.state.types.filter(function(count) {
        if (count.key === c) {
          cat = count.type;
        }
      });

      console.log(cat);

      this.state.filteredTournaments = this.state.tournaments.filter(function(
        tournament
      ) {
        return tournament.type == cat;
      });
    });
  }
  
  render() {
    const { classes } = this.props;
    // this.state.tournaments = fakeData.fakedata.tournaments;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Tournaments</h2>
          <GridContainer>
            <GridItem md={3} sm={3}>
              <Card plain>
                <CardBody className={classes.cardBodyRefine}>
                  {/* <h4 className={`${classes.cardTitle} ${classes.textLeft}`}>
                    Refine
                    <Tooltip
                      id="tooltip-top"
                      title="Reset Filter"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        link
                        justIcon
                        size="sm"
                        className={`${classes.pullRight} ${
                          classes.refineButton
                        }`}
                      >
                        <Cached />
                      </Button>
                    </Tooltip>
                    <Clearfix />
                  </h4> */}
                  <Accordion
                    //active={[0, 2]}
                    activeColor="github"
                     collapses={[
                      
                      {
                        title: "Location",
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {this.state.countries.map((country, index) => (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() =>
                                        this.handleToggleCountry(index)
                                      }
                                      checked={
                                        this.state.cChecked.indexOf(
                                          index
                                        ) !== -1
                                          ? true
                                          : false
                                      }
                                      checkedIcon={
                                        <Check
                                          className={classes.checkedIcon}
                                        />
                                      }
                                      icon={
                                        <Check
                                          className={classes.uncheckedIcon}
                                        />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={country.name}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      },
                      {
                        title: "Age",
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {this.state.ages.map((age,index) => (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() =>
                                        this.handleToggleAge(index)
                                      }
                                      checked={
                                        this.state.aChecked.indexOf(index) !==
                                        -1
                                          ? true
                                          : false
                                      }
                                      checkedIcon={
                                        <Check
                                          className={classes.checkedIcon}
                                        />
                                      }
                                      icon={
                                        <Check
                                          className={classes.uncheckedIcon}
                                        />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={age.age}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      },
                      {
                        title: "Category",
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {this.state.categories.map((category,index) => (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() =>
                                        this.handleToggleCategory(index)
                                      }
                                      checked={
                                        this.state.catChecked.indexOf(
                                          index
                                        ) !== -1
                                          ? true
                                          : false
                                      }
                                      checkedIcon={
                                        <Check
                                          className={classes.checkedIcon}
                                        />
                                      }
                                      icon={
                                        <Check
                                          className={classes.uncheckedIcon}
                                        />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={category.cat}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      },
                      {
                        title: "Type",
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {this.state.types.map((type,index) => (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() =>
                                        this.handleToggleType(index)
                                      }
                                      checked={
                                        this.state.tChecked.indexOf(
                                          index
                                        ) !== -1
                                          ? true
                                          : false
                                      }
                                      checkedIcon={
                                        <Check
                                          className={classes.checkedIcon}
                                        />
                                      }
                                      icon={
                                        <Check
                                          className={classes.uncheckedIcon}
                                        />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={type.type}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      }
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem md={9} sm={9}>
              <GridContainer>
                {this.state.filteredTournaments.map(tournament => (
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
                        <img src={tournament.image} alt=".." />
                      </CardHeader>
                      <CardBody plain>
                        <a href="#pablo">
                          <h3 className={classes.cardTitle}>
                            {tournament.name}
                          </h3>
                        </a>
                        <h5 className={classes.cardTitle}>
                          {tournament.category}
                        </h5>
                        <h5 className={classes.cardTitle}>
                          {tournament.location}
                        </h5>
                      </CardBody>
                      <CardFooter
                        plain
                        className={classes.justifyContentBetween}
                      >
                        <Button
                          round
                          color="github"
                          onClick={() =>
                            this.setState({
                              activeRotate2: ""
                            })
                          }
                          component={Link}
                          to={{
                            pathname: "/tournamentdetails-page",
                            state: { cardid: tournament.id }
                          }}
                        >
                          Registration
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionProducts);
