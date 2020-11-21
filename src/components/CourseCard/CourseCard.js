import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Btn from './../Button/Btn'
import img from './../../assets/img/hero-bg.png'
import {Link} from 'react-router-dom'
import { CardSection, EyeIcon, TimeIcon, Action, Rating, RatingSection } from './CourseCardElements';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 900,
      maxHeight: "fit-content",
      display : "flex",
      borderRadius : 15,
      [theme.breakpoints.down('sm')] : {
        width : '80vw',
        height : 'fit-content',
        flexDirection : "column",
        alignItems : "center",
      },
    },
    cardmedia : {
      height: 180,
      width : 330,
      [theme.breakpoints.down('sm')] : {
        height : '30vh',
        width : 'auto',
        justifyContent : 'center',
      },
    },
    content : {
        flex : '1 0 auto'
    },
    content2 : {
        padding : 5,
    },
    link : {
      color : "#777",
      textDecoration : 'none',
      fontSize : '14px',
      '&:hover' : {
        color : '#5C0090',
      }
    }
  }));  

export default function CourseCard() {
    
    const classes = useStyles();

  return (
    <CardSection>
    <Card className={classes.root}>
    <CardMedia
          className = {classes.cardmedia}
          component="img"
          alt="Course Image"
          height="fit-content"
          image={img}
          title="Course Name"
          width = "200px"
        />
        <CardContent className = {classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Introduction to Data Visualization
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           University of California, Davis
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Provider : Coursera
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <TimeIcon />
            4-6 hours a week / 4 weeks long
          </Typography>
            <EyeIcon />
            <Link className = {classes.link}>
              Course Preview
              </Link>
        </CardContent>
      <CardActions>
        <Action>
        <div className = {classes.content2}>
        <Btn>
            Share Course
        </Btn>
        </div>
        <div className = {classes.content2}>
        <Typography variant = "h3">
            Type :
        </Typography>
        <Typography variant ="h3" color = "primary">
            FREE
        </Typography>
        </div>
        <div className = {classes.content2}>
            <RatingSection>
            {[...Array(5)].map(rating => {
            return <label><Rating /></label>
            })}
            </RatingSection>
        </div>
        </Action>
      </CardActions>
    </Card>
    </CardSection>
  );
}