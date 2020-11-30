import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import img from '.../../../public/logos.svg'
import { Button } from './../../globalStyles'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ReadBlog = styled(Button)`
  padding: 12px 65px;
  @media screen and (max-width : 1320px) { 
    padding: 8px 70px; 
  }
`

const useStyles = makeStyles((theme) => ({
    root : {
        maxWidth : "100vw",
        maxHeight : "fit-content",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column-reverse",   
        },
        },
    section : {
        display : "flex",
        margin : 40,
        maxWidth  :"500px",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            margin : 20,   
        },
    },
    img : {
        width : 550,
        padding : 10,
        [theme.breakpoints.down('sm')] : {
            maxWidth : "100vw",
        },
    },
    column : {
        display : "flex",
        flexDirection : "column",
        width : "fit-content",
    },
    textbold : {
        textAlign : "center",
        marginBottom : "25px",
        fontSize : "18px",
        lineHeight : "24px",
        color : "var(--grey)",
        textShadow :"5px 4px 4px rgba(0, 0, 0, 0.25)",
        fontWeight : 600,
        [theme.breakpoints.down('sm')] : {
            marginTop : 25,  
        },
    },
    text : {
        textAlign : "center",
        maxWidth : "440px",
        marginBottom : "25px",
        fontSize : "18px",
        lineHeight : "24px",
        color : "#000",
    },
    row : {
        display : "flex",
        margin : 10,
        alignItems : 'center',
        justifyContent : "center",
        [theme.breakpoints.down('md')] : {
            flexDirection : "column",
            margin : -5,
        },
    },
    btn : {
        margin : 10,
        [theme.breakpoints.down('sm')] : {

        },
    },
    btn2 : {
        padding : "10px 55px",
    },
    btnlink : {
        textDecoration : "none",
        color : "inherit",
    },
}))

function AboutLanding() {
    const classes = useStyles()
    return (
        <>
        <div className = {classes.root}>
        <div className = {classes.section}>
        <img className = {classes.img} src = {img} alt = "logos" />
        </div>
        <div className = {classes.section}>
            <Typography className = {classes.textbold}>
            Coursenator aggregates courses from the best online learning 
            platforms including Coursera, edX, FutureLearn, Udacity and 
            over 10 others.
            </Typography>
            <Typography className = {classes.text}>
            Browse from thousands of indexed courses from the best providers. 
            All in one catalogue. Search by popularity, reviews, languages, 
            teacher, pricing, and start date. See our list of curated courses 
            handpicked by our team of MOOC enthusiasts.
            </Typography>
            <div className = {classes.row}>
                <Button blue big className = {classes.btn}>
                <Link 
                className = {classes.btnlink}
                to = "/catalog">
                Explore Catalogue
                </Link>
                </Button>
                <ReadBlog blue>
                <Link 
                className = {classes.btnlink}
                to = "/blogs">
                Read Blog
                </Link>
                </ReadBlog>
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutLanding
