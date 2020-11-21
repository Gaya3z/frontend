import { BreadCrumb, Navbar } from './../components'
import React from 'react'
import { SearchBar } from '@/components/HeroSection/HeroSecElements'
import { Typography } from '@material-ui/core'
import { Rating } from './../components/CourseCard/CourseCardElements'

export default function courseDetails() {
    return (
        <>
        <Navbar />
        <Container>
           <BreadCrumb />
            <SearchBar />
            <Btn>Search</Btn>
            <Title>Course Title</Title>
            <Typography>University Name</Typography>
            <Rating />
            <Typography>0 reviews</Typography>
            
        </Container>
        </>
    )
}
