import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import Btn from '../Button/Btn'
import img from './../../assets/img/hero-bg.png'
import {GiSandsOfTime} from 'react-icons/gi'
import {FaRegEye} from 'react-icons/fa'
import ReadOnly from '../StarRating/ReadOnly';

const useStyles = makeStyles((theme) => ({
    card : {
        display : "flex",
        height : "fit-content",
        boxSizing : "border-box",
        boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius : "10px",
        marginBottom : "20px",
        border : "1px solid rgba(0, 0, 0, 0.2)" ,
        [theme.breakpoints.down('768')] : {
            alignItems : "center",
        },
        [theme.breakpoints.down('xs')] : {
            flexDirection : "column",
            alignItems : "center"
        },
      },
    section : {
        display : "flex",
        flexDirection : "column",
        margin : "20px",
        justifyContent : "center",
        [theme.breakpoints.down('1268')] : {
            marginRight : "5px",
            margin : "5px",
        },
        [theme.breakpoints.down('sm')] : {
            paddingRight : "10px",
            paddingLeft : "10px",
        },
    },
    img : {
        width : "165px",
        height : "165px",
        borderRadius : "5px",
        padding : "2px",
    },
    icon : {
        color : "var(--primary)",
        width : "24px",
        height : "24px",
    },
    title : {
        fontSize : "24px",
        textDecoration : "none",
        fontWeight : 500,
        color : "#000" ,
        '&:hover' : {
            color : "var(--primary)",
        },
        [theme.breakpoints.down('md')] : {
            fontSize : "20px",
        },
    },
    links : {
        textDecoration : "none",
        color : "var(--grey)",
        marginBottom : "5px",
        '&:hover' : {
            color : "var(--primary)",
        },
        [theme.breakpoints.down('md')] : {
            fontSize : "14px",
        },
    },
    iconSec : {
        display : "flex",
    },
    ratingSec : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        margin : "20px",
        marginLeft : 0,
        width : "fit-content",
        [theme.breakpoints.down('sm')] : {
            marginBottom : "0px",
        }
    },
    btn : {
        fontSize : "14px",
        padding : "2px 10px",
        height : "fit-content",
        width : "fit-content",
        marginBottom : "auto",
        [theme.breakpoints.down('sm')] : {
            marginTop : " -25px",
            marginBottom : "10px"
        },
    },
}))

export default function CourseCard() {
    const classes = useStyles()
    return (
        <>
            <div className = {classes.card}>
                <div className = {classes.section}>
                    <img src = {img} className = {classes.img} alt = "course" />
                </div>
                <div className = {classes.section}>
                    <Typography>
                        <Link to = "/product" className = {classes.title}>
                            Introduction to Data Visualization
                        </Link>
                    </Typography>
                    <Typography className = {classes.links}>
                        University Name
                    </Typography>
                    <Typography className = {classes.links}>
                        Provider name
                    </Typography>
                    <div className = {classes.iconSec}>
                        <div className = {classes.icon}>
                            <GiSandsOfTime />
                        </div>
                        <Typography className = {classes.links}>
                            Course Duration
                        </Typography>
                    </div>
                    <div className = {classes.iconSec}>
                        <div className = {classes.icon}>
                            <FaRegEye />
                        </div>
                        <Link className = {classes.links}>
                            Course Preview
                        </Link>
                    </div>
                </div>
                <div className = {classes.ratingSec}>
                    <Btn className = {classes.btn}>
                        Share Course
                    </Btn>
                    <ReadOnly />
                </div>
            </div>
        </>
    )
}
