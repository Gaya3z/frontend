import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const list = ['Data Science', 'Business', 'Humanities','Art and Design', 'Programming', 'Personal Development','Health & Nutrition',
                 'Language Learning', 'Computer Science', 'Information Technology','Social Science', 'Physical Science & Engineering',
                  'Education & Teaching'];
  

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography style = {{ display : "flex" , alignItems : 'center' , justifyContent : "center" }} >{children}</Typography>
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
    id: `subjects-scroll-${index}`,
    'aria-controls': `subjects-scroll-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SubjectsScroll() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listItems = list.map((item, i) =>  <Tab label = {item} {...a11yProps(i)} />) ;


  const items = list.map((item, i) => (
    <TabPanel value={value} index={i}>
        {item}
    </TabPanel>
  )
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="subject scroll"
        >
            {listItems}
        </Tabs>
      </AppBar>
      {items}
    </div>
  );
}
