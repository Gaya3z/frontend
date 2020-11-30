import React from 'react'
import { HeroBtn, HeroContainer, HeroTitle, SearchBar , HeroWrapper} from './HeroSecElements'

function HeroSection() {
    return (
        <>
           <HeroContainer>
               <HeroWrapper>
               <HeroTitle>
                   KICKSTART YOUR LEARNING TODAY!
               </HeroTitle>
               <SearchBar placeholder = "Search thousands of courses" >
               </SearchBar>
               <HeroBtn big primary>Search</HeroBtn>
               </HeroWrapper>
           </HeroContainer> 
        </>
    )
}

export default HeroSection
