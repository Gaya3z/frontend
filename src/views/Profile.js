import { CourseCard, Navbar, Tab } from './../components'
import React from 'react'
import { Title, Container } from './../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import anonymous from './../assets/img/anonymous.png'

const useStyles = makeStyles((theme) => ({
    dp : {
        width : 200,
        height :  200,
        boxShadow : "4px 4px 20px rgba(0, 0, 0, 0.15)",
        borderRadius : "100px",
        margin : 10,
    },
    body : {
        maxWidth : 1200,
        width : "100%",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
    },
    courseDetails : {
        display : "flex",
        alignItems : "center",
    },
    vr: {
        height : "15px",
        color : "#4B4E54",
        border :  "0.5px solid #802BB1",
        boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margin : "0px 7px",
    },
    name : {
        fontWeight : 700 , 
        fontSize : 18 , 
        margin : 10 ,
        textShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    recommend : {
        margin : 20,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "column",
    },
    recommendTitle : {
        fontSize: "28px",
        color: "var(--primary)",
        fontWeight: "bold",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        textAlign: "center",
         [theme.breakpoints.down('sm')]: {
             fontSize : 22,
         }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          alignItems : "center"
        },
      },
      sectionMobile: {
        display: 'flex',
        flexDirection : "column",
        alignItems : 'center',
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      coursecard : {
          margin : 20,
          [theme.breakpoints.down('sm')] : {
              width : "90vw",
          },
      },
}))

export default function Profile() {
    const classes = useStyles()
    return (
        <>
        <Navbar />
        <Container>
            <div className = {classes.body}>
            <Title>Profile</Title>
            <img src = {anonymous} alt = "Display" className = {classes.dp} />
            <Typography className = {classes.name}>
                Name
            </Typography>
            <div className = { classes.courseDetails} >
                <div className = {classes.sectionDesktop}>
                <Typography>0 Courses Enrolled</Typography>
                <div className = {classes.vr} />
                <Typography>0 Courses Completed</Typography>
                <div className = {classes.vr} />
                <Typography>0 Reviews</Typography>
                </div>
                <div className = {classes.sectionMobile}>
                <Typography>0 Courses Enrolled</Typography>
                <Typography>0 Courses Completed</Typography>
                <Typography>0 Reviews</Typography>
                </div>
            </div>
            <Tab />
            <div className = {classes.recommend}>
            <Typography className = {classes.recommendTitle}>
                Courses Recommended for you :
            </Typography>
            <div className = {classes.coursecard}>
                <CourseCard />
            </div>
            </div>
            </div>
        </Container>
        </>
    )
}
