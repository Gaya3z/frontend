import { Button, ButtonGroup, Popover, makeStyles, Typography, Menu, MenuItem, IconButton } from '@material-ui/core'
import React from 'react'
import BreadCrumb from '../BreadCrumbs/BreadCrumb'
import Btn from '../Button/Btn'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root : {
        height : "50px",
        alignItems: 'center',
        display : 'flex',
        justifyContent: 'center',
        marginRight : "10%",
        marginLeft : "10%",
        marginTop : "auto",
        marginBottom : 20,
        [theme.breakpoints.down('sm')]: {
            marginLeft : "0%",
            marginRight : "0%",
            flexDirection : "column",
            marginTop : '5%',
          },
    },
    btn : {
        marginLeft : 'auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft : 0,
          },
    },
    toolbar : {
        justifyContent : "center",
        diaply : "flex",
        alignItems : "center",
        color : "#000",
        background: "#E2E6F0",
        height : "fit-content",
        width : 900,
        borderRadius : 10,
    },
    link : {
        textDecoration : 'none',
        color : "#000",
        padding : 20,
    },
    filter : {
        color : "#000",
        fontWeight : 500,
        height : 50,
        textTransform : 'none',
        width : 165
    },
    typography: {
        padding: theme.spacing(2),
      },
      grow: {
        flexGrow: 1,
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
}))

function CourseMenu() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (<></>);

    return (
        <>
        <div className = {classes.root} >
        <BreadCrumb />
        <div className = { classes.btn }>
            <Btn>Follow</Btn>
            <Btn>Share List</Btn>
        </div>
        </div>
        <div className = { classes.grow }>
        <div className = {clsx(classes.root, classes.sectionDesktop)}>
        <ButtonGroup 
        size="large" 
        variant="contained" 
        color="#E2E6F0" 
        aria-label="contained primary button group">
        <Button 
        aria-describedby={id}
        className = {classes.filter}
        endIcon={<ArrowDropDownIcon />} 
        onMouseOver = {handleClick}>
        Language
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className = {classes.typography}>No Info Available</Typography>
      </Popover>
        <Button 
        aria-describedby={id} onMouseOver ={handleClick}
        className = {classes.filter} endIcon={<ArrowDropDownIcon />} >
        Level
        </Button>
        <Button 
        aria-describedby={id} onMouseOver ={handleClick}
        className = {classes.filter} endIcon={<ArrowDropDownIcon />} >
        Duration
        </Button>
        <Button 
        aria-describedby={id} onMouseOver ={handleClick}
        className = {classes.filter} endIcon={<ArrowDropDownIcon />} >
        Provider
        </Button>
        <Button 
        aria-describedby={id} onMouseOver ={handleClick}
        className = {classes.filter} endIcon={<ArrowDropDownIcon />} >
        Start Date 
        </Button>
        <Button 
        aria-describedby={id} onMouseOver ={handleClick}
        className = {classes.filter} endIcon={<ArrowDropDownIcon />} >
        Learning Type
        </Button>
      </ButtonGroup> 
        </div>
        </div>
        </>
    )
}

export default CourseMenu