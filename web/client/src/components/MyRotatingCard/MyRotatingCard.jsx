
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
        cardFront.style.height = cardHeight + 35 + "px";
        cardFront.style.width = cardWidth + "px";
        cardBack.style.height = cardHeight + 35 + "px";
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

        <div class="rotating-card-container" style="height: 302px; margin-bottom: 30px;">
        <div class="card card-rotate card-background">
            <div class="front front-background" style="background-image: url('assets/img/examples/card-blog5.jpg');">
                <div class="card-content">
                    <h6 class="category text-info">Full Background Card</h6>
                    <a href="#pablo">
                        <h3 class="card-title">This Background Card Will Rotate on Hover</h3>
                    </a>
                    <p class="card-description">
                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                    </p>
                </div>
            </div>
    
            <div class="back back-background" style="background-image: url('assets/img/examples/card-blog5.jpg');">
                <div class="card-content">
                    <h5 class="card-title">
                        Manage Post
                    </h5>
                    <p class="card-description">As an Admin, you have shortcuts to edit, view or delete the posts.</p>
                    <div class="footer text-center">
                        <a href="#pablo" class="btn btn-info btn-just-icon btn-fill btn-round">
                            <i class="material-icons">subject</i>
                        </a>
                        <a href="#pablo" class="btn btn-success btn-just-icon btn-fill btn-round btn-wd">
                            <i class="material-icons">mode_edit</i>
                        </a>
                        <a href="#pablo" class="btn btn-danger btn-just-icon btn-fill btn-round">
                            <i class="material-icons">delete</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
</div>        
      );
    }
  }
  
  export default withStyles(styles)(SectionCards);
  




