import { Container, Title } from '../globalStyles'
import React from 'react'
import { Navbar , CourseCard, CourseMenu, Btn } from '../components'
import { makeStyles, Typography } from '@material-ui/core'
import { SearchBar } from '../components/HeroSection/HeroSecElements'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import StyledCheckbox from '../components/Signup/StyledCheckbox'

const Styles = makeStyles((theme) => ({
    typography : {
        color : "#777",
        textAlign : "center",
        maxWidth : 750,
        margin : "auto",
        padding : 15,
    },
    searcharea : {
        justifyContent : "center",
        margin : "auto",
        alignItems : "center",
        display : 'flex',
        [theme.breakpoints.down('sm')]:{
        flexDirection : "column",
        },
    },
    related : {
        textAlign : 'center'
    },
    coursecard : {
        display : 'flex',
        flexDirection  : "row",
    },
    menulist  :{ 
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        width: "fit-content",
        boxSizing: "border-box",
        textDecoration: "none",
        padding : 20,
    },
    link : {
        color : "#777",
        textDecoration : 'none',
        padding : 5,
        textShadow : '0px 4px 4px rgba(0, 0, 0, 0.15)',
        '&:hover' : {
            transform: 'scale(1.01)',
            transition: 'all 0.1s',
        },
    },
    cataloglink : {
        color : 'var(--primary)',
    },
    certificate : {
        width : "fit-content",
        display : 'flex',
        flexDirection : "row",  
        marginLeft : "77%"
    }
}))

export default function courseList() {
    const classes = Styles()
    return (
        <>
        <Navbar />
        <Container>
        <Title> Course Name </Title>
        <Typography className = {classes.typography}>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Donec lobortis non urna 
        vel feugiat. Sed lectus ante,
        placerat et nibh vitae, faucibus dapibus justo.
        </Typography>
        <div className = {classes.searcharea}>
        <SearchBar placeholder = "Search Thousands of Courses"/>
        <Btn>Search</Btn>
        </div>
        <CourseMenu />
        <div className = { classes.certificate }>
        <Typography style = {{ fontWeight : 600}}>
            With certifcates
        <StyledCheckbox />
        </Typography>
        </div>
        <div className = {classes.coursecard}>
            <div className = {classes.menulist}>
                <Typography 
                class = {classes.link}
                style = {{ fontWeight : '600' , color : "#000" }}>
                Related courses
                </Typography>
                <Link className = {classes.link} >Data Visualization</Link>
                <Link className = {classes.link} >Data Analysis</Link>
                <Link className = {classes.link} >Data Mining</Link>
                <Link className = {classes.link} >Big Data</Link>
                <Link className = {classes.link} >Bio Informatics</Link>
                <Link 
                className = {clsx(classes.cataloglink , classes.link)} 
                to = "/catalog">
                View Catalog
                </Link>
            </div>
            <div>
            <CourseCard />
            {[...Array(10)].map(coursecard => {
            return <CourseCard />
            })} 
            </div>

        </div>
        </Container>
        </>
    )
}

