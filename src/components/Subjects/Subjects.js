import React from 'react';
import {Title } from '../../globalStyles';
import HorizontalScroll from './HorizontalScroll';
import './item.css';
import {SubjectContainer, SubjectButton, CarouselWrapper, ButtonWrapper} from './SubElements';
import { SubjectsCarousel} from './SubjectsCarousel'
import {Link} from 'react-router-dom'
import SubjectsScroll from './SubjectsScroll';

function Subjects() {
    return (
        <>  
        <SubjectContainer>
        <Title> Subjects </Title>
        <CarouselWrapper>
        <SubjectsScroll />
        <SubjectsCarousel />
        </CarouselWrapper>
        <Link to = "/catalog">
            <ButtonWrapper>
        <SubjectButton> Browse all subjects</SubjectButton>
            </ButtonWrapper>
        </Link>
        </SubjectContainer>
        </>
    )
}

export default Subjects;
