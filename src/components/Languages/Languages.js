import { Title } from '../../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import img from './../../assets/img/logo-placeholder.png'
import clsx from 'clsx'

const Styles = makeStyles((theme) => ({
    logo : {
        display : "flex",
        flexDirection : "column",
        width : "fit-content",
        height : "fit-content",
        alignItems : "center",
        justifyContent : "center",
        marginRight : "40px",
        marginBottom : "40px",
        [theme.breakpoints.down('sm')] : {
            marginBottom : "20px",  
        },
    },
    typography : {
        textDecoration : "none",
        color : "#777",
    },
    container : {
        maxWidth : "100vw",
        marginTop : "100px",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        marginLeft : "5%",
        marginRight : "5%",
    },
    data : {
      display : 'flex',
      alignItems : 'center',
      marginTop : "20px",
      [theme.breakpoints.down('xs')] : {
        flexDirection : "column",
      },    
    },
    sectionMobile : {
        display : "none",
        [theme.breakpoints.down('md')] : {
            display : "flex",      
        },
    },
    sectionDesktop : {
        display  :"flex",
        [theme.breakpoints.down('md')] : {
            display : "none",
        },
    },
    img : {
        height : "80px",
        [theme.breakpoints.down('sm')] : { 
            height : "60px",
        },
    },
}))

export default function Languages() {
    const classes = Styles()
    return (
        <>
        <div className = {clsx(classes.container, classes.sectionDesktop)}>
            <Title>
            List of Languages
            </Title>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} className = {classes.img} alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} className = {classes.img} alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} className = {classes.img} alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} className = {classes.img} alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
        </div>
        <div className = {clsx(classes.sectionMobile, classes.container)}>
                <Title>
                List of Universities
                </Title>
                <div className = {classes.data}>
                {[...Array(3)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
                <div className = {classes.data}>
                {[...Array(3)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
                <div className = {classes.data}>
                {[...Array(3)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
                <div className = {classes.data}>
                {[...Array(3)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
                <div className = {classes.data}>
                {[...Array(3)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
                <div className = {classes.data}>
                {[...Array(3)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
                <div className = {classes.data}>
                {[...Array(2)].map(Language => {
                return (
                    <div className = {classes.logo}>
                        <Link to = "/product">
                        <img src = {img} className = {classes.img} alt = "logo"/>
                        </Link>
                        <Link to = "/product"  className =  {classes.typography}>
                        <Typography>
                            Name of Language
                        </Typography>
                        </Link>
                    </div>
                )
                })}
                </div>
        </div>
        </>
    )
}
