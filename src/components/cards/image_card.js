import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyPic from '../Images/3.JPG';


export default function image_card() {
    return (
      //  <Card className={classes.root}>
      <Card className="Card_Settings">
        <CardActionArea>
          <CardMedia
            style={{ height: 160, paddingTop: '60.25%' }}
            image={MyPic}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className="ImageCard_Title" style ={{"font-size":"2.2em","font-family":"Roboto","font-weight":"bold"}}>
               Thinker - Doer - Tech Enthusiast  
            </Typography>
          </CardContent>
        </CardActionArea>      
      </Card>
    );
  }

