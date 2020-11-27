import { makeStyles } from '@material-ui/core'

export const Styles = makeStyles((theme) => ({
    typography : {
        color : "#777",
        textAlign : "center",
        maxWidth : 750,
        margin : "auto",
        padding : 15,
    },
    searcharea : {
        justifyContent : "center",
        margin : "auto",
        alignItems : "center",
        display : 'flex',
        [theme.breakpoints.down('sm')]:{
        flexDirection : "column",
        },
    },
    related : {
        textAlign : 'center'
    },
    coursecard : {
        display : 'flex',
        flexDirection  : "row",
        [theme.breakpoints.down('500')] : {
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
        [theme.breakpoints.down('500')] : {
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
        [theme.breakpoints.down('500')] : {
            margin : "auto",
        },
    },
    container : {
        marginTop : 100,
    },
    order : { 
        display : "flex",
        
    },
}))