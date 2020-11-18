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
              <Item>Data Visualization</Item>
              <Item>Data Analysis</Item>
              <Item>Data Mining</Item>
              <Item>Big Data</Item>
              <Item>BioInformatics</Item>
            </List>
            <List>
              <Topic>Business</Topic>
              <Item>Accounting</Item>
              <Item>Marketing</Item>
              <Item>Entrepreneurship</Item>
              <Item>Management</Item>
              <Item>Finance</Item>
              <Item>Business Law</Item>
              <Item>Human Resources</Item>
              <Item>Sales</Item>
            </List>
            <List>
              <Topic>Humanities</Topic>
              <Item>History</Item>
              <Item>Religion</Item>
              <Item>Philosophy</Item>
              <Item>Foreign Language</Item>
              <Item>Literature</Item>
              <Item>Journalism</Item>
              <Item>Ethics</Item>
            </List>
            <List>
              <Topic>Art and Design</Topic>
              <Item>Art</Item>
              <Item>Designing</Item>
              <Item>Architecture</Item>
              <Item>Music</Item>
              <Item>Film and Theatre</Item>
              <Item>Digital Media</Item>
              <Item>Visual Arts</Item>
            </List>
          </ListContainer>
          <ListContainer>
            <List>
              <Topic>Programming</Topic>
              <Item>Mobile Development</Item>
              <Item>Web Development</Item>
              <Item>Game Development</Item>
              <Item>Software Development</Item>
              <Item>Programming Languages</Item>
              <Item>Cloud Computing</Item>
            </List>
            <List>
              <Topic>Personal Development</Topic>
              <Item>Career Development</Item>
              <Item>Communication Skills</Item>
              <Item>Self Improvement</Item>
            </List>
            <List>
              <Topic>Health and Nutrition</Topic>
              <Item>Public Health</Item>
              <Item>Animal Health</Item>
              <Item>Healthcare Management</Item>
              <Item>Nutrition and Wellness</Item>
              <Item>Nursing</Item>
            </List>
            <List>
              <Topic>Language Learning</Topic>
              <Item>English</Item>
              <Item>French</Item>
              <Item>German</Item>
              <Item>Italian</Item>
              <Item>Spanish</Item>
              <Item>Chinese</Item>
              <Item>Korean</Item>
            </List>
          </ListContainer>
          <ListContainer>
            <List>
              <Topic>Computer Science</Topic>
              <Item>Artificial Intelligence</Item>
              <Item>Scala</Item>
              <Item>Java</Item>
              <Item>HTML</Item>
              <Item>Javascript</Item>
              <Item>C++</Item>
              <Item>Blockchain</Item>
              <Item>Linux</Item>
              <Item>IOT</Item>
              <Item>Agile Development</Item>
              <Item>Data Structures</Item>
            </List>
            <List>
              <Topic>Information Technology</Topic>
              <Item>Cyber Security</Item>
              <Item>AWS</Item>
              <Item>Google Cloud</Item>
              <Item>SAP</Item>
              <Item>Google</Item>
            </List>
            <List>
              <Topic>Social Science</Topic>
              <Item>Anthropology</Item>
              <Item>Psychology</Item>
              <Item>Sociology</Item>
              <Item>Law</Item>
              <Item>Economics</Item>
              <Item>Geography</Item>
              <Item>Cultural and Ethical Studies</Item>
              <Item>Sustainability</Item>
            </List>
            <List>
              <Topic>Physical Science and Engineering</Topic>
              <Item>Mechanical</Item>
              <Item>Electrical</Item>
              <Item>Chemical</Item>
              <Item>EVS and Sustainability</Item>
              <Item>Physics and Astronomy</Item>
              <Item>Research Methods</Item>
            </List>
          </ListContainer>
          <ListContainer>
          <List>
              <Topic>Education and Training</Topic>
              <Item>Higher Education</Item>
              <Item>Training anf Development</Item>
              <Item>General Learning</Item>
              <Item>Course Developement</Item>
              <Item>Online Education</Item>
              <Item>Test Preparation</Item>
            </List>
          </ListContainer>
        </ListWrapper>
      </CatalogSection>
  );
}
export default Cards;