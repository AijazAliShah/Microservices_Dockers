/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTable from "components/CustomTable/CustomTable.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile3Square from "assets/img/faces/card-profile2-square.jpg";
import ronaldo from "assets/img/faces/ronaldo.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";
import DetailsCard from "./Sections/Card";
import MyTable from "./Sections/MyTable";
import RotatingCards from "../../components/RotatingCard/RotatingCards";
import { Link } from "react-router-dom";

const fakeData = require("../../Data/FakeData");

class ProfilePage extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        player: fakeData.userData,
        myTournaments: fakeData.userData.myTournaments
      });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        {/* <Header
          color="transparent"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        /> */}
        <Parallax
          image={require("assets/img/bg16.jpg")}
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.profile}>
              <div>
                <img src={christian} alt="..." className={imageClasses} />
                {/* <ImageUpload
                  avatar
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                /> */}
              </div>
              <div className={classes.name}>
                <h2 className={classes.title}>{this.state.player.name}</h2>
              </div>

              <DetailsCard />
            </div>

            <div className={classes.profileDiv}>
              <div className={classes.tableDiv}>
                <MyTable />
              </div> 
              <br/>
              <h3>My Upcoming Tournaments</h3>
              <br/>
              <div className={classes.cardDiv}>
                <GridContainer>
                  {this.state.myTournaments
                    .map(tournament => (
                      <GridItem md={3} sm={3}>
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
                    .slice(0, 4)}
                </GridContainer>
              </div>
            </div>
            <br />
            <br />
          </div>
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

export default withStyles(profilePageStyle)(ProfilePage);
