import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import map from "assets/img/map.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";

function SectionText({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          {props.tournament.detail ? (
            <div>
              <h3 className={classes.title}>Details</h3>
              <p>{props.tournament.detail}</p>
            </div>
          ) : null}
          {props.tournament.rules ? (
            <div>
              <h3 className={classes.title}>Rules</h3>
              <p>{props.tournament.rules}</p>
            </div>
          ) : null}
          {props.tournament.format ? (
            <div>
              <h3 className={classes.title}>Format</h3>
              <p>{props.tournament.format}</p>
            </div>
          ) : null}
          {props.tournament.eventDate ? (
            <div>
              <h3 className={classes.title}>Event Date</h3>
              <p>{props.tournament.eventDate}</p>
            </div>
          ) : null}
          {props.tournament.fee ? (
            <div>
              <h3 className={classes.title}>Fee</h3>
              <p>{props.tournament.fee}</p>
            </div>
          ) : null}
          {props.tournament.map ? (
            <div>
              <h3 className={classes.title}>Map</h3>
              <img src={map} width="100%" height="50%"/>
            </div>
          ) : null}
          <br/>
          <br/>
      
        </GridItem>
        
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
