import { Button, Title } from '../../globalStyles'
import React , {Component} from 'react'
import { CheckBoxArea, Insert, Label, SignupBox, SignupContainer } from './SignupElements'
import StyledCheckbox from './StyledCheckbox'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render(){
        return (
            <>
            <SignupContainer>
                <SignupBox>
                <Title>
                    Login
                </Title>
                    <Insert placeholder = "Username" />
                    <Insert  placeholder = "Password" />
                    <CheckBoxArea>
                    <StyledCheckbox />
                    <Label>
                        Remember me
                    </Label>
                    </CheckBoxArea>
                    <Link to ="/profile">
                    <Button> 
                    Login
                    </Button>
                    </Link>
                </SignupBox>
            </SignupContainer>  
            </>
        )
    }
}

