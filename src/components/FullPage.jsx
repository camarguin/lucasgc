import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Home/Home';
import About from './About/About';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';
import Fade from './Fade/Fade';

const anchors = ["Home", "About", "Featured Project", "Projects", "Tesimonials"];

const FullPage = () => (
    <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        navigation
        navigationPosition={"left"}
        navigationTooltips={anchors}
        showActiveTooltip={false}
        licenseKey={process.env.REACT_APP_LICENSE}

        render={({ state, fullpageApi }) => {
            return (
                <div className="FullPage">
                    <div className="section">
                        <Home />
                    </div>
                    <div className="section">
                        <Fade>
                            <About />
                        </Fade>
                    </div>
                    <div className="section">
                        <Fade>
                            <FeaturedProject />
                        </Fade>
                    </div>
                    <div className="section">
                        <Fade>
                            <Projects />
                        </Fade>
                    </div>
                    <div className="section">
                        <Fade>
                            <Testimonials />
                        </Fade>
                    </div>
                </div>
            );
        }}
    />
);

export default FullPage;