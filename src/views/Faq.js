import { Navbar } from '../components'
import React from 'react'
import { Container, Title } from '../globalStyles'
import { makeStyles, Typography, TextField } from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    question : {
        fontWeight : 600,
        color : "#000",
        marginBottom : "5px",
        fontSize : 16,
    },
    content : {
        display : "flex",
        flexDirection : "column",
        marginTop : 10,
        marginLeft : "10%",
        marginRight : "10%",
        [theme.breakpoints.down('sm')] : {
            marginLeft : 0,
            marginRight : 0,
        },
    },
    answer : {
        marginBottom : "25px",
        width : "90%",
        fontSize : 16,
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    search : {
        display : "flex",
        maxWidth : "100vw",
        alignItems : "center",
        justifyContent : "right",
        [theme.breakpoints.down('sm')] : {
            justifyContent : "center",
        },
    },
}))

export default function Faq() {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Container>
                
            <div className = {classes.search}>
                    <TextField
                        label="Search"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                        />
                    </div>
                <Title>
                    FAQs
                </Title>
                <div className = {classes.content}>
                {[...Array(5)].map(faq => {
                return (
                    <div>
                    <Typography className = {classes.question}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </Typography>
                    <Typography className = {classes.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur nec augue diam. Ut tempus elit nec ante sollicitudin 
                        ullamcorper. Donec dolor felis, fringilla ac bibendum nec, 
                        maximus nec nunc.
                    </Typography>
                    </div>
                )
                })}
                </div>
            </Container>
        </>
    )
}
