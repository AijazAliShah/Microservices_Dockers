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
        {name: "Pakistan", key: 1},
        {name: "Singapore", key: 2},
        {name: "USA", key: "3"},
        {name: "England", key: "4"},
        {name: "Turkey", key: "5"},
        {name: "Japan", key: "6"},
        {name: "China", key: "7"},
       
      ],
      ages: [
        {age:"10-14", key: "8"},
        {age:"15-19", key: "9"},
        {age:"20-24", key: "10"},
        {age:"25-29", key: "11"},
        {age:"30-34", key: "12"},
        {age:"35-39", key: "13"},
        {age:"40-44", key: "14"},
        {age:"45-49", key: "15"},
        {age:"50-54", key: "16"},
        {age:"55-59", key: "17"},
        {age:"60-64", key: "18"},
        {age:"65-69", key: "19"},
        {age:"70-74", key: "20"},
        {age:"75-79", key: "21"}
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
        {cat:"Mixed Doubles", key:"22"},
        {cat:"Mens Singles", key:"23"},
        {cat:"Mens Doubles", key:"24"},
        {cat:"Womens Singles", key:"25"},
        {cat:"Womens Doubles", key:"26"}
      ],
      players : fakeData.fakedata.players,
      filteredPlayers: fakeData.fakedata.players,
      temptournaments: [],
      types: ["Open", "Seniors", "Juniors", "Skills/Age"],
      checked: [],
      priceRange: [101, 790],
      index: 0
    };
  }
  componentDidMount() {
    var slider = this.refs.slider1;
    var priceLow = this.refs.priceLow;
    var priceHigh = this.refs.priceHigh;
    nouislider
      .create(slider, {
        start: this.state.priceRange,
        connect: true,
        range: { min: 30, max: 900 },
        step: 1
      })
      .on("update", function(values, handle) {
        let currencyLow = priceLow.dataset.currency;
        let currencyHigh = priceHigh.dataset.currency;
        priceLow.innerHTML = currencyLow + Math.round(values[0]);
        priceHigh.innerHTML = currencyHigh + Math.round(values[1]);
      });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
    console.log(value);

    if(value>=1 && value<=7){
     

      var tour;
      this.state.countries.filter(function(count) {
       // console.log("hi"+ hero.value)
        if (count.key === value){
            tour=count.name
        }
      });

      console.log(tour)
     // var cName = tour.name;
      //console.log(tour.name)
       this.state.filteredPlayers =  this.state.players.filter(function(player) {
        //console.log("cname: "+cName+" tl: "+tournament.location) 
        return player.country == tour;
      });
      //console.log(this.state.temptournaments)
    //  this.state.filteredTournaments.length=0;
     //  this.state.filteredTournaments.push(this.state.temptournaments);
      //console.log("ft")
     // console.log(this.state.filteredTournaments)
    }
    if(value>=8 && value<=21){
     

      var sAge;
      this.state.ages.filter(function(ag) {
       // console.log("hi"+ hero.value)
        if (ag.key === value){
            sAge=ag.age
        }
      });

      console.log(sAge)
     // var cName = tour.name;
      //console.log(tour.name)
       this.state.filteredPlayers =  this.state.players.filter(function(player) {
        //console.log("cname: "+cName+" tl: "+tournament.location) 
        return player.ageLimit == sAge;
      });
      //console.log(this.state.temptournaments)
    //  this.state.filteredTournaments.length=0;
     //  this.state.filteredTournaments.push(this.state.temptournaments);
      //console.log("ft")
     // console.log(this.state.filteredTournaments)
    }

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
                  <h4 className={`${classes.cardTitle} ${classes.textLeft}`}>
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
                  </h4>
                  <Accordion
                    //active={[0, 2]}
                    activeColor="github"
                    collapses={[
                      {
                        title: "Skills",
                        content: (
                          <CardBody className={classes.cardBodyRefine}>
                            <span
                              ref="priceLow"
                              data-currency="€"
                              className={classNames(
                                classes.pullLeft,
                                classes.priceSlider
                              )}
                            >
                              1
                            </span>
                            <span
                              ref="priceHigh"
                              data-currency="€"
                              className={classNames(
                                classes.pullRight,
                                classes.priceSlider
                              )}
                            >
                              5
                            </span>
                            <br />
                            <br />
                            <div ref="slider1" className="slider-rose" />
                          </CardBody>
                        )
                      },
                      {
                        title: "Country",
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {this.state.countries.map((country) => (
                                
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() =>
                                        this.handleToggle(country.key)
                                      }
                                      checked={
                                        this.state.checked.indexOf(
                                          country.key
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
                     
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem md={9} sm={9}>
              <GridContainer>
                {this.state.filteredPlayers.map(player => (
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
                          <h3 className={classes.cardTitle}>
                            {player.name}
                          </h3>
                        </a>
                        <h5 className={classes.cardTitle}>
                          {player.age}
                        </h5>
                        <h5 className={classes.cardTitle}>
                          {player.country}
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
                            pathname: "/playerprofile-page",
                            state: { cardid: player.id }
                          }}
                        >
                          Player Profile
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
