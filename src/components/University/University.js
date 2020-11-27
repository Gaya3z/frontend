import { Container, Title } from '../../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import img from './../../assets/img/logo-placeholder.png'

const Styles = makeStyles((theme) => ({
    logo : {
        display : "flex",
        flexDirection : "column",
        width : "fit-content",
        height : "fit-content",
        alignItems : "center",
        justifyContent : "center",
        padding : 20,
    },
    typography : {
        textDecoration : "none",
        color : "#777",
    },
    conatainer : {
        width : "1300px",
        marginTop : 100
    },
    data : {
      display : 'flex',
      alignItems : 'center',
      justifyContent : "left" ,
      margin : 20,
      [theme.breakpoints.down('sm')] : {
        flexDirection : "column",
      },    
    },
}))

export default function University() {
    const classes = Styles()
    return (
        <>
        <Container className = {classes.container}>
            <Title>
            List of Universities
            </Title>
            <div className = {classes.data}>
            {[...Array(5)].map(university => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} height = "80px" alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of University
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(university => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} height = "80px" alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of University
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(university => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} height = "80px" alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of University
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(university => {
            return (
                <div className = {classes.logo}>
                    <Link to = "/product">
                    <img src = {img} height = "80px" alt = "logo"/>
                    </Link>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography>
                        Name of University
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
        </Container>
        </>
    )
}
