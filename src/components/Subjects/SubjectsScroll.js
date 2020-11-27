import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper : { 
        width : "500px",
        height : "100px",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    },
    carousel : {
        width : "fit-content"
    },
    link : {
        textDecoration : "none",
    },
}))
 
export default function SubjectsScroll(props)
{
    const classes = useStyles()
    var items = ['Data Science', 'Business' ,'Humanities','Art and Design','Programming','Personal Development',
            'Health and Nutrition','Language Learning','Computer Science','Information Technology','Social Science',
            'Physical Science and Engineering','Education and Teaching']
 
    return (
        <Carousel
        navButtonsAlwaysVisible = {true}
        autoPlay = {false}
        className = { classes.carousel}
        indicators = {false}
        >
            {
                items.map( (item) => <Item item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    const classes = useStyles()
    return (
        <Paper className = {classes.paper}>
            <Link className = {classes.link}>{props.item}</Link>
        </Paper>
    )
}