import { Title, Button } from './../../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import img from '.../../../public/blogs.svg'

export const EmailButton = styled(Button)`
  background : var(--white);
  color : #4B4E54;
  
  
  ${Button}
`

const useStyles = makeStyles((theme) => ({
    root : {
        maxWidth : "100vw",
        maxHeight : "fit-content",
        display : "flex",
        alignItems : "center",
        margin : 10,
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column",   
        },
    },
    section : {
        display : "flex",
        margin : 40,
        maxWidth  :"400px",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            margin : 20, 
            maxWidth : "100vw" ,
        },
    },
    img : {
        width : 500,
        padding : 10,
        marginLeft : 50,
        [theme.breakpoints.down('sm')] : {
            maxWidth : "90vw",
            marginLeft : 0,
        },
    },
    column : {
        display : "flex",
        flexDirection : "column",
        width : "fit-content",
        margin : 10,
    },
    box : {
        display : "flex",
        flexDirection : "column",
        background: "var(--grey)",
        boxShadow: "0px 0px 30px rgba(125, 125, 125, 0.5)",
        borderRadius: "49.4986px 2.23542px",
        textDecoration: "none",
        height : 420,
        width : 420,
        justifyContent : "center",
        alignItems : "center",
        padding : 20,
        marginTop : 10,
        [theme.breakpoints.down('sm')] : {
            maxWidth : "95vw",
        },
    },
    title : {
        color : "var(--white)",
        fontWeight : 300,
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margin : 10,
        textAlign : "center",
    },

    text : { 
        color : "var(--white)",
        textAlign : "center",
        margin : 20,
        marginTop : 10,
    },
    search : {
        width: 340,
        height : 45,
        padding: "8px 30px",
        borderRadius: 15,
        outline: "none",
        fontSize: 14,
        color : "var(--grey)",
        margin : 20,
        marginTop : 0,
        [theme.breakpoints.down('sm')] : {
            fonSize: 12,
            width : '90%',
        },
    },
    form : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
    },
}))

export default function Newletter() {
    const classes = useStyles()
    return (
        <>
            <div className = {classes.root}>
                <div className = {classes.section}>
                    <Title>Get all latest news and articles</Title>
                    <div className = {classes.box} >
                        <Typography variant = "h1" className = {classes.title}>
                            Coursenator Newsletter
                        </Typography>
                        <Typography className = {classes.text}>
                        Subsribe to our CourseNator NewsLetter for the latest updates on Online Education news and articles 
                        </Typography>
                        <form className = {classes.form}>
                        <input placeholder = "Enter your email and get our newsletter" className = {classes.search} />
                        <EmailButton>Sign up for free</EmailButton>
                        </form>
                    </div>
                </div>
                <div className = {classes.section}>
                    <img className = {classes.img} src = {img} alt = "placeholder" />
                </div>
            </div>
        </>
    )
}
