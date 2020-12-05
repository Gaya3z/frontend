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
import {GoBook} from 'react-icons/go'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {RiCloseCircleLine} from 'react-icons/ri'
import { Popover} from '@material-ui/core'

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
    marginLeft : "7%",
    marginRight : "7%",
    maxWidth : "100vw",
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
    fontSize  : 17,
    fontWeight : 600,
    [theme.breakpoints.down('sm')]: {
      color : "inherit",
      fontSize  : 16,
      fontWeight : "normal",
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
  list: {
    margin : 5,
  },
  fullList: {
    width: '80vw',
  },
  coursenator : {
    [theme.breakpoints.down('sm')] : {
      fontSize : 24,
    },
  },
  closeicon : {
    height : 20,
    width : 20,
  },
  trackhover : {
    padding: theme.spacing(1),
    color : "var(--grey)",
    opacity : "0.5",
  },
}));

  Navbar.propTypes = {
    color: PropTypes.oneOf(['transparent', 'white']).isRequired,
  };

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    const active = Boolean(anchorEl);
    const id = active ? 'tracks' : undefined;
    

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleFade = () => {
      setAnchorEl(null);
    };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuList>
      <Link to = "/course" className = {classes.menulink}>
                <MenuItem>
                <Link color="inherit">
                <RiCloseCircleLine className = {classes.closeicon} />
                </Link>
                </MenuItem>
            
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
    </div>
  );

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
    <Link className = {classes.link} to = "/customizepage">Tracks</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/blogs">Blog</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/login">Login</Link>
    </MenuItem>
    <MenuItem>
    <Link className = {classes.link} to = "/signup">Sign up</Link>
    </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={clsx(navclasses.nav ,classes[navRef.current])} {...other}>
        <Toolbar className = {classes.toolbar}>
          <Link className = {classes.link} to = "/">
          <Typography className ={classes.coursenator} variant="h1" noWrap>
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
                  <Link to = "/catalog">View Catalogue</Link>
                  </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
              <MenuItem>
              <Link 
              className = {classes.link} 
              to = "/customizepage"
              aria-describedby = "tracks"
              onMouseOver = {handleClick}>
                  Tracks
                </Link>
              </MenuItem>
              <Popover
                      id={id}
                      open={active}
                      anchorEl={anchorEl}
                      onMouseOut={handleFade}
                      onClickAway = {handleFade}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}>
                      <Typography className = {classes.trackhover}>
                        Coming soon
                      </Typography>
                    </Popover>
              <MenuItem>
              <Link className = {classes.link} to = "/blogs">Blogs</Link>
              </MenuItem>
              <MenuItem>
              <Link className = {classes.link} to = "/login">Login</Link>
              </MenuItem>
              <Btn color = "white">
              <Link className = {classes.link} to = "/signup">Sign Up</Link>
              </Btn>
          </div>
          <div className={classes.sectionMobile}> 

            <div>
            {['bottom'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton 
                onClick={toggleDrawer(anchor, true)}
                color="inherit">
                <GoBook />
                </IconButton>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>

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