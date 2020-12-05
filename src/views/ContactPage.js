import { Container, Title } from './../globalStyles'
import React from 'react'
import { Btn, Navbar } from './../components'
import { makeStyles, Typography, TextField} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { SocialIconLink, SocialIcons, SocialMediaWrap } from './../components/Footer/FooterElements';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    text : {
        textAlign : "center",
        fontSize : "18px",
        width : "80%",
        marginTop : "-20px",
        padding : "20px",
        lineHeight : 1.7,
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    details : {
        display : "flex",
        flexDirection : "column",
        padding : "20px",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            padding : "10px",
        },
    },
    cta : {
        display : "flex",
        flexDirection : "column",
        height : "fit-content",
        width : "fit-content",
        alignItems : "center",
        justifyContent : "center",
        border: "0.5px solid rgba(0, 0, 0, 0.005)",
        boxSizing: "border-box",
        boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "25px",
        padding : "25px",
        marginTop : "20px",
        marginBottom : "20px",
    },
    ctatext : {
        padding : "10px",
        width : "80%",
        textAlign : "center",
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

export default function ContactPage() {
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
                Contact Us
            </Title>
            <div className = {classes.details}>
            <Typography className = {classes.text}>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Sed tempor ornare nisi vehicula malesuada. 
            Morbi rhoncus est ac ipsum euismod, id varius 
            erat cursus. Donec enim neque, mollis maximus 
            vestibulum ac, ullamcorper sed ligula.
            </Typography>
            <div className = {classes.cta}>
                <Title>Get in Touch</Title>
                <Typography className = {classes.ctatext}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed tempor ornare nisi 
                    vehicula malesuada
                </Typography>
                <Btn>
                    Email Us
                    <PlayArrowIcon />
                </Btn>
            </div>
            <Typography style = {{ fontSize : '20px', marginTop : "20px" }} >
                Or, reach us out on :
            </Typography>
        <SocialMediaWrap style = {{ marginTop : "15px" }}>
          <SocialIcons>
          <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Telegram'>
              <FaTelegram color = "var(--primary)" />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
            </div>
        </Container>  
        </>
    )
}
