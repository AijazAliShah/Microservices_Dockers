import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionText from "./Sections/SectionText.jsx";
import SectionBlogInfo from "./Sections/SectionBlogInfo.jsx";
import SectionComments from "./Sections/SectionComments.jsx";
import SectionSimilarStories from "./Sections/SectionSimilarStories.jsx";
import { Link } from "react-router-dom";
import CustomHeader from "components/CustomHeader/CustomHeader.jsx";


import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";
import { CLIENT_RENEG_LIMIT } from "tls";
import Registration from "./Sections/Registration.jsx";
import Venue from "./Sections/Venue.jsx";
import Score from "./Sections/Score.jsx";
import DirectionMap from "./Sections/DirectionMap.jsx";
const fakeData = require("../../Data/FakeData");

class BlogPostPage extends React.Component {

  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    const { classes } = this.props;
    const cid = this.props.location.state;
    console.log(JSON.stringify(cid));
    var txt = JSON.stringify(cid);
    var numb = txt.match(/\d/g);
    numb = numb.join("");
    console.log(numb);
    const tournament = fakeData.fakedata.tournaments[numb - 1];
    console.log(tournament);
    return (
      <div>

        <CustomHeader />
        <Parallax image={tournament.image}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <div className={classes.color}>
                  <h1>{tournament.name + " Tournament"}</h1>
                  <h3 className={classes.title}>{tournament.category}</h3>
                </div>
                <br />
               }
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


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

export default withStyles(blogPostPageStyle)(BlogPostPage);
