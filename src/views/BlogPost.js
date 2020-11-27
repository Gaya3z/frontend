import { Btn } from './../components'
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import img from './../assets/img/blog-placeholder.svg'
import styled from 'styled-components'
import { SocialIconLink, SocialIcons, SocialMediaWrap } from './../components/Footer/FooterElements';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField'
import anonymous from './../assets/img/anonymous.png'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'

const Circle = styled.div`
    width : 95px;
    height : 95px;
    border-radius : 50px ;
    border : 0.5px solid rgba(0, 0, 0, 0.2);
    box-sizing : border-box;
    @media screen and (max-width : 768px){
        width : 75px;
        height : 75px;
    }
`

const useStyles = makeStyles((theme) => ({
    body : {
        display : "flex",
        flexDirection : "column",
        alignItems : 'center',
        justifyContent : 'center',
        color : "#2D283E",
        zIndex: 1,
        width: "100%",
        maxWidth: "1200px",
        marginRight: "auto",
        marginLeft: "auto",
        paddingRight:"50px",
        paddingLeft: "50px",
        [theme.breakpoints.down('md')]: {
            paddingLeft : "0%",
            paddingRight : "0%"
          },
    },
    top : {
        marginLeft : "15%",
        marginRight : "15%",
        maxWidth : 1300,
        width : "100%",
        display : "flex",
        height : 100,
        alignItems : 'center',
        [theme.breakpoints.down('md')]: {
            marginLeft : 0,
            marginRight : 0,
          },
    },
    title : {
        color : "#5C0090",
        [theme.breakpoints.down('sm')]: {
            fontSize : 32,
            margin : 5,
          },
    },
    vr : {
        borderLeft: "1px solid",
        opacity : 0.5,
        height: 32.5,
        marginRight : 15,
        marginLeft : 15,
    },
    goback : {
        textDecoration : "none",
        color : "inherit",
        marginRight : "auto",
        display : "flex",
        alignItems : "center",
    },
    blogtitle : {
        fontSize : 28,
        marginTop : 15,
        fontWeight : 600,
        [theme.breakpoints.down('sm')] : {
            fontSize : 24,
        },
    },
    img : {
        width : 150,
        height : 150,
        margin : 5,
        marginLeft : 30,
    },
    blogcontent : {
        width : "90%",
        margin : 10,
        fontSize : 18,
    },
    author : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        width : "fit-content",
    },
    section : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        padding : 10,
        [theme.breakpoints.down('sm')] : {
            padding : 0,
        },
    },
    authorName : {
        textAlign : "left",
        marginLeft : "-110px",

    },
    hr : {
        width : "450px",
        border: "1px solid",
        opacity : 0.2,
        marginTop : 10,
        marginBottom : 10,
        [theme.breakpoints.down('sm')]: {
            width : "90vw",
            marginTop : "20px",
          },
    },
    commentSection : {
        display : "flex",
        marginRight : "auto",
        flexDirection : "column",
    },
    commentBox : {
        display : "flex",
        flexDirection : "column",
        border : "0.5px solid #802BB1",
        boxShadow : "0px 5px 4px rgba(0, 0, 0, 0.15)",
        borderRadius : 10,
        width : "fit-content",
        height : "fit-content",
        padding : "20px"
    },
    input: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '45ch',
        },
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    comment : {
        display : "flex",
        padding : "10px 0px",
    },
    postbtn : {
        marginLeft : "auto",
    },
    viewComment : {
        display : "flex",
        padding : 5,
        border : "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing : "border-box",
        boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.2)",
        borderRadius : 10,
        width : "700px",
        height : "fit-content",
        margin : "30px 0px"
    },
    viewSection : {
        display : "flex",
        alignItems : "left",
        margin : "10px",
        flexDirection : "column",
        justifyContent : "center",
        padding : 10,
    },
    dp : {
        width : "95px",
        height : "95px",
        borderRadius : "50px" ,
        border : "0.5px solid rgba(0, 0, 0, 0.2)",
        boxSizing : "border-box",
    },
    commentTypography : {
        color : "#1A2237",
        margin : "10px 0px"
    },
    like : {
        marginBottom : "10px",
        display : "flex",
    },
    link : {
        textDecoration : "none"
    },
}))

