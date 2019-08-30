import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardBody from "components/Card/CardBody.jsx";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Refresh from "@material-ui/icons/Refresh";
import Subject from "@material-ui/icons/Subject";
import cardStyles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

// const styles = {
//   card: {
//     maxWidth: "22%",
//     "@media (max-width: 425px)": {
//         maxWidth: "100%"
//       },
//       "@media (max-width: 700px)": {
//         maxWidth: "100%"
//       },
//     alignItems: "center" 
//   },
//   media: {
//     // ⚠️ object-fit is not supported by IE 11.
//     objectFit: 'cover',
//   },
//   buttonAlign: {
//    // display: "flex",
//     //justifyContents: "center"
//     alignItems: "center"
//   }
// };

class CustomRotatingCard extends React.Component {
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




//function ImgMediaCard(props) {
  render() {
  const { classes,
          image,
          heading,
          text,
          introDetails,
          details,
         } = this.props;
  return (
    <div
      className={`${classes.rotatingCardContainer} ${
        classes.manualRotate
      } ${this.state.activeRotate2}`}>

      <Card className={classes.card}>

      <div
      className={`${classes.front} ${
        classes.wrapperBackground
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <CardBody background className={classes.cardBodyRotate}>
        <h6 className={classes.cardCategoryWhite}>
          {heading}
        </h6>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <h3 className={classes.cardTitleWhite}>
            {text}
          </h3>
        </a>
        <p className={classes.cardDescriptionWhite}>
          {introDetails}
        </p>
        <div className={classes.textCenter}>
          <Button
            round
            color="danger"
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

        <Button round color="danger">
        <Subject /> Registeration
        </Button>

        <br />
        <br />
        <Button
        round
        color="danger"
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
    
  );
}
}

CustomRotatingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(cardStyles)(CustomRotatingCard);