import { Button } from '../../globalStyles'
import React , {Component} from 'react'
import { CheckBoxArea, Insert, Label, SignupBox, SignupContainer, SignupTitle } from './SignupElements'
import StyledCheckbox from './StyledCheckbox'


export default class Signup extends Component {
    render(){
        return (
            <>
            <SignupContainer>
                <SignupBox>
                <SignupTitle>
                    Sign Up
                </SignupTitle>
                    <Insert placeholder = "Username" />
                    <Insert placeholder = "E-mail" />
                    <Insert  placeholder = "Password" />
                    <Insert placeholder = "Confirm Password" />
                    <CheckBoxArea>
                    <StyledCheckbox />
                    <Label>
                        Accept terms and conditions
                    </Label>
                    </CheckBoxArea>
                    <Button to = "/"> 
                    Sign Up
                </Button>
                </SignupBox>
            </SignupContainer>  
            </>
        )
    }
}

