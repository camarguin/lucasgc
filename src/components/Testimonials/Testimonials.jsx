import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';
import CardTestimonial from './CardTestimonial';
import TestimonialsImg from '../../media/TestimonialsImg.svg';

const Testimonials = (props) => {
    const settings = {
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: false,
        pauseOnHover: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear"
    }
    return (
        <div className="Testimonials">
            <div className="TestimonialsLeft">
                <div className='testimonials-title'>
                    <h5><hr /> &nbsp;&nbsp;&nbsp;FEEDBACK</h5>
                </div>
                <h1>What people say...</h1>
                <Slider {...settings} className="sliderTestimonials">
                    <CardTestimonial author="steve" />
                    <CardTestimonial author="tyler" />
                </Slider>
            </div>
            <div className="TestimonialsRight">
                <img src={TestimonialsImg} alt="" />
            </div>
        </div>
    );
};

export default Testimonials;