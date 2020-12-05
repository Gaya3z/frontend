import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles((theme) => ({
    typography : {
        color : "#777",
        textAlign : "center",
        maxWidth : 750,
        marginTop : "15px",
        [theme.breakpoints.down('sm')] : {
            fontSize : "14px",
            marginRight : "2%",
            marginLeft : "2%",
        },
    },
    searcharea : {
        justifyContent : "center",
        alignItems : "center",
        display : 'flex',
        [theme.breakpoints.down('sm')] : {
            maxWidth : '90vw',
        },
    },
    related : {
        textAlign : 'center'
    },
    coursecard : {
        display : 'flex',
        flexDirection  : "row",
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column",
        },
    },
    menulist  :{ 
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        width: "fit-content",
        boxSizing: "border-box",
        textDecoration: "none",
        padding : "0 20px",
        [theme.breakpoints.down('sm')] : {
            textAlign : "center",
            margin : "auto",
        },
    },
    link : {
        color : "#777",
        textDecoration : 'none',
        padding : 5,
        textShadow : '0px 4px 4px rgba(0, 0, 0, 0.15)',
        '&:hover' : {
            transform: 'scale(1.01)',
            transition: 'all 0.1s',
        },
    },
    cataloglink : {
        color : 'var(--primary)',
    },
    certificate : {
        maxWidth : "fit-content",
        display : 'flex',
        flexDirection : "row",  
        marginLeft : "auto",
        marginRight : "10%",
        [theme.breakpoints.down('sm')] : {
            margin : "auto",
        },
    },
    container : {
        marginTop : "100px",
        maxWidth : "100vw",
        marginRight : "12%",
        marginLeft : "7%",
        alignItems : "center",
        justifyContent : "center",
        display : "flex",
        flexDirection : "column",
        [theme.breakpoints.down('sm')] : {
            marginLeft : "2%",
            marginRight : "2%",
        },
    },
    order : { 
        display : "flex",
    },
    sectionMobile : {
        display : "none",
        [theme.breakpoints.down('sm')] : {
            display : "flex",
        },
    },
    sectionDesktop : {
        display : "flex",
        [theme.breakpoints.down('sm')] : {
            display : "none",
        },
    },
}))