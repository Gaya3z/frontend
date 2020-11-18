import React from 'react'
import { Navbar , AboutSection, Cards, HeroSection, Newsletter, Subjects, TopCourses } from './../components'

function Home() {
    return (
        <>
        <Navbar color = "transparent" />
        <HeroSection />
        <AboutSection />
        <Cards />
        <Subjects />
        <Newsletter />
        <TopCourses />
        </>
    )
}

export default Home
