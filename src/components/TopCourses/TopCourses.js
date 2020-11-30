import React from 'react'
import {useStyles} from './TopElements'
import img from '.../../../public/SubjectPlaceholder.svg'
import { Button, Title } from '../../globalStyles'
import {Link} from 'react-router-dom'

function TopCourses() {
    const classes = useStyles()
    return (
        <>
            <div className = {classes.container}>
              <Title>Top courses of all time</Title>
               <div className = {classes.breakpoints}>
               <div className = {classes.row}>
                {[...Array(2)].map(coursecard => {
                return (
                    <div className = {classes.card}>
                        <img className = {classes.img} src = {img} alt = "Course Card" />
                    </div>
                )
                 })} 
                </div>
                <div className = {classes.row}>
                {[...Array(2)].map(coursecard => {
                return (
                    <div className = {classes.card}>
                        <img className = {classes.img} src = {img} alt = "Course Card" />
                    </div>
                )
                 })} 
                </div>
               </div>
                <div className = {classes.breakpoints}>
                <div className = {classes.row}>
                {[...Array(2)].map(coursecard => {
                return (
                    <div className = {classes.card}>
                        <img className = {classes.img} src = {img} alt = "Course Card" />
                    </div>
                )
                 })} 
                </div>
                <div className = {classes.row}>
                {[...Array(2)].map(coursecard => {
                return (
                    <div className = {classes.card}>
                        <img className = {classes.img} src = {img} alt = "Course Card" />
                    </div>
                )
                 })} 
                </div>
                </div>
                <Link to = "/topcourses"> 
                <Button big>
                Browse top courses
              </Button>
                </Link>
            </div>
        </>
    )
}

export default TopCourses
