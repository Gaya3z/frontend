import { Container, Title } from '../globalStyles'
import React from 'react'
import { Navbar , CourseCard , Btn} from '../components'
import {  Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { Styles } from '../assets/jss/Styles'

function Recommend() {
    const classes = Styles()
    return (
        <>
        <Navbar />
        <Container className = {classes.container} >
        <Title> Learning Path Title </Title>
        <Typography className = {classes.typography}>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Donec lobortis non urna 
        vel feugiat. Sed lectus ante,
        placerat et nibh vitae, faucibus dapibus justo.
        </Typography>
        <div className = {classes.coursecard}>
                <div className = {classes.menulist}>
                <Typography 
                class = {classes.link}
                style = {{ fontWeight : '600' , color : "#000" }}>
                Required courses
                </Typography>
                <Link className = {classes.link} >Data Visualization</Link>
                <Link className = {classes.link} >Data Analysis</Link>
                <Link className = {classes.link} >Data Mining</Link>
                <Link className = {classes.link} >Big Data</Link>
                <Link className = {classes.link} >Bio Informatics</Link>
                </div>
            <div>
            {[...Array(10)].map(coursecard => {
            return <CourseCard />
            })} 
            </div>
        </div>
        </Container>
        </>
    )
}

export default Recommend
