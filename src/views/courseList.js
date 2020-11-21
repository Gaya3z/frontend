import { Container, Title } from '../globalStyles'
import React from 'react'
import { Navbar , CourseCard, CourseMenu, Btn } from '../components'
import { Typography } from '@material-ui/core'
import { SearchBar } from '../components/HeroSection/HeroSecElements'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import StyledCheckbox from '../components/Signup/StyledCheckbox'
import { Styles } from '../assets/jss/Styles'

export default function courseList() {
    const classes = Styles()
    return (
        <>
        <Navbar />
        <Container className = {classes.container} >
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

