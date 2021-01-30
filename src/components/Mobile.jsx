import React from 'react';
import About from './About/About';
import Fade from './Fade/Fade';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';

import './Mobile.css';

const Mobile = () => {
    return (
        <div className="Mobile">
            <div className="HomeGridContainer">
                <Home />
            </div>
            <div className="AboutGridContainer">
                <About />
            </div>
            <div className="FeaturedProjectGridContainer">
                <FeaturedProject />
            </div>
            <div className="ProjectsGridContainer">
                <Projects />
            </div>
            <div className="TestimonialsGridContainer">
                <Testimonials />
            </div>
        </div>
    );
};

export default Mobile;