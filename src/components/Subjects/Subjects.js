import React from 'react';
import {Title } from '../../globalStyles';
import HorizontalScroll from './HorizontalScroll';
import './item.css';
import {SubjectContainer, SubjectButton} from './SubElements';
import { SubjectsCarousel} from './SubjectsCarousel'
import {Link} from 'react-router-dom'

function Subjects() {
    return (
        <>  
        <SubjectContainer>
        <Title> Subjects </Title>
        <HorizontalScroll  />
        <SubjectsCarousel />
        <Link to = "/catalog">
        <SubjectButton> Browse all subjects</SubjectButton>
        </Link>
        </SubjectContainer>
        </>
    )
}

export default Subjects;
