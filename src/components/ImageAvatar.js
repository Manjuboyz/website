import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import img1 from '../Images/1.JPG';
import img2 from '../Images/2.JPG';
import img3 from '../Images/3.JPG';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Manju" src={img1} />
      <Avatar alt="M" src={img2} />
      <Avatar alt="Manjuboyz" src={img3} />
    </div>
  );
}
