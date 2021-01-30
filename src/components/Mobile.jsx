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
                <Fade>
                    <About />
                </Fade>
            </div>
            <div className="FeaturedProjectGridContainer">
                <Fade>
                    <FeaturedProject />
                </Fade>
            </div>
            <div className="ProjectsGridContainer">
                <Fade>
                    <Projects />
                </Fade>
            </div>
            <div className="TestimonialsGridContainer">
                <Fade>
                    <Testimonials />
                </Fade>
            </div>
        </div>
    );
};

export default Mobile;