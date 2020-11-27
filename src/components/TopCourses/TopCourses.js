import React from 'react'
import img from '.../../../public/SubjectPlaceholder.svg'
import { CardContainer, CardInfo, CardSection, CardWrapper } from '../Cards/CardElements'
import { Image, Subject } from './TopCourseElements'
import { Button, Title } from '../../globalStyles'
import {Link} from 'react-router-dom'

function TopCourses() {
    return (
        <CardSection>
            <Title> Top courses of all time </Title>
        <CardWrapper>
          <CardContainer>
            <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
            <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
            <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
            <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
          </CardContainer>
          <CardContainer>
          <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
          <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
            <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
            <Subject to='/'>
              <CardInfo>
                <Image src = {img} />
              </CardInfo>
            </Subject>
          </CardContainer>
          <Link to = "/topcourses"> 
          <Button big>
          Browse top courses
        </Button>
          </Link>
        </CardWrapper>
      </CardSection>
    )
}

export default TopCourses
