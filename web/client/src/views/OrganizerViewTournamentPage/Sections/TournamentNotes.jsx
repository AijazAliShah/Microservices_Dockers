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

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

import regPic from "assets/img/examples/regPic.jpeg";

class TournamentDescription extends React.Component {
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
        const { classes, type, rules, ...rest } = this.props;
        return (

            <Card >
                <CardHeader image>
                    <div href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={regPic} alt="..." width="400px" height="300px" />
                        <h4>Tournament Notes</h4>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className={classes.divRow}>
                        <h4 className={classes.cardCategory}>
                            Tournament Type
                        </h4>
                        <h4 className={classes.cardCategory}>
                            {type}
                        </h4>
                    </div>

                    <div className={classes.divRow}>
                        <h4 className={classes.cardCategory}>
                            Rules
                        </h4>
                        <h4 className={classes.cardCategory}>
                            {rules}
                        </h4>
                    </div>



                </CardBody>
                <CardFooter>

                    {/* <Button
                        color="primary"
                        size="md"
                        round
                        component={Link}
                        to="/tournamentregistration-page"
                    >
                        Registration
                </Button> */}

                </CardFooter>
            </Card>

        );
    }
}

export default withStyles(styles)(TournamentDescription);
