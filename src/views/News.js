import { Btn } from './../components'
import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import img from './../assets/img/hero-bg.png'

const useStyles = makeStyles((theme) => ({
    top : {
        marginLeft : "15%",
        marginRight : "15%",
        maxWidth : 1300,
        width : "100%",
        display : "flex",
        height : 100,
        alignItems : 'center',
        [theme.breakpoints.down('md')]: {
            marginLeft : 0,
            marginRight : 0,
            flexDirection : "column"
          },
    },
    title : {
        color : "#5C0090",
        [theme.breakpoints.down('sm')]: {
            fontSize : 32,
            margin : 5,
          },
    },
    vr : {
        borderLeft: "1px solid",
        opacity : 0.5,
        height: 32.5,
        marginRight : 15,
        marginLeft : 15,
    },
    body : {
        display : "flex",
        flexDirection : "column",
        alignItems : 'center',
        justifyContent : 'center',
        color : "#2D283E",
        zIndex: 1,
        width: "100%",
        maxWidth: "1300px",
        marginRight: "auto",
        marginLeft: "auto",
        paddingRight:"50px",
        paddingLeft: "50px",
        [theme.breakpoints.down('md')]: {
            paddingLeft : "0%",
            paddingRight : "0%"
          },
    },
    article : {
        display : "flex",
        width : "fit-content",
        height : 200,
        border : "0.3px solid white",
        boxSizing : "border-box",
        boxShadow : "4px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius : "10px",
        margin : 20,
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column",
            height : "fit-content",
            width : "80%"
        },
    },
    section : {
        margin : 30,
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            margin : 10,
        },
    },
    picture : {
        width : 180,
        height : 150,
    },
    articleTitle : {
        fontSize : 24,
        fontWeight : 600,
    },
    siteLink : {
        textDecoration : "none",
        "&:hover" : {
            transform: 'scale(1.01)',
        },
    },
    sectionMobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
      },
      sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      link : {
          textDecoration : "none"
      },
}))

export default function News() {
    const classes = useStyles()
    const renderMobileView = (
        <>
        <div className = {classes.top}>
        <Link to = "/" className = {classes.link}>
        <Typography variant="h1" className = {classes.title} noWrap>
            COURSENATOR
          </Typography>
        </Link>
          <Typography variant="h1" className = {classes.title} noWrap>
            NEWS AND ARTICLES
          </Typography>
        </div>
        </>
    )
    return (
        <>
            <div className = {classes.sectionDesktop}>
            <div className = {classes.top} >
            <Link to = "/" className = {classes.link}>
            <Typography variant="h1" className = {classes.title} noWrap>
            COURSENATOR
            </Typography>
            </Link>
          <div className = {classes.vr} />
          <Typography variant="h1" className = {classes.title} noWrap>
            NEWS AND ARTICLES
          </Typography>
            </div>
            </div>
            <div className = {classes.sectionMobile}>
            {renderMobileView}
            </div>
           {[...Array(5)].map(articles => {
               return(
                <div className = {classes.body}>
                <div className = {classes.article}>
                    <div className = {classes.section}>
                    <img src = {img} className = {classes.picture} alt = "article" />
                    </div>
                    <div className = {classes.section}>
                    <Typography className = {classes.articleTitle}>
                        Lorem Ipsum
                    </Typography>
                    <Link className = {classes.siteLink}>Site Name</Link>
                    </div>
                    <div className = {classes.section}>
                    <Btn>Go to link</Btn>
                    </div>
                </div>
            </div>
               )
           })}
        </>
    )
}
