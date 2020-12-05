import React from 'react'
import {useStyles} from './CatalogElements'
import {Title} from './../../globalStyles'
import {Link} from 'react-router-dom'

export default function Catalogue() {
    const classes = useStyles()
    return (
        <>
            <div className = {classes.container}>
                <Title>Catalogue</Title>
                <div className = {classes.row}>
                    <div className = {classes.breakpoints}>
                        <div className = {classes.list}>
                            <div to = "/course" className = {classes.title}>Data Science</div>
                            <Link to = "/course" className = {classes.item}>Data Visualization</Link>
                            <Link to = "/course" className = {classes.item}>Data Analysis</Link>
                            <Link to = "/course" className = {classes.item}>Data Mining</Link>
                            <Link to = "/course" className = {classes.item}>Big Data</Link>
                            <Link to = "/course" className = {classes.item}>BioInformatics</Link>
                        </div>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Business</div>
                            <Link className = {classes.item} to = '/course'>Accounting</Link>
                            <Link className = {classes.item} to = '/course'>Marketing</Link>
                            <Link className = {classes.item} to = '/course'>Entrepreneurship</Link>
                            <Link className = {classes.item} to = '/course'>Management</Link>
                            <Link className = {classes.item} to = '/course'>Finance</Link>
                            <Link className = {classes.item} to = '/course'>Business Law</Link>
                            <Link className = {classes.item} to = '/course'>Human Resources</Link>
                            <Link className = {classes.item} to = '/course'>Sales</Link>
                        </div >
                    </div>
                    <div className = {classes.breakpoints}>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Data Science</div>
                            <Link className = {classes.item} to = '/course'>Data Visualization</Link>
                            <Link className = {classes.item} to = '/course'>Data Analysis</Link>
                            <Link className = {classes.item} to = '/course'>Data Mining</Link>
                            <Link className = {classes.item} to = '/course'>Big Data</Link>
                            <Link className = {classes.item} to = '/course'>BioInformatics</Link>
                        </div>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Business</div>
                            <Link className = {classes.item} to = '/course'>Accounting</Link>
                            <Link className = {classes.item} to = '/course'>Marketing</Link>
                            <Link className = {classes.item} to = '/course'>Entrepreneurship</Link>
                            <Link className = {classes.item} to = '/course'>Management</Link>
                            <Link className = {classes.item} to = '/course'>Finance</Link>
                            <Link className = {classes.item} to = '/course'>Business Law</Link>
                            <Link className = {classes.item} to = '/course'>Human Resources</Link>
                            <Link className = {classes.item} to = '/course'>Sales</Link>
                        </div >
                    </div>
                </div>
                <div className = {classes.row}>
                    <div className = {classes.breakpoints}>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Data Science</div>
                            <Link className = {classes.item} to = '/course'>Data Visualization</Link>
                            <Link className = {classes.item} to = '/course'>Data Analysis</Link>
                            <Link className = {classes.item} to = '/course'>Data Mining</Link>
                            <Link className = {classes.item} to = '/course'>Big Data</Link>
                            <Link className = {classes.item} to = '/course'>BioInformatics</Link>
                        </div>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Business</div>
                            <Link className = {classes.item} to = '/course'>Accounting</Link>
                            <Link className = {classes.item} to = '/course'>Marketing</Link>
                            <Link className = {classes.item} to = '/course'>Entrepreneurship</Link>
                            <Link className = {classes.item} to = '/course'>Management</Link>
                            <Link className = {classes.item} to = '/course'>Finance</Link>
                            <Link className = {classes.item} to = '/course'>Business Law</Link>
                            <Link className = {classes.item} to = '/course'>Human Resources</Link>
                            <Link className = {classes.item} to = '/course'>Sales</Link>
                        </div >
                    </div>
                    <div className = {classes.breakpoints}>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Data Science</div>
                            <Link className = {classes.item} to = '/course'>Data Visualization</Link>
                            <Link className = {classes.item} to = '/course'>Data Analysis</Link>
                            <Link className = {classes.item} to = '/course'>Data Mining</Link>
                            <Link className = {classes.item} to = '/course'>Big Data</Link>
                            <Link className = {classes.item} to = '/course'>BioInformatics</Link>
                        </div>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Business</div>
                            <Link className = {classes.item} to = '/course'>Accounting</Link>
                            <Link className = {classes.item} to = '/course'>Marketing</Link>
                            <Link className = {classes.item} to = '/course'>Entrepreneurship</Link>
                            <Link className = {classes.item} to = '/course'>Management</Link>
                            <Link className = {classes.item} to = '/course'>Finance</Link>
                            <Link className = {classes.item} to = '/course'>Business Law</Link>
                            <Link className = {classes.item} to = '/course'>Human Resources</Link>
                            <Link className = {classes.item} to = '/course'>Sales</Link>
                        </div >
                    </div>
                </div>
                <div className = {classes.row}>
                    <div className = {classes.breakpoints}>
                        <div className = {classes.list}>
                            <div className = {classes.title}>Data Science</div>
                            <Link className = {classes.item} to = '/course'>Data Visualization</Link>
                            <Link className = {classes.item} to = '/course'>Data Analysis</Link>
                            <Link className = {classes.item} to = '/course'>Data Mining</Link>
                            <Link className = {classes.item} to = '/course'>Big Data</Link>
                            <Link className = {classes.item} to = '/course'>BioInformatics</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
