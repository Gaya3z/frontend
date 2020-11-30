const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    container : {
        maxWidth : "100vw",
        marginLeft : "5%",
        marginRight : "5%",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",  
        flexDirection : "column",      
        margin : "15px",
    },
    row : {
        margin : "5px",
        display : "flex",
        marginRight : "0px",
        [theme.breakpoints.down('986')] : {
            flexDirection : "column",
        },
    },
    card : {
        width : "fit-content",
        height : "240px",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        margin : "15px",
        boxShadow : "5px 5px 20px rgba(0, 0, 0, 0.2)",
    },
    cardinfo : {
        margin : '5px',
    },
    img : {
        width : "225px",
        height : "175px",
        marginBottom : "auto",
    },
    breakpoints : { 
        display : "flex",
        [theme.breakpoints.down('496')] : {
            flexDirection : "column",
        },
    },
}))