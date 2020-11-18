import styled from 'styled-components';

export const SignupContainer = styled.div`
  background-color: whitesmoke  ; 
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  color : white;
`
export const SignupBox = styled.form`
    margin-top : 25px;
    background: var(--white);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    position : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    display : flex;
    width : fit-content;
    height : fit-content ;
    padding : 50px;
    color : var(--grey);
`

export const Insert = styled.input`
    width: 500px;
    height : 50px;
    padding: 8px 30px;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    margin-bottom: 25px;
    border: 0.5px solid grey;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
    @media screen and (max-width: 960px){
        width : auto;
        height: auto;
    }
`
export const Label = styled.label`
    padding-bottom : 15px;
`
export const CheckBox = styled.input`
    border : none;
    outline : none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-right : 10px;
`

export const CheckBoxArea = styled.div`
    flex-direction: row;
    width : auto;
    padding-bottom : 15px;

`