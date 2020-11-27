import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Btn from '../Button/Btn';
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
navsolid : {
    background : "#fff",
    color : "#5C0090",
},
nav : {
    background: (props) =>
    props.color === 'transparent'
      ? 'transparent'
      : '#fff',
      color: (props) => 
      props.color === 'transparent'
      ? '#ffffff'
      : '#5C0090',
    justifyContent : "center",
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
    height: 80,
    },
toolbar : {
    marginLeft : "10%",
    marginRight : "10%",
    maxWidth : 1300,
    width : "100%",
    [theme.breakpoints.down('md')]: {
        marginLeft : "0%",
        marginRight : "0%"
      },
},
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',

    },
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
  link : { 
    textDecoration : "none",
    color: "inherit",
    [theme.breakpoints.down('sm')]: {
      color : "inherit"
    },
  },
  paper: {
    padding: theme.spacing(2),
    color : "#777",
  },
  menuhover : {
    '&:hover' : {
      color : '#5C0090'
    }
  },
  menulink : {
    textDecoration : "none",
    color : "inherit",
  },
}));

  Navbar.propTypes = {
    color: PropTypes.oneOf(['transparent', 'white']).isRequired,
  };

export default function Navbar(props) {
  const { color, ...other } = props;
  const navclasses = useStyles(props);

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [nav , setNavbar] = React.useState('navsolid');
  const navRef = React.useRef();
  navRef.current = nav
  const changeBackground = () => {
    if(window.scrollY > 100){
        setNavbar('nav')
    }else{
        setNavbar('navsolid')
    }
}

  window.addEventListener('scroll', changeBackground);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <MenuItem>
    <Link className = {classes.link} to = "/catalog">Courses</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/customizepage">Tracks</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/blogs">Blog</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/login">Login</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/signup">Signup</Link>
    </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={clsx(navclasses.nav ,classes[navRef.current])} {...other}>
        <Toolbar className = {classes.toolbar}>
          <Link className = {classes.link} to = "/">
          <Typography variant="h1" noWrap>
            COURSENATOR
          </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
              <MenuItem>
              <Link className = {classes.link}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              onMouseOver = {handleToggle}>
                Courses
                </Link>
              </MenuItem>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList 
                className = {classes.paper}
                autoFocusItem={open}
                id="menu-list-grow" 
                >
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Data Science
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Business
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Humanities
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Art and Design
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Programming
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Personal Development
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Health and Nutrition
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Language Learning
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Computer Science
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Information Technology
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Social Science
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Physical Science and Engineering
                </MenuItem>
                </Link>
                <Link to = "/course" className = {classes.menulink}>
                <MenuItem 
                className = {classes.menuhover}>
                  Education and Teaching
                </MenuItem>
                </Link>
                  <MenuItem>
                  <Link to = "/catalog">View Catalog</Link>
                  </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
              <MenuItem>
              <Link className = {classes.link} to = "/customizepage">Tracks</Link>
              </MenuItem>
              <MenuItem>
              <Link className = {classes.link} to = "/blogs">Blogs</Link>
              </MenuItem>
              <MenuItem>
              <Link className = {classes.link} to = "/login">Login</Link>
              </MenuItem>
              <Btn color = "white">
              <Link className = {classes.link} to = "/signup">Signup</Link>
              </Btn>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
