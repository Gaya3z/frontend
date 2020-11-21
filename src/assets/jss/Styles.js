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
    },
    menulist  :{ 
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        width: "fit-content",
        boxSizing: "border-box",
        textDecoration: "none",
        padding : 20,
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
        width : "fit-content",
        display : 'flex',
        flexDirection : "row",  
        marginLeft : "77%"
    },
    container : {
        marginTop : 100,
    },
}))