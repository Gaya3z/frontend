import React, { Component } from 'react'
import arrowLeft from '.../../../public/Left.svg'
import arrowRight from '.../../../public/Right.svg'
import imageOne from '.../../../public/placeholder.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
              }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      };
    return (
        <>
            <Slider {...settings} >
            <div>
                <img src = {imageOne} alt = "imageOne" />
            </div>
            <div>
                <img src = {imageOne} alt = "imageTwo"  />
            </div>
            <div>
                <img src = {imageOne} alt = "imageOne"  />
            </div>
            <div>
                <img src = {imageOne} alt = "imageOne"  />
            </div>
            <div>
                <img src = {imageOne} alt = "imageTwo"  />
            </div>
            <div>
                <img src = {imageOne} alt = "imageOne"  />
            </div>
        </Slider>
        </>
    )
    }
}
