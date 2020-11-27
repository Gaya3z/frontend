import { Container, Title } from '../globalStyles'
import React from 'react'
import { Navbar , CourseCard } from '../components'
import {  makeStyles, Typography } from '@material-ui/core'
import { Styles } from '../assets/jss/Styles'

const useStyles = makeStyles((theme) => ({
    root : {
        display : "flex",
        flexDirection : "column",
        alignItems : 'center',
        justifyContent : "center",
    },
}))

function TopCourses() {
    const classes = Styles()
    const styles = useStyles()
    return (
        <>
        <Navbar />
        <Container className = {classes.container} >
        <div className = {styles.root}>
        <Title> Top Courses </Title>
        <Typography className = {classes.typography}>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Donec lobortis non urna 
        vel feugiat. Sed lectus ante,
        placerat et nibh vitae, faucibus dapibus justo.
        </Typography>
        <div className = {classes.coursecard}>
            <div>
            {[...Array(10)].map(coursecard => {
            return <CourseCard />
            })} 
            </div>
        </div>
        </div>
        </Container>
        </>
    )
}

export default TopCourses
