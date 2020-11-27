import React from 'react';
import {Title } from '../../globalStyles';
import HorizontalScroll from './HorizontalScroll';
import './item.css';
import {SubjectContainer, SubjectButton} from './SubElements';
import { SubjectsCarousel} from './SubjectsCarousel'

function Subjects() {
    return (
        <>  
        <SubjectContainer>
        <Title> Subjects </Title>
        <HorizontalScroll  />
        <SubjectsCarousel />
        <SubjectButton> Browse all subjects</SubjectButton>
        </SubjectContainer>
        </>
    )
}

export default Subjects;
