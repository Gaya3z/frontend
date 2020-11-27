import { Container, Title } from '../../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

const Styles = makeStyles((theme) => ({
    sec : {
        display : "flex",
        flexDirection : "column",
        width : "fit-content",
        height : "fit-content",
        alignItems : "center",
        justifyContent : "center",
        margin : 65 ,
    },
    typography :{
        textDecoration : "none",
        color : "#777",
    },
    link : {
        textDecoration : "none",
        fontSize : 24,
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

export default function Languages() {
    const classes = Styles()
    return (
        <>
        <Container className = {classes.container}>
            <Title>
            Find course by Languages
            </Title>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.sec}>
                    <Link to = "/product" className = {classes.typography}>
                    <Typography className = {classes.link}>
                        Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.sec}>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography className = {classes.link}>
                        Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.sec}>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography className = {classes.link}>
                        Language
                    </Typography>
                    </Link>
                </div>
            )
            })}
            </div>
            <div className = {classes.data}>
            {[...Array(5)].map(Language => {
            return (
                <div className = {classes.sec}>
                    <Link to = "/product"  className =  {classes.typography}>
                    <Typography className = {classes.link}>
                        Language
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
