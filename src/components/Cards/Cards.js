import React from 'react';
import {
  CardSection,
  CardWrapper,
  CardTitle,
  CardContainer,
  Card,
  CardInfo,
  CardIcon,
  CardText,
  Telescope, 
  Share, 
  Target
} from './CardElements';

function Cards() {
  return (
      <CardSection>
        <>
          <>
            <Card to='/'>
              <CardInfo>
                <CardIcon>
                    <Telescope />
                </CardIcon>
                <CardTitle>
                    Discover
                </CardTitle>
                <CardText>
                    Browse from our curated list of courses.
                    New courses added everday.
                </CardText>
              </CardInfo>
            </Card>
            <Card to='/'>
              <CardInfo>
                <CardIcon>
                  <Target />
                </CardIcon>
                <CardTitle>
                    Tracks
                </CardTitle>
                <CardText>
                    Create custom learning paths. 
                    See what others are learning and share your own journey.
                </CardText>
              </CardInfo>
            </Card>
            <Card to='/'>
              <CardInfo>
                <CardIcon>
                    <Share />
                </CardIcon>
                <CardTitle>
                    Share
                </CardTitle>
                <CardText>
                    Share your achievements with others. One-click share to LinkedIn and YourAcclaim.
                </CardText>
              </CardInfo>
            </Card>
          </>
        </>
      </CardSection>
  );
}
export default Cards;