import { BreadCrumb, Navbar, Btn} from '../components'
import React from 'react'
import { SearchBar } from '../components/HeroSection/HeroSecElements'
import { Button, ButtonGroup, makeStyles, Typography } from '@material-ui/core'
import { Title } from '../globalStyles'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { ExternalLink } from 'react-external-link'
import TextField from '@material-ui/core/TextField'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LanguageIcon from '@material-ui/icons/Language';
import {FaAward} from 'react-icons/fa'
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import DateRangeIcon from '@material-ui/icons/DateRange';
import clsx from 'clsx'
import styled from 'styled-components'
import anonymous from './../assets/img/anonymous.png'
import ReadOnly from './../components/StarRating/ReadOnly'
import Pristine from './../components/StarRating/Pristine'
import img from './../assets/img/logo-placeholder.png'

const Line = styled.hr`
    width : 300px;
    opacity : 0.2;
    @media screen and (max-width : 768px){
        width : 100%;
    }
`

function Buttongroup(){
    const classes = useStyles()
    return(
        <>
        <ButtonGroup className = {classes.btngrp}>
            <Button >
                <Typography className = {classes.ratingIcon}>
                    0
                </Typography>
            </Button>
            <Button>
                <ShareIcon className = {classes.ratingIcon} />
            </Button>
            <Button>
                <BookmarkIcon className = {classes.ratingIcon} />
            </Button>
        </ButtonGroup>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        marginLeft : "10%",
        marginRight : "10%",
        marginTop : "100px",
        maxWidth : "100vw",
        [theme.breakpoints.down('sm')] : {
            marginLeft : "3%",
            marginRight : "3%",
        },
    },
    sectionDesktop : {
        display : "flex",
        [theme.breakpoints.down('768')] : {
            display : "none",
        },
    },
    sectionMobile : {
        display : "none",
        [theme.breakpoints.down('768')] : {
            display : "flex",
        },
    },
    desktop : {
        display : "flex",
        [theme.breakpoints.down('sm')] :{
            display : "none",
        },
    },
    btngrp : {
        marginRight : "25px",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('xs')] : {  
        marginBottom : "10px",
        marginTop : "-20px",
        },
    },
    breadcrumb : {
        display : "flex",
        marginRight : "auto",
    },
    search : {
        display : "flex",
        maxWidth : "90vw",
        alignItems : "center",
    },
    titleSection : {
        display : "flex",
        flexDirection : "column",
        maxWidth : "100vw",
        width : "100%",
        [theme.breakpoints.down('sm')] :{
        },
    },
    titleSubsection : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "column",
        marginRight : "auto",
    },
    logo : {
        display : "flex",
        flexDirection : "column",
        marginLeft : "auto",
        [theme.breakpoints.down('sm')] : {
            marginLeft : "0px",
            marginBottom : "25px",
        },
    },
    university : {
        color : "var(--grey)",
        marginTop : "5px",
        marginBottom : "5px",
    },
    ratingSection : {
        display : "flex",
        marginRight : "1%",
        marginLeft : "1%",
        [theme.breakpoints.down('xs')] :{
            flexDirection : "column",
            marginRight : "55%",
        },
    },
    ratingSubsection : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        marginRight : "25px",
        marginTop : "5px",
    },
    ratingLinks : {
        textDecoration : "none",
        color : "var(--primary)",
        display : "flex",
        alignItems : "center",
    },
    ratingIcon : {
        width : "24px",
        height : "24px",
        marginRight : "7px",
        color : "var(--primary)"
    },
    overviewSection : {
        display : "flex",
        marginRight : "auto",
        paddingLeft : "5px",
        paddingRight : "5px",
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column-reverse",
            alignItems : "center",
            marginRight : "0px",
        },
    },
    overviewSubsection : {
        paddingRight : "20px",
        [theme.breakpoints.down('sm')] : {
            paddingRight : "0px",
            marginBottom : "25px",
        },
    },
    detailSection : {
        marginTop : "5px",
        marginBottom : "10px",
        display : "flex",
        [theme.breakpoints.down('sm')] : {
            marginLeft : "10px",
        },
    },
    detailSubsection : {
        marginRight : "20px",
        display : "flex",
        flexDirection : "column",
    },
    course : {
        display : "flex",
        flexDirection : "column",
        padding : "20px",
        justifyContent : "center",
        marginLeft : "auto",
        width:"fit-content",
        border : "1px solid rgba(0, 40, 141, 0.25)",
        boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius : 15,
        [theme.breakpoints.down('sm')] : {
            margin : 0,
        },
    },
    coursecard : {
        textDecoration : 'none',
        color : "#000",
        marginRight : "auto",
        margin : "10px 0px ",
        padding : "5px" ,
        display : "flex",
    },
    prolink : {
        marginTop : 25,
    },
    btn : {
        marginTop : 20,
        marginLeft : "25%",
        marginBottom : -10
    },
    subdata : {
        display : "flex",
        marginRight : "180px",
        flexDirection : "column",
        marginBottom : "25px",
        [theme.breakpoints.down('md')] : {
            marginRight : "110px",
        },
        [theme.breakpoints.down('sm')] : {
            marginBottom : "0px",
            marginTop : "10px",
            marginRight : "0px",
            alignItems : "center",
        },
    },
    bold : {
        fontWeight : "bold",
    },
    normal : {
        fontWeight : "normal",
    },
    writereview : { 
        marginRight : "auto",
        width : "750px",
        height : "fit-content",
        background : "#FFFFFF",
        border : "0.5px solid #802BB1",
        boxShadow : "0px 5px 4px rgba(0, 0, 0, 0.25)",
        borderRadius : 10,
        display : "flex",
        flexDirection : "column",
        padding : 25,
        margin : 15,
        marginLeft : 0,
        marginBottom : "30px",
        [theme.breakpoints.down('sm')] : {
            width : "90vw",
            height : "fit-content",
        },
    },
    showreview : { 
        marginRight : "auto",
        width : "750px",
        height : "fit-content",
        border : "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing : "border-box",
        boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.2)",
        borderRadius : 10,
        padding : 25,
        display : "flex",
        alignItems : "center",
        marginBottom : "25px" ,
        [theme.breakpoints.down('sm')] : {
            width : "90vw",
            height : "fit-content",
        },
    },
    reviewtext : {
        color : "#4B4E54"
    },
    reviewname : {
        fontWeight : 600,
        color : "#5C0090",
        marginBottom : 10,
    },
    reviewtitle : {
        display : "flex",
    },
    input: {
        display : "flex",
        marginTop : "-25px",
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '55ch',
        },
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    review :{
        display : "flex",
        padding : 20
    },
    postbtn : {
        marginLeft : "auto",
    },
    coursetext : {
        marginLeft : 15, 
    },
    icon : {
        width : 22.5,
        height : 22.5,
    },
    ratingsection2 : {
        display : "flex",
        color : "#000",
        [theme.breakpoints.down('sm')] : {
        },
    },
    reviews : {
        display : "flex",
        flexDirection : "column",
        marginLeft : "20px",
    },
    comment : {
        width : "550px",
        marginTop :"-20px",
        color : "var(--grey)",
        [theme.breakpoints.down('sm')] : {
            width : "100%",
            height : "fit-content",
            fontSize : '14px',
        },
    },
    dp : {
        width : "95px",
        height : "95px",
        borderRadius : "50px" ,
        border : "0.5px solid rgba(0, 0, 0, 0.2)",
        boxSizing : "border-box",
        [theme.breakpoints.down('xs')] : {
            width : "50px",
            height : "50px",
            marginRight : "20px",
        },
    },
    inputlabel : {
        alignItems : "center",
        justifyContent : "center",
        marginTop : "5px",
    },
    reviewSection : {
        display : "flex",
        flexDirection : "column",
        marginRight : "auto",
    },
    load : {
        display : "flex",
        marginLeft : "40%",
        marginBottom : "5%",
    },
    month : {
        color : "var(--grey)",
        fontSize : "14px",
    },
    img : {
        width : "180px",
        marginBottom : "20px",
        [theme.breakpoints.down('sm')] : {
            marginBottom : "0px",
        },
    },
    desktop2 : {
        display : "flex",
        [theme.breakpoints.down('xs')] : {
            display : "none"
        },
    },
    mobile : {
        display : "none",
        [theme.breakpoints.down('xs')] : {
            display : "flex"
        },
    },
}))

