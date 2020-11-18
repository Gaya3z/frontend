import styled from 'styled-components';
import { Button, Container } from '../../globalStyles';

export const SubjectScroll = styled(Container)`
  height: 160px;
  ${Container}
`;

export const Subtext = styled.p`
  padding : 30px;
  text-align: center;
  color : var(--grey);
`
export const SubjectContainer = styled(Container)`
  height : 750px;
  ${Container}
`

export const SubjectButton = styled(Button)`
    margin-top : 50px;
    margin-left : 40%;
    @media screen and (max-width : 768px){
      margin-left : 10%;
      width : 80%;
    }
`