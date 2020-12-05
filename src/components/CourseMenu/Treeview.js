import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Styles } from './../../assets/jss/Styles'
import {Link} from 'react-router-dom'
import { MenuItem, MenuList, Typography } from '@material-ui/core'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    height : "fit-content",
    flexGrow: 1,
    maxWidth: "100vw",
    marginBottom : "25px",
  },
});

export default function Treeview() {
  const classes = useStyles();
  const styles = Styles()
  return (
    <div className = {classes.root}>
        <Accordion>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon />}
            aria-controls = "panel1a-content"
            id = "panel1a-header">
                <Typography 
                class = {styles.link}
                style = {{ fontWeight : '600' , color : "#000" }}>
                        Related courses
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <Link className = {styles.link}>
                            Data Visualization
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className = {styles.link} >
                            Data Analysis
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className = {styles.link} >
                            Data Mining
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className = {styles.link} >
                            Big Data
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className = {styles.link} >
                            Bio Informatics
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link 
                        className = {clsx(styles.cataloglink , styles.link)} 
                        to = "/catalog">
                            View Catalogue
                        </Link>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
    </div>
  );
}
