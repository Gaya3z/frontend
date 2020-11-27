import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from 'react-router-dom'
import img from './../../assets/img/hero-bg.png'
import {Btn} from './../../components'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GiBlackFlag} from 'react-icons/gi'
import {BsBookmarksFill} from 'react-icons/bs'
import {RiUserFollowFill} from 'react-icons/ri'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow : 1,
  },
  card : {
    margin : 20,
    width : "fit-content",
    border : "0.5px transparent rgba(0, 0, 0, 0.5)",
    boxSizing : "border-box",
    boxShadow : "4px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius : 15,
    padding : 20,
    [theme.breakpoints.down('sm')] : {
      width : '90vw'
    },
  },
  body : {
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center"
  },
  table: {
    minWidth: 700,
  },
  path : {
    display : "flex",
    width : 700,
    height : 200,
    border : "0.3px solid white",
    boxSizing : "border-box",
    boxShadow : "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius : "10px",
    margin : 5,
    justifyContent : "center",
    [theme.breakpoints.down('sm')] : {
        flexDirection : "column",
        height : "fit-content",
        width : "80%",
        alignItems : "center",
    },
},
section : {
    margin : 30,
    display : "flex",
    flexDirection : "column",
    alignItems : "left",
    justifyContent : "center",
    [theme.breakpoints.down('sm')] : {
        margin : 10,
        alignItems : "center"
    },
},
picture : {
    width : 180,
    height : 150,
    [theme.breakpoints.down('sm')] : {
      width : "100%",
      height : "100%",
  },
},
pathTitle : {
    fontSize : 24,
    fontWeight : 600,
},
pathBtn : {
  marginLeft : "auto"
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
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.paper,
    color: "#5C0090",
    fontWeight : 600,
    fontSize : 16
  },
  body: {
    fontSize: 14,
    color : "#4B4E54"
  },
  icon : {
    height : 30,
    width : 30,
    color : 'var(--primary)',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(no, coursetitle, university, provider, remove) {
  return { no, coursetitle, university, provider, remove };
}

const rows = [
  createData(1, 'Course Title','University Name', 'Provider Name', 'Remove'),
];

function createDataFollow(no, coursetitle, remove) {
  return { no, coursetitle, remove };
}

const follow = [
  createDataFollow(1, 'Course Title', 'Remove'),
];

export default function CenteredTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const renderMobileView = (
  <Paper square className={classes.root}>
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
    aria-label="full width tabs"
    centered
  >
    <Tab icon={<BsFillPersonLinesFill className = {classes.icon} />} aria-label="course" />
    <Tab icon={<GiBlackFlag className = {classes.icon} />} aria-label="path" />
    <Tab icon={<BsBookmarksFill className = {classes.icon} />} aria-label="bookmark" />
    <Tab icon={<RiUserFollowFill className = {classes.icon} />} aria-label="follow" />
  </Tabs>
</Paper>
  )


  return (
    <div className = {classes.body}>
      <div className = {classes.card}>
      <div className = {classes.sectionDesktop}>
      <Paper className={classes.root} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs"
          centered
        >
          <Tab label="My Courses" {...a11yProps(0)} />
          <Tab label="Course Path" {...a11yProps(1)} />
          <Tab label="Bookmarks" {...a11yProps(2)} />
          <Tab label="Follows" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      </div>
      <div className = {classes.sectionMobile}>
        {renderMobileView}
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography style = {{ fontWeight : 600 , fontSize : 18}}>
            Courses you are enrolled in :
          </Typography>
          <hr />
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No. </StyledTableCell>
            <StyledTableCell align="center">Course Title</StyledTableCell>
            <StyledTableCell align="center">University</StyledTableCell>
            <StyledTableCell align="center">Provider</StyledTableCell>
            <StyledTableCell align="center">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.coursetitle}
                <br />
                <Link to = "/course">
                Go to course
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.university}</StyledTableCell>
              <StyledTableCell align="center">{row.provider}</StyledTableCell>
              <StyledTableCell align="center">
                <Link>
                {row.remove}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className = {classes.body}>
                <div className = {classes.path}>
                    <div className = {classes.section}>
                    <img src = {img} className = {classes.picture} alt = "path" />
                    </div>
                    <div className = {classes.section}>
                    <Typography>
                        PATH NAME
                    </Typography>
                    <Typography className = {classes.pathTitle}>
                        Lorem Ipsum
                    </Typography>
                    <Btn className = {classes.pathBtn}>View Course Path</Btn>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Typography style = {{ fontWeight : 600 , fontSize : 18}}>
            Courses you have bookmarked :
          </Typography>
          <hr />

          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No. </StyledTableCell>
            <StyledTableCell align="center">Course Title</StyledTableCell>
            <StyledTableCell align="center">University</StyledTableCell>
            <StyledTableCell align="center">Provider</StyledTableCell>
            <StyledTableCell align="center">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.coursetitle}
                <br />
                <Link to = "/course">
                Go to course
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">{row.university}</StyledTableCell>
              <StyledTableCell align="center">{row.provider}</StyledTableCell>
              <StyledTableCell align="center">
                <Link>
                {row.remove}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Typography style = {{ fontWeight : 600 , fontSize : 18}}>
            Courses you are following :
          </Typography>
          <hr />

          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No. </StyledTableCell>
            <StyledTableCell align="center">Course Title</StyledTableCell>
            <StyledTableCell align="center">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {follow.map((follow) => (
            <StyledTableRow key={follow.no}>
              <StyledTableCell component="th" scope="row">
                {follow.no}
              </StyledTableCell>
              <StyledTableCell align="center">
                {follow.coursetitle}
                <br />
                <Link to = "/course">
                Go to course
                </Link>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Link>
                {follow.remove}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </TabPanel>
      </SwipeableViews>
    </div>
    </div>
  );
}