export default function ProductPage() {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <div className = {classes.root}>
                <div className = {classes.breadcrumb}>
                <BreadCrumb />
                </div>
                <div className = {classes.search}>
                    <SearchBar placeholder =  "Search thousands of course"/>
                    <Btn>Search</Btn>
                </div>
                <div className = {classes.titleSection}>
                    <div className = {classes.titleSubsection}>
                        <Title>
                            Course Title
                        </Title>
                    </div>
                    <div className = {classes.university}>
                        University Name via Provider
                    </div>
                    <div className = {classes.ratingSection}>
                        <div className = {classes.ratingSubsection}>
                            <ReadOnly />
                        </div>
                        <div className = {classes.sectionDesktop}>
                            <div className = {classes.ratingSubsection}>
                                <Link className = {classes.ratingLinks}>0 reviews</Link>
                            </div>
                            <div className = {classes.ratingSubsection}>
                                <Link className = {classes.ratingLinks}>
                                    <ShareIcon className = {classes.ratingIcon} />
                                    Bookmarks
                                </Link>
                            </div>
                            <div className = {classes.ratingSubsection}>
                                <Link className = {classes.ratingLinks}>
                                    <BookmarkIcon className = {classes.ratingIcon} />
                                    Share Course
                                </Link>
                            </div>
                        </div>
                        <div className = {classes.sectionMobile}>
                            <Buttongroup />
                        </div>
                        <div className = {clsx(classes.logo, classes.desktop)}>
                            <Typography>
                                Offered by :
                            </Typography>
                            <img src = {img} className = {classes.img} alt = "Logo" />
                        </div>
                    </div>
                </div>
                <div className = {classes.overviewSection}>
                    <div className = {classes.overviewSubsection}>
                        <Typography variant = "h4">
                            Overview
                        </Typography>
                        <Typography className = {classes.detailSection}>
                            In 2020 the world will generate 50 times the amount of data as in 2011. 
                            And 75 times the number of information sources (IDC, 2011). Being able to 
                            use this data provides huge opportunities and to turn these opportunities 
                            into reality, people need to use data to solve problems.
                            <br/><br/>
                            This Specialization, in collaboration with Tableau, is intended for newcomers
                            to data visualization with no prior experience using Tableau. We leverage 
                            Tableau's library of resources to demonstrate best practices for data 
                            visualization and data storytelling. You will view examples from real world
                            business cases and journalistic examples from leading media companies.
                            <br/><br/>
                            By the end of this specialization, you will be able to generate powerful 
                            reports and dashboards that will help people make decisions and take action 
                            based on their business data. You will use Tableau to create high-impact 
                            visualizations of common data analyses to help you see and understand your 
                            data. You will apply predicative analytics to improve business decision making. 
                            The Specialization culminates in a Capstone Project in which you will use 
                            sample data to create visualizations, dashboards, and data models to prepare 
                            a presentation to the executive leadership of a fictional company. 
                        </Typography>
                    </div>
                    <div className = {classes.overviewSubsection}>
                        <div className = {classes.course}>
                            <ReactPlayer 
                            muted = {true}
                            controls = {true}
                            width = {"300px"}
                            height = {"150px"}
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>

                            <ExternalLink href = "https://google.com" >
                                <Btn className = {classes.btn}>Go to course</Btn>
                            </ExternalLink>

                            <Link  className = { classes.coursecard }>
                                <CastForEducationIcon className = {classes.prolink}/>
                                <Typography 
                                className = {clsx(classes.coursetext,classes.prolink)}>
                                    Provider Name
                                </Typography>
                            </Link>
                            <Line />

                            <div className = { classes.coursecard }>
                                <LanguageIcon className = {classes.icon} />
                                <Typography className = {classes.coursetext}>
                                    Language
                                </Typography>
                            </div>
                            <Line />

                            <div className = { classes.coursecard }>
                                <FaAward className = {classes.icon} />
                                <Typography className = {classes.coursetext}>
                                    Certificate details
                                    </Typography>
                            </div>
                            <Line />

                            <div className = { classes.coursecard }>
                                <HourglassFullIcon className = {classes.icon} />
                                <Typography className = {classes.coursetext}>
                                    Course duration
                                </Typography>
                            </div>
                            <Line />
                            
                            <div className = { classes.coursecard }>
                                <DateRangeIcon className = {classes.icon}  />
                                <Typography 
                                className = {classes.coursetext}>
                                    Start date
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {classes.overviewSection}>
                    <div className = {classes.subdata}>
                        <Typography className = {classes.bold}>
                            Course taught by:
                        </Typography>
                        <Typography className = {classes.normal}>
                            Instructor's name
                        </Typography>
                    </div>
                    <div className = {classes.subdata}>
                        <Typography className = {classes.bold}>
                            Subject
                        </Typography>
                        <Typography className = {classes.normal}>
                            Subject Name
                        </Typography>
                    </div>
                    <div className = {classes.subdata}>
                        <Typography className = {classes.bold}>
                            Sub-Subject
                        </Typography>
                        <Typography className = {classes.normal}>
                            Sub-Subject Name
                        </Typography>
                    </div>
                </div>
                <div className = {classes.reviewSection}>
                    <Title style = {{ marginRight : "auto" }}>Review</Title>
                    <div className = {classes.writereview}>
                        <div className = { classes.reviewtitle }>
                            <Typography className = { classes.reviewtext }>
                                Provide your review for the course &nbsp;
                            </Typography>
                            <Typography className = { classes.reviewname }>
                                Course Name
                            </Typography>
                        </div>
                        <Pristine />
                        <>
                        <form className = {classes.input}>
                            <Typography className = {classes.inputlabel}>
                                Add a comment
                            </Typography>
                            <TextField
                            id="review"
                            label="Review"
                            multiline
                            rows={2}
                            variant="outlined"/>
                        </form>
                        </>
                        <Btn className =  {classes.postbtn}>Post</Btn>
                    </div>
                    {[...Array(3)].map(showreviewarray => {
                    return( <div className = {classes.showreview}>
                        <> 
                            <img src = {anonymous} className = {clsx(classes.dp, classes.desktop2)} alt = "" />
                        </>
                        <div className = {classes.reviews}>
                            <div className = {classes.ratingsection2}>
                            <img src = {anonymous} className = {clsx(classes.dp, classes.mobile)} alt = "" />
                            <ReadOnly />
                            <Typography className = {classes.month}>a month ago</Typography>
                            </div>
                            <Typography className = {classes.comment}>
                            Lorem ipsum dolor sit amet, fabulas molestiae nam ad,
                            eos an sonet deleniti volutpat. Mel sonet persecuti 
                            complectitur ut.Ea nam etiam soleat volutpat, dolor 
                            maiestatis ius ad. Liber eirmod et sea, ridens commodo 
                            feugait cum te, at vix dolor tritani.
                            </Typography>
                        </div>
                    </div>
                    )
                    })}
                    <Link className = {classes.load}>Load more</Link>
                </div>
            </div>
        </>
    )
}
