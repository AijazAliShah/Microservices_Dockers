import React, { Component } from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import { Divider } from "@material-ui/core";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB95c4kgxlb1x2WCZujmG592_JPktS_Lh8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 25.03, lng: 121.6 },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.location}
    defaultOptions={{}}
  >
    {/* <InfoBox
      defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Hello, Taipei!
    </div>
      </div>

    </InfoBox> */}


    <Marker
      position={props.location}
    >
      <InfoBox

        options={{
          closeBoxURL: ``,
          enableEventPropagation: true,
          disableAutoPan: false,
          maxWidth: 150,
          pixelOffset: new window.google.maps.Size(-140, -45),
          zIndex: null,
          boxStyle: {
            background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') 0% 100% no-repeat",
            width: "280px",
            backgroundColor: `rgba(255, 255, 255, 0.75)`,
            padding: `12px`,
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
          },
          infoBoxClearance: new window.google.maps.Size(1, 1),
          alignBottom: true
        }}
      >
        <div style={{}}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            {props.address ?
              <span>
                {props.address.results[0].formatted_address}
              </span>
              : 'Loading'
            }
          </div>
        </div>
      </InfoBox>
    </Marker>
  </GoogleMap>
);







class DirectionMap extends Component {
  static defaultProps = {
    location: { lat: 40.714224, lng: -73.961452 }
  }
  state = {
    address: null,
    userLocation: ''
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
  componentWillMount() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.location.lat},${this.props.location.lng}&key=AIzaSyB95c4kgxlb1x2WCZujmG592_JPktS_Lh8`)
      .then(res => res.json())
      .then(address => this.setState({ address }))
      .catch(err => console.error(err))
  }
  go = () => {
    window.open(`https://www.google.com/maps/dir/${this.state.userLocation}/${this.state.address.results[0].formatted_address}`)
  }
  render() {
    const { classes } = this.props;

    return (
      <Card >
        <CardHeader image>
          <div href="#pablo" onClick={e => e.preventDefault()}>
            {/* <img src={regPic} alt="..." width="400px" height="300px"/> */}
            <h4>Direction</h4>
          </div>
          <Divider />
        </CardHeader>
        <CardBody>
          <div className={classes.inputWidth}>
            <CustomInput inputProps={{
              onChange: ev => this.setState({ userLocation: ev.target.value })
            }} value={this.state.userLocation} labelText="Choose a strating location..." />
            <CustomInput disabled labelText={this.state.address ? this.state.address.results[0].formatted_address : 'loading...'} />
            <br/>
            <div className={classes.buttonStyle}><Button disabled={!this.state.address} onClick={this.go} color="primary" round size="md">GO</Button></div>
            <br/>
            <br/>
            <MyMapComponent address={this.state.address} location={this.props.location} />
          </div>

        </CardBody>

      </Card>
    )
  }
};

export default withStyles(styles)(DirectionMap);
