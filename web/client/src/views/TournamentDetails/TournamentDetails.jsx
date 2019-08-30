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
//import {Bracket} from 'react-tournament-bracket';


import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";
import { CLIENT_RENEG_LIMIT } from "tls";
import TournamentInfo from "./Sections/TournamentInfo.jsx";
import TournamentRegistration from "./Sections/TournamentRegistration";
import Venue from "./Sections/Venue.jsx";
import Score from "./Sections/Score.jsx";
import DirectionMap from "./Sections/DirectionMap.jsx";
import TournamentDescription from "./Sections/TournamentDescription.jsx";
import TournamentNotes from "./Sections/TournamentNotes.jsx";
import { bindActionCreators } from "redux";
import { tournamentAsync } from "store/actions";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

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

  componentWillMount(){
    console.log("tournament data **********************")
    console.log(this.props)
    this.props.tournamentAsync(this.props.match.params.id);
    console.log("tournament data **********************///")
    console.log(this.props)
    
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
    console.log("t id yahan")
    console.log(this.props)
    const { classes } = this.props;
    // const cid = this.props.location.state;
    // console.log(JSON.stringify(cid));
    // var txt = JSON.stringify(cid);
    // var numb = txt.match(/\d/g);
    // numb = numb.join("");
    // console.log(numb);
    // const tournament = fakeData.fakedata.tournaments[numb - 1];
    // console.log(tournament);
    return (
      <div>

        <CustomHeader />
        <Parallax image={this.props.tournament.image}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <div className={classes.color}>
                  <h1>{this.props.tournament.name + " Tournament"}</h1>
                  <h3 className={classes.title}>{this.props.tournament.category}</h3>
                </div>
                <br />
                
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
 

        <div className={classes.main}>
        
          <div className={classes.containerDiv}>
          <h3>Tournament Details</h3>
            <GridContainer>
              <GridItem md={4} sm={6} sx={12} lg={4}>
                <TournamentInfo name={this.props.tournament.name} date={this.props.tournament.eventDate} category={this.props.tournament.category}/>
              </GridItem>

              
              <GridItem md={6} sm={6} sx={12} lg={4}>
                <TournamentRegistration date={this.props.tournament.eventDate} fee={this.props.tournament.fee} />
              </GridItem>
              <GridItem md={6} sm={6} sx={12} lg={4}>
                <TournamentDescription formate={this.props.tournament.formate} introDetails={this.props.tournamentintroDetails}/>
              </GridItem>
              <GridItem md={6} sm={6} sx={12} lg={4}>
                <Venue location={this.props.tournament.location}/>
              </GridItem>
              <GridItem md={6} sm={6} sx={12} lg={4}>
                <TournamentNotes type={this.props.tournament.type} rules={this.props.tournament.rules} />
              </GridItem>
              <GridItem md={4} sm={6} sx={12} lg={4}>
                <Score />
              </GridItem>
              {/* <GridItem md={4} sm={6} sx={12} lg={4}>
                <DirectionMap
                  isMarkerShown={this.state.isMarkerShown}
                  onMarkerClick={this.handleMarkerClick}
                />
              </GridItem> */}
              {/* <GridItem md={4} sm={6} sx={12} lg={4}>
                <Bracket game={{
                  id: 1,
                  homeOnTop: true,
                }}/>
              </GridItem> */}
            </GridContainer>
            <br />
            {/* <SectionText tournament={tournament} /> */}
          </div>
        </div>
        <br />
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
  tournament: state.tournament.entity
});
const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      tournamentAsync
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(blogPostPageStyle)(BlogPostPage));
