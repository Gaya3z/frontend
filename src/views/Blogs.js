import { Btn } from './../components'
import { SearchBar } from './../components/HeroSection/HeroSecElements'
import { makeStyles, TextField ,Typography } from '@material-ui/core'
import React from 'react'
import {  Title } from './../globalStyles'
import {Link} from 'react-router-dom'
import img from './../assets/img/blog-placeholder.svg'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    top : {
        marginLeft : "10%",
        marginRight : "10%",
        maxWidth : "100vw",
        display : "flex",
        height : 100,
        alignItems : 'center',
        [theme.breakpoints.down('md')]: {
            marginLeft : "2%",
            marginRight : "2%",
          },
    },
    title : {
        color : "var(--primary)",
        [theme.breakpoints.down('sm')]: {
            fontSize : 25,
            margin : 5,
          },
    },
    vr : {
        borderLeft: "1px solid",
        opacity : 0.5,
        height: 32.5,
        marginRight : 15,
        marginLeft : 15,
        [theme.breakpoints.down('sm')]: {
            height : 20,
            marginRight : 7,
            marginLeft : 4,
          },
    },
    body : {
        display : "flex",
        flexDirection : "column",
        alignItems : 'center',
        justifyContent : 'center',
        color : "#2D283E",
        zIndex: 1,
        maxWidth: "100vw",
        marginRight: "5%",
        marginLeft: "5%",
        [theme.breakpoints.down('md')]: {
            paddingLeft : "0%",
            paddingRight : "0%"
          },
    },
    searchbar : {
        width : "500px",
        [theme.breakpoints.down('sm')]: {
            width : "100%",
            marginTop : "5px",
            marginBottom : "5px",
          },
    },
    searcharea : {
        display : "flex",
        alignItems : "center",
        width : "fit-content",
        justifyContent : "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection : "column",
          },
    },
    subtext : {
        padding : 10,
        textAlign : "center"
    },
    hr : {
        width : "1000px",
        border: "1px solid",
        opacity : 0.2,
        [theme.breakpoints.down('sm')]: {
            width : "90vw",
            marginTop : "20px",
          },
    },
    img : {
        width : 150,
        height : 150,
        margin : 20,
    },
    blogpost : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        padding : 20,
    },
    link : {
        textDecoration: "none",
    },
    search : {
        display : "flex",
        marginLeft : "auto",
        [theme.breakpoints.down('sm')] : {
            justifyContent : "center",
        },
    },
    sectionDesktop : {
        display : "flex",
        [theme.breakpoints.down('768')] : {
            display : "none",
        },
    },
    sectionMobile : {
        display : "none",
        [theme.breakpoints.down('768')] : {
            display : "flex",
        },
    },
    blogtitle : {
        textAlign : "center",
    },
}))

export default function Blogs() {
    const classes = useStyles()
    return (
        <>
        <div>
            <div className = {classes.top} >
            <Link to = "/" className = {classes.link}>
            <Typography className = {classes.title} variant="h1" noWrap>
            COURSENATOR
          </Typography>
          </Link>
          <div className = {classes.vr} />
          <Typography className = {classes.title} variant="h1" noWrap>
            BLOG
          </Typography>
          <div className = {clsx(classes.search, classes.sectionDesktop)}>
          <TextField
                label="Search"
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
          </div>
            </div>
            <div className = {clsx(classes.search, classes.sectionMobile)}>
             <TextField
                label="Search"
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
          </div>
            <div className = {classes.body}>
                <Title>Bloginator</Title>
            <Typography className = {classes.subtext}> 
            Subsribe to our Coursenator NewsLetter for the latest updates on Online Education news and articles 
            </Typography>
            <div className = {classes.searcharea}>
                <SearchBar className = {classes.searchbar} placeholder = "Enter your email and get our newsletter" />
                <Btn>Sign up for free</Btn>
            </div>
                {[...Array(3)].map(blogpost => {
                    return(
                        <>
                        <div className = {classes.hr} />
                        <div className = {classes.blogpost}>
                            <Typography variant = "h5" className = {classes.blogtitle} >Lorem ipsum dolor sit amet</Typography>
                            <Typography className = {classes.date}>Date</Typography>
                            <img src = {img} className = {classes.img} alt = "Blog" />
                            <Typography style = {{ width : "80%", textAlign : "left", margin : "10px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur nec augue diam. Ut tempus elit nec ante sollicitudin 
                            ullamcorper. Donec dolor felis, fringilla ac bibendum nec, maximus 
                            nec nunc. Curabitur venenatis luctus augue sed ullamcorper. 
                            Vestibulum magna velit, vulputate at tincidunt id, lacinia non mi...
                            <Link to = "/blogpost">Read more</Link>
                            </Typography>
                            <Link to ="/blogpost">
                            <Btn>Read more</Btn>
                            </Link>
                        </div>
                        </>
                    )
                })}
                <Link style = {{ marginBottom : "25px" }}>Load more</Link>
            </div>
        </div>
        </>
    )
}
