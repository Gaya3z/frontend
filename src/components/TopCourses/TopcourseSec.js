import React from 'react'
import {useStyles} from './TopElements'
import img from '.../../../public/SubjectPlaceholder.svg'

function TopcourseSec() {
    const classes = useStyles()
    return (
        <>
            <div className = {classes.container}>
                <div className = {classes.row}>
                {[...Array(4)].map(coursecard => {
                return (
                    <div className = {classes.card}>
                        <img className = {classes.img} src = {img} alt = "Course Card" />
                    </div>
                )
                 })} 
                </div>
                <div className = {classes.row}>
                {[...Array(4)].map(coursecard => {
                return (
                    <div className = {classes.card}>
                        <img className = {classes.img} src = {img} alt = "Course Card" />
                    </div>
                )
                 })} 
                </div>
            </div>
        </>
    )
}

export default TopcourseSec
