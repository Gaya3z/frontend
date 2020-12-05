import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MenuItem, MenuList, Typography } from '@material-ui/core'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { FooterLink } from './FooterElements'

const useStyles = makeStyles({
  root: {
    height : "fit-content",
    flexGrow: 1,
    maxWidth: "100vw",
    marginBottom : "25px",
  },
  accordian : {
    background : "var(--secondary)",
    color : "#fff",
  },
  icon : {
      color : "#fff",
  },
});

export default function Menu() {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel1a-content"
            id = "panel1a-header">
                <Typography style = {{ fontWeight : '600' }}>
                        About
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <FooterLink to='/about'>About Us</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/blogs'>Blogs</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/faq'>FAQs</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/contactus'>Contact Us</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/newsandarticles'>News and Articles</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to = "/termsandconditions">Terms and Conditions</FooterLink>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel2a-content"
            id = "panel2a-header">
                <Typography style = {{ fontWeight : '600' }}>
                        Search Courses By
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <FooterLink to='/catalog'>Subjects</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/provider'>Providers</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/language'>Languages</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/university'>Institutions</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/university'>Universities</FooterLink>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel3a-content"
            id = "panel3a-header">
                <Typography style = {{ fontWeight : '600' }}>
                        Quick Links
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <FooterLink to='/'>Top courses</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Best paid courses</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Best language courses</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Free certificate courses</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Online MBA from top B-Schools</FooterLink>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
    </div>
  );
}
