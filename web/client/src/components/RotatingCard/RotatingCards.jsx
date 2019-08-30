import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close"; 
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Rose from "components/Typography/Rose.jsx";
import Button from "components/CustomButtons/Button.jsx"; 

import { Link } from "react-router-dom";
 
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg"; 
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

class SectionCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: ""
    };
  }
  componentDidMount() {
    this.setWidth ()
    
    document.addEventListener('resize', this.setWidth)
  }
  componentWillUnmount () {
    document.removeEventListener('resize', this.setWidth)
  }
  setWidth () {
    console.log('resoze')
    const { classes } = this.props;
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 50 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 50 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  }
  render() {
    const { classes,
            image,
            heading,
            text,
            introDetails,
            details,
            id,
            buttonName, 
            buttonPath,
            ...rest
             } = this.props;
    return (
     
          <div >
            <div
              className={`${classes.rotatingCardContainer} 
              ${classes.manualRotate}
              ${this.state.activeRotate2}`}
            >
              <Card className={classes.cardRotate}>
                <div
                  className={`${classes.front} ${
                    classes.wrapperBackground
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <CardBody background className={classes.cardBodyRotate}>
                    <h3 className={classes.cardTitleWhite}>
                      {heading}
                    </h3>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <h4 className={classes.cardTitleWhite}>
                        {text}
                      </h4>
                    </a>
                    <p className={classes.cardDescriptionWhite}>
                      {introDetails}
                    </p>
                    <div className={classes.textCenter}>
                      <Button
                        round
                        color="primary"
                        onClick={() =>
                          this.setState({
                            activeRotate2: classes.activateRotate
                          })
                        }
                      >
                        <Refresh /> See More
                      </Button>
                    </div>
                  </CardBody>
                </div>
                <div
                  className={`${classes.back} ${
                    classes.wrapperBackground
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <CardBody background className={classes.cardBodyRotate}>
                    <h5 className={classes.cardTitleWhite}>
                      Details
                    </h5>
                    <p className={classes.cardDescriptionWhite}>
                      {details}
                    </p>
                    <div className={classes.textCenter}>
                    <Button
                        round
                        color="primary"
                        onClick={() =>
                          this.setState({
                            activeRotate2: ""
                          })
                        }
                        component={Link} 
                        
                        to={buttonPath}
                      >
                         {buttonName}
                      </Button>
                      <br />
                      <br />
                      <Button
                        round
                        color="primary"
                        onClick={() =>
                          this.setState({
                            activeRotate2: ""
                          })
                        }
                      >
                        <Refresh /> Back...
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </div>
          </div>
  
    );
  }
}

export default withStyles(styles)(SectionCards);
