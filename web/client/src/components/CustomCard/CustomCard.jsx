import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: "22%",
    "@media (max-width: 425px)": {
        maxWidth: "100%"
      },
      "@media (max-width: 700px)": {
        maxWidth: "100%"
      },
    alignItems: "center" 
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  buttonAlign: {
   // display: "flex",
    //justifyContents: "center"
    alignItems: "center"
  }
};

function ImgMediaCard(props) {
  const { classes,
          heading,
          text,
          image
         } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.buttonAlign}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonAlign}>
        <Button size="large" color="primary"  >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);