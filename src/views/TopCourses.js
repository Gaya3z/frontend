import { Title } from '../globalStyles'
import React from 'react'
import { Navbar , CourseCard } from '../components'
import {  makeStyles, Typography } from '@material-ui/core'
import { Styles } from '../assets/jss/Styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    root : {
        display : "flex",
        flexDirection : "column",
        alignItems : 'center',
        justifyContent : "center",
    },
    typography : {
        marginBottom : "20px",
    },
}))

function TopCourses() {
    const classes = Styles()
    const styles = useStyles()
    return (
        <>
        <Navbar />
        <div className = {classes.container} >
        <div className = {styles.root}>
        <Title> Top Courses </Title>
        <Typography className = {clsx(classes.typography, styles.typography)}>
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
        </div>
        </>
    )
}

export default TopCourses
