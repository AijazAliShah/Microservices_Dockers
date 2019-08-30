import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
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
                      tabContent: <span />
                    },
                    {
                      tabButton: "Seniors",
                      tabContent: <span />
                    },
                    {
                      tabButton: "Juniors",
                      tabContent: <span />
                    },
                    {
                      tabButton: "Age/Skills",
                      tabContent: <span />
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
