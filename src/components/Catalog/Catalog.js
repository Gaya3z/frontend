import React from 'react';
import { Title } from '../../globalStyles';
import {
  CatalogSection,
  ListWrapper,
  Item,
  Topic,
  ListContainer,
  List,
} from './CatElements';

function Cards() {
  return (
      <CatalogSection>
        <ListWrapper>
            <Title>Catalog</Title>
          <ListContainer>
            <List>
              <Topic>Data Science</Topic>
              <Item to = '/course'>Data Visualization</Item>
              <Item to = '/course'>Data Analysis</Item>
              <Item to = '/course'>Data Mining</Item>
              <Item to = '/course'>Big Data</Item>
              <Item to = '/course'>BioInformatics</Item>
            </List>
            <List>
              <Topic>Business</Topic>
              <Item to = '/course'>Accounting</Item>
              <Item to = '/course'>Marketing</Item>
              <Item to = '/course'>Entrepreneurship</Item>
              <Item to = '/course'>Management</Item>
              <Item to = '/course'>Finance</Item>
              <Item to = '/course'>Business Law</Item>
              <Item to = '/course'>Human Resources</Item>
              <Item to = '/course'>Sales</Item>
            </List>
            <List>
              <Topic>Humanities</Topic>
              <Item to = '/course'>History</Item>
              <Item to = '/course'>Religion</Item>
              <Item to = '/course'>Philosophy</Item>
              <Item to = '/course'>Foreign Language</Item>
              <Item to = '/course'>Literature</Item>
              <Item to = '/course'>Journalism</Item>
              <Item to = '/course'>Ethics</Item>
            </List>
            <List>
              <Topic>Art and Design</Topic>
              <Item to = '/course'>Art</Item>
              <Item to = '/course'>Designing</Item>
              <Item to = '/course'>Architecture</Item>
              <Item to = '/course'>Music</Item>
              <Item to = '/course'>Film and Theatre</Item>
              <Item to = '/course'>Digital Media</Item>
              <Item to = '/course'>Visual Arts</Item>
            </List>
          </ListContainer>
          <ListContainer>
            <List>
              <Topic>Programming</Topic>
              <Item to = '/course'>Mobile Development</Item>
              <Item to = '/course'>Web Development</Item>
              <Item to = '/course'>Game Development</Item>
              <Item to = '/course'>Software Development</Item>
              <Item to = '/course'>Programming Languages</Item>
              <Item to = '/course'>Cloud Computing</Item>
            </List>
            <List>
              <Topic>Personal Development</Topic>
              <Item to = '/course'>Career Development</Item>
              <Item to = '/course'>Communication Skills</Item>
              <Item to = '/course'>Self Improvement</Item>
            </List>
            <List>
              <Topic>Health and Nutrition</Topic>
              <Item to = '/course'>Public Health</Item>
              <Item to = '/course'>Animal Health</Item>
              <Item to = '/course'>Healthcare Management</Item>
              <Item to = '/course'>Nutrition and Wellness</Item>
              <Item to = '/course'>Nursing</Item>
            </List>
            <List>
              <Topic>Language Learning</Topic>
              <Item to = '/course'>English</Item>
              <Item to = '/course'>French</Item>
              <Item to = '/course'>German</Item>
              <Item to = '/course'>Italian</Item>
              <Item to = '/course'>Spanish</Item>
              <Item to = '/course'>Chinese</Item>
              <Item to = '/course'>Korean</Item>
            </List>
          </ListContainer>
          <ListContainer>
            <List>
              <Topic>Computer Science</Topic>
              <Item to = '/course'>Artificial Intelligence</Item>
              <Item to = '/course'>Scala</Item>
              <Item to = '/course'>Java</Item>
              <Item to = '/course'>HTML</Item>
              <Item to = '/course'>Javascript</Item>
              <Item to = '/course'>C++</Item>
              <Item to = '/course'>Blockchain</Item>
              <Item to = '/course'>Linux</Item>
              <Item to = '/course'>IOT</Item>
              <Item to = '/course'>Agile Development</Item>
              <Item to = '/course'>Data Structures</Item>
            </List>
            <List>
              <Topic>Information Technology</Topic>
              <Item to = '/course'>Cyber Security</Item>
              <Item to = '/course'>AWS</Item>
              <Item to = '/course'>Google Cloud</Item>
              <Item to = '/course'>SAP</Item>
              <Item to = '/course'>Google</Item>
            </List>
            <List>
              <Topic>Social Science</Topic>
              <Item to = '/course'>Anthropology</Item>
              <Item to = '/course'>Psychology</Item>
              <Item to = '/course'>Sociology</Item>
              <Item to = '/course'>Law</Item>
              <Item to = '/course'>Economics</Item>
              <Item to = '/course'>Geography</Item>
              <Item to = '/course'>Cultural and Ethical Studies</Item>
              <Item to = '/course'>Sustainability</Item>
            </List>
            <List>
              <Topic>Physical Science and Engineering</Topic>
              <Item to = '/course'>Mechanical</Item>
              <Item to = '/course'>Electrical</Item>
              <Item to = '/course'>Chemical</Item>
              <Item to = '/course'>EVS and Sustainability</Item>
              <Item to = '/course'>Physics and Astronomy</Item>
              <Item to = '/course'>Research Methods</Item>
            </List>
          </ListContainer>
          <ListContainer>
          <List>
              <Topic>Education and Training</Topic>
              <Item to = '/course'>Higher Education</Item>
              <Item to = '/course'>Training anf Development</Item>
              <Item to = '/course'>General Learning</Item>
              <Item to = '/course'>Course Developement</Item>
              <Item to = '/course'>Online Education</Item>
              <Item to = '/course'>Test Preparation</Item>
            </List>
          </ListContainer>
        </ListWrapper>
      </CatalogSection>
  );
}
export default Cards;