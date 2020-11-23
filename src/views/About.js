import { Navbar } from './../components'
import { Container , Title } from './../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const Styles = makeStyles((theme) => ({
    conatiner : {
        marginTop : 100,
    },
    typography : {
        color : "#777",
        textAlign : "center",
        padding : 25,
        marginBottom : 50,
        lineHeight : 2,
        maxWidth : '60vw',
        margin : 'auto' ,
    },
}))

export default function About() {
    const classes = Styles()
    return (
        <>
        <Container className = {classes.conatiner}>
            <Navbar />
            <Title>
                About Us
            </Title>
            <Typography className = {classes.typography}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada.
            Morbi rhoncus est ac ipsum euismod, id varius erat cursus. Donec enim neque, mollis maximus
            vestibulum ac, ullamcorper sed ligula. Etiam pellentesque velit tellus, nec tempor massa ultricies
            eget. Morbi sodales rhoncus pretium. Nam tincidunt augue magna, eu consectetur purus feugiat
            eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Praesent leo arcu, elementum non nulla ac, pulvinar viverra enim. Vestibulum aliquam nulla sit amet
            leo imperdiet, sed vestibulum augue rhoncus. Ut aliquam dolor est, nec convallis libero viverra
            semper. Integer ac lobortis nisl. Nunc consectetur velit metus, eget pulvinar diam commodo id.
            Pellentesque non finibus augue. 
            </Typography>
        </Container>
        </>
    )
}
