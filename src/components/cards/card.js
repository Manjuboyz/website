import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CV from '../CV.pdf';

const useStyles = makeStyles({
  root: {
    width: 500,
    maxWidth: 545,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    //  <Card className={classes.root}>
    <Card className="Card_Settings">
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography style={{ "font-family": "calibri", "font-size": "2.2em", "font-weight": "bold" }}>
            Manjunatha P
          </Typography>       
          
          <p style={{ "font-family": "calibri", "font-size": "2.2em", "font-weight": "bold" ,
            "color": "black",
            "font-family": "Roboto",
            "font-size": "3em" }} >
                I just don't code  </p>           
          
            <p style={{ "font-family": "calibri", "font-size": "2.2em", "font-weight": "bold" ,
            "display": "inline-block",
            "background-color": "black",
            "color": "white",
            "font-family": "Roboto",
            "font-size": "3em",
            "font-weight": "bold" }} > 
              I write clean code!</p>
          
          <br />
          <Typography >
            A web developer who always thrive to learn more and do more, interested to build user friendly app which is customer centric.
          <br />
            <p> At present, working on de-coupling monolithic product to individual products and creating sustainable WEB APIs for those.</p>

            Exploring reactjs for fun
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary" href={CV} target="_blank">
          DOWNLOAD CV
        </Button>
        {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}
      </CardActions>
    </Card>
  );
}
