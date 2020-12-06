import React, { Component } from 'react'
import arrowRight from '.../../../public/arrowRight.svg'
import arrowLeft from '.../../../public/arrowLeft.svg'
import imageOne from '.../../../public/placeholder.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarouselContent } from './SubElements';

export class SubjectsCarousel extends Component {
    render() { 
        const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <img src = {  arrowRight }  alt = " > "/>,
        prevArrow: <img src = {  arrowLeft } alt = " < "/>,
        slidesPerRow : 1,
        variableWidth : true,
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true, 
              }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  variableWidth : false,
                }
              },
          ]
      };
      
    return (
        <>
            <Slider {...settings} >
            <CarouselContent>
                <img style = {{ marginRight : "30px" }} src = {imageOne} alt = "imageOne" />
            </CarouselContent>
            <CarouselContent>
                <img style = {{ marginRight : "30px" }} src = {imageOne} alt = "imageTwo"  />
            </CarouselContent>
            <CarouselContent>
                <img style = {{ marginRight : "30px" }} src = {imageOne} alt = "imageOne"  />
            </CarouselContent>
            <CarouselContent>
                <img style = {{ marginRight : "30px" }} src = {imageOne} alt = "imageOne"  />
            </CarouselContent>
            <CarouselContent>
                <img style = {{ marginRight : "30px" }} src = {imageOne} alt = "imageTwo"  />
            </CarouselContent>
            <CarouselContent>
                <img style = {{ marginRight : "30px" }} src = {imageOne} alt = "imageOne"  />
            </CarouselContent>
        </Slider>
        </>
    )
    }
}
