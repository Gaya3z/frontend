import React from 'react'
import { HeroBtn, HeroContainer, HeroTitle, SearchBar } from './HeroSecElements'

function HeroSection() {
    return (
        <>
           <HeroContainer>
               <HeroTitle>
                   KICKSTART YOUR LEARNING TODAY!
               </HeroTitle>
               <SearchBar placeholder = "Search thousands of courses" >
               </SearchBar>
               
               <HeroBtn big primary>Search</HeroBtn>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
