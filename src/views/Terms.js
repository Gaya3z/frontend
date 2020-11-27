import { Navbar } from './../components'
import React from 'react'
import { Title, Container } from './../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    typography : {
        lineHeight : "1.7",
        padding : 10,
        marginTop : 10,
        marginBottom : 20,
    },
}))

export default function Terms() {
    const classes = useStyles()
    return (
        <>
        <Navbar />
        <Container>
            <Title>
            Terms and Conditions
            </Title>
            <Typography className = {classes.typography}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur nec augue diam. Ut tempus elit nec ante sollicitudin
             ullamcorper. Donec dolor felis, fringilla ac bibendum nec, maximus 
             nec nunc. Curabitur venenatis luctus augue sed ullamcorper. 
             Vestibulum magna velit, vulputate at tincidunt id, lacinia non 
             mi. Sed quis pharetra nunc, ac suscipit quam. Donec sollicitudin 
             dictum velit id rhoncus. Praesent imperdiet est ac ante mattis ornare.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in 
            laoreet purus. Morbi sollicitudin sollicitudin dolor eu feugiat.
            Ut in efficitur augue. Cras sit amet nisl ut dolor lacinia vulputate
            id id dui. Cras pharetra a odio iaculis congue. Suspendisse potenti. <br/>
            In interdum nunc nunc, eu aliquet ipsum elementum eget. Donec vehicula ultrices
            tellus, quis pulvinar lorem efficitur sed. Aliquam eget accumsan urna, sit amet 
            aliquam turpis. Pellentesque ut iaculis augue. Sed ornare nunc a consequat 
            malesuada. Nunc semper dapibus interdum. Integer varius cursus mollis. Curabitur 
            consequat ligula sed feugiat varius. Vestibulum libero sapien, commodo eget urna 
            placerat, venenatis euismod enim. Cras porttitor molestie ante, nec finibus arcu 
            pellentesque vel. Etiam sit amet tempus eros. Integer metus dui, consequat vitae 
            sapien sit amet, maximus condimentum mi. Curabitur luctus, lectus id lacinia faucibus, 
            libero augue tristique velit, sit amet varius tellus ligula et turpis. <br/>
            Ut velit nisi, pulvinar ut sapien non, faucibus vulputate lorem. Donec nec nibh 
            ac neque cursus varius. Integer mauris tortor, mollis ac magna nec, consectetur
            tempor orci. Morbi condimentum tempus lorem, vel tempus metus varius vel.
            Duis est erat, lacinia eget ligula a, semper finibus ligula. Donec mi magna, 
            mattis porta risus et, sollicitudin dapibus elit. Nam mattis dolor quis urna elementum, 
            sed aliquet sapien pharetra. Pellentesque leo leo, sollicitudin id vestibulum sit amet,
            ultricies sagittis justo. Sed at dolor sodales, tempus ipsum sit amet, ultrices odio. <br/> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec augue diam. 
            Ut tempus elit nec ante sollicitudin ullamcorper. Donec dolor felis, fringilla ac 
            bibendum nec, maximus nec nunc. Curabitur venenatis luctus augue sed ullamcorper. 
            Vestibulum magna velit, vulputate at tincidunt id, lacinia non mi. Sed quis pharetra 
            nunc, ac suscipit quam. Donec sollicitudin dictum velit id rhoncus. Praesent imperdiet 
            est ac ante mattis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin in laoreet purus. Morbi sollicitudin sollicitudin dolor eu feugiat. Ut in efficitur 
            augue. Cras sit amet nisl ut dolor lacinia vulputate id id dui. Cras pharetra a odio 
            iaculis congue. Suspendisse potenti. <br/>
            In interdum nunc nunc, eu aliquet ipsum elementum eget. Donec vehicula ultrices tellus, 
            quis pulvinar lorem efficitur sed. Aliquam eget accumsan urna, sit amet aliquam turpis. 
            Pellentesque ut iaculis augue. Sed ornare nunc a consequat malesuada. Nunc semper dapibus 
            interdum. Integer varius cursus mollis. Curabitur consequat ligula sed feugiat varius. 
            Vestibulum libero sapien, commodo eget urna placerat, venenatis euismod enim. 
            Cras porttitor molestie ante, nec finibus arcu pellentesque vel. Etiam sit amet 
            tempus eros. Integer metus dui, consequat vitae sapien sit amet, maximus condimentum mi.
            Curabitur luctus, lectus id lacinia faucibus, libero augue tristique velit, sit amet varius 
            tellus ligula et turpis. <br/>
            Ut velit nisi, pulvinar ut sapien non, faucibus vulputate lorem. Donec nec nibh ac 
            neque cursus varius. Integer mauris tortor, mollis ac magna nec, consectetur tempor orci. 
            Morbi condimentum tempus lorem, vel tempus metus varius vel. Duis est erat, lacinia eget 
            ligula a, semper finibus ligula. Donec mi magna, mattis porta risus et, sollicitudin dapibus elit. 
            Nam mattis dolor quis urna elementum, sed aliquet sapien pharetra. Pellentesque leo leo, 
            sollicitudin id vestibulum sit amet, ultricies sagittis justo. Sed at dolor sodales, tempus 
            ipsum sit amet, ultrices odio. <br/>
            In interdum nunc nunc, eu aliquet ipsum elementum eget. Donec vehicula ultrices tellus, 
            quis pulvinar lorem efficitur sed. Aliquam eget accumsan urna, sit amet aliquam turpis. 
            Pellentesque ut iaculis augue. Sed ornare nunc a consequat malesuada. Nunc semper dapibus 
            interdum. Integer varius cursus mollis. Curabitur consequat ligula sed feugiat varius. 
            Vestibulum libero sapien, commodo eget urna placerat, venenatis euismod enim. Cras porttitor
             molestie ante, nec finibus arcu pellentesque vel. Etiam sit amet tempus eros. Integer metus dui, 
             consequat vitae sapien sit amet, maximus condimentum mi. Curabitur luctus, lectus id lacinia 
             faucibus, libero augue tristique velit, sit amet varius tellus ligula et turpis.
            </Typography>
        </Container>
        </>
    )
}
