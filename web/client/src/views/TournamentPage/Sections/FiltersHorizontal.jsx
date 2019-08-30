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
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

import RotatingCards from "../../../components/RotatingCard/RotatingCards.jsx";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
import { bindActionCreators } from "redux";
import { tournamentsAsync } from "store/actions";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const fakeData = require("../../../Data/FakeData");

class SectionProducts extends React.Component {
  constructor(props) {
    super(props);
    this.applyFilters = {
      countries: (data, found) => found.name.toLowerCase() === data.location.toLowerCase(),
      ages: (data, found) => found.name.toLowerCase() === data.ageLimit.toLowerCase(),
      categories: (data, found) => found.name.toLowerCase() === data.category.toLowerCase(),
      types: (data, found) => found.name.toLowerCase() === data.type.toLowerCase()
    };
    this.state = {
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
      cChecked: [],
      aChecked: [],
      catChecked: [],
      tChecked: [],
      priceRange: [1, 5],
      index: 0,
      cCheck: [],
      cbtntext: "Country"
    };
  }
  componentDidMount() {
    this.setState({
      tournaments: this.props.tournaments
    })
  }
  componentWillMount() {
    this.props.tournamentsAsync();
    console.log("-------------------")
    console.log(this.props)
   
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
        console.log(this.state.filters, found, tournament);
        return !filter || applyFilter(tournament, found);
      };
    });
    return {
      
      lables,
      tournaments: filters.reduce(
        (tournaments, filter) => tournaments.filter(filter),
        [...that.props.tournaments]
      )
    };
  };

  render() {
    const { classes } = this.props;
    const { lables, tournaments } = this.getFilteredData();
    console.log("-------------------|||||")
    console.log(this.props)
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Tournaments</h2>

          <div className={classes.dropDownStyle}>
            <div className={classes.dropDownItems}>
              <CustomDropdown
                // dropdownHeader={"Dropdown header"}
                buttonText={lables.countries}
                buttonProps={{
                  round: true,
                  block: true,
                  color: "primary"
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
            </div>

            <div className={classes.dropDownItems}>
              <CustomDropdown
                // dropdownHeader="Dropdown header"
                buttonText={lables.categories}
                buttonProps={{
                  round: true,
                  block: true,
                  color: "primary"
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
            </div>

            <div className={classes.dropDownItems}>
              <CustomDropdown
                // dropdownHeader="Dropdown header"
                buttonText={lables.ages}
                buttonProps={{
                  round: true,
                  block: true,
                  color: "primary"
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
            </div>
            <div className={classes.dropDownItems}>
              <CustomDropdown
                // dropdownHeader="Dropdown header"
                buttonText={lables.types}
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
                    onClick={() => this.handleChangeGenerate("types", type.key)}
                    color="primary"
                    size="sm"
                  >
                    {type.name}
                  </Button>
                ))}
              />
            </div>
          </div>

          <br />

          <GridContainer alignContent="center">
            {this.props.loading ? (
              <div style={{ 
                width: "100%",
                display: "flex",
                justifyContent: "center" }}>
                <CircularProgress />
              </div>
            ) : this.props.tournaments.length > 0 ? (
              this.props.tournaments.map(tournament => (
                <GridItem md={4} sm={4}>
                  <Card plain product>
                    <CardHeader noShadow image>
                      <img src={tournament.image} alt=".." />
                    </CardHeader>
                    <CardBody plain>
                      <a href="#pablo">
                        <h3 className={classes.cardTitle}>{tournament.name}</h3>
                      </a>
                      <h5 className={classes.cardTitle}>
                        {tournament.category}
                      </h5>
                      <h5 className={classes.cardTitle}>
                        {tournament.location}
                      </h5>
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
                          pathname: "/tournamentdetails-page",
                          state: { cardid: tournament.id }
                        }}
                      >
                        Registration
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
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments.entities,
  loading: state.tournaments.loading,
  error: state.tournaments.error
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
)(withStyles(styles)(SectionProducts));