export default function BlogPost() {
    const classes = useStyles()
    return (
        <>
            <div className = {classes.top} >
            <Link className = {classes.link} to ="/">
            <Typography variant="h1" className = {classes.title} noWrap>
            COURSENATOR
            </Typography>
            </Link>
          <div className = {classes.vr} />
          <Typography variant="h1" className = {classes.title} noWrap>
            BLOG
          </Typography>
            </div>
            <div className = {classes.body}>
                <div className = {classes.goback}>
                    <Link to ="/blogs" className = {classes.goback}>
                        <ArrowBackIcon />
                        Back to main page
                    </Link>
                </div>
                <Typography className = {classes.blogtitle}>Lorem ipsum dolor sit amet</Typography>
                <Typography>By Name</Typography>
                <Typography>Date</Typography>
                <img src = {img} className = {classes.img} alt = "Blog" />
                <Typography className = {classes.blogcontent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec augue diam. 
                Ut tempus elit nec ante sollicitudin ullamcorper. Donec dolor felis, fringilla ac 
                bibendum nec, maximus nec nunc. Curabitur venenatis luctus augue sed ullamcorper. 
                Vestibulum magna velit, vulputate at tincidunt id, lacinia non mi. Sed quis pharetra 
                nunc, ac suscipit quam. Donec sollicitudin dictum velit id rhoncus. Praesent imperdiet 
                est ac ante mattis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin in laoreet purus. Morbi sollicitudin sollicitudin dolor eu feugiat. Ut in efficitur 
                augue. Cras sit amet nisl ut dolor lacinia vulputate id id dui. Cras pharetra a odio iaculis
                congue. Suspendisse potenti. <br /> <br />
                In interdum nunc nunc, eu aliquet ipsum elementum eget. Donec vehicula ultrices tellus, 
                quis pulvinar lorem efficitur sed. Aliquam eget accumsan urna, sit amet aliquam turpis. 
                Pellentesque ut iaculis augue. Sed ornare nunc a consequat malesuada. Nunc semper dapibus
                interdum. Integer varius cursus mollis. Curabitur consequat ligula sed feugiat varius. 
                Vestibulum libero sapien, commodo eget urna placerat, venenatis euismod enim. Cras 
                porttitor molestie ante, nec finibus arcu pellentesque vel. Etiam sit amet tempus eros. 
                Integer metus dui, consequat vitae sapien sit amet, maximus condimentum mi. Curabitur 
                luctus, lectus id lacinia faucibus, libero augue tristique velit, sit amet varius tellus 
                ligula et turpis
                </Typography>
                
                <div className = {classes.hr} />
                <div className = { classes.author }>
                    <div className = {classes.section}>
                        <Circle />
                    </div>
                    <div className = {classes.section}>
                        <div className = {classes.authorName}>
                        <Typography>Blog post by :</Typography>
                        <Typography style = {{ fontWeight : "600" }}>Name</Typography>
                        </div>
                        <SocialMediaWrap style = {{ marginTop : "0px" }}>
                        <SocialIcons style = {{ margin : "20px" }}>
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
                </div>
                <div className = {classes.hr} />
                <div className = {classes.commentSection}>
                <Typography variant = "h5" style = {{ color : "var(--primary)", fontWeight : 600}}>Post Comment</Typography>
                <div className = {classes.commentBox}>
                    <Typography>Join the discussion</Typography>
                    <div className = {classes.comment}>
                    <Typography>Add a comment:</Typography>
                    <form className = {classes.input}>
                        <TextField
                        id="comment"
                        label="Comment"
                        multiline
                        rows={2}
                        variant="outlined"/>
                        </form>
                    </div>
                    <Btn className = {classes.postbtn}>Post</Btn>
                </div>
                <div className = {classes.viewComment}>
                    <div className = {classes.viewSection}>
                    <Circle> 
                    <img src = {anonymous} className = {classes.dp} alt = "" />
                    </Circle>
                    </div>
                    <div className = {classes.viewSection}>
                    <div style = {{display : "flex" , alignItems : "center" }}>
                    <Typography style = {{ fontSize : 20, fontWeight : 600 }}>Name</Typography>
                    <Typography style = {{ marginLeft : 5}}>~ one year ago</Typography>
                    </div>
                    <Typography className = {classes.commentTypography}>
                    Lorem ipsum dolor sit amet, fabulas molestiae nam ad, eos an 
                    sonet deleniti volutpat. Mel sonet persecuti complectitur ut. Ea 
                    nam etiam soleat volutpat, dolor maiestatis ius ad. Liber eirmod 
                    et sea, ridens commodo feugait cum te, at vix dolor tritani.
                    </Typography>
                    <div className = {classes.like}>
                        <ThumbUpIcon style = {{ marginRight : 5 }} />
                        <Typography style = {{ marginRight : 10 }}>0</Typography>
                        <ThumbDownAltIcon style = {{ marginRight : 5 }} />
                        <Typography>0</Typography>
                    </div>
                    <div style = {{ display : "flex" }}>
                    <Typography style = {{ marginRight : 5 }}>
                        Reply :
                    </Typography>
                    <form className = {classes.input}>
                        <TextField
                        id="reply"
                        label="Reply"
                        multiline
                        rows={1}
                        variant="outlined"/>
                        </form>
                    </div>  
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
