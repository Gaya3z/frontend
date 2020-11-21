import { BreadCrumb, Navbar, Btn} from './../components'
import React from 'react'
import { SearchBar } from './../components/HeroSection/HeroSecElements'
import { makeStyles, Typography } from '@material-ui/core'
import { Rating } from './../components/CourseCard/CourseCardElements'
import { Title, Container } from './../globalStyles'
import { Styles } from './../assets/jss/Styles'

const productstyles = makeStyles((theme) => ({
    title : {
        display : "flex",
        alignItems : "left"
    },
    university : {
        color : "#777",
        marginTop : 10,
        marginBottom : 10,
    },
    subtext : {

    }
}))

export default function courseDetails() {
    const classes = Styles()
    const styles = productstyles()
    return (
        <>
        <Navbar />
        <Container>
           <BreadCrumb />
            <div className = {classes.searcharea}>
            <SearchBar />
            <Btn>Search</Btn>
            </div>
            <Title className = {styles.title}>Course Title</Title>
            <Typography class = {styles.university}>University Name</Typography>
            <Rating />
            <Typography>0 reviews</Typography>

        </Container>
        </>
    )
}
