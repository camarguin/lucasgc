import React from 'react';

import './CardTestimonial.css';
import lquotes from '../../media/LeftQuotes.svg';
import Button from '../Button/Button';

const CardTestimonial = (props) => {
    switch (props.author) {
        case "steve":
            return (
                <div className="CardTestimonial">
                    <img src={lquotes} alt="" />
                    <p>
                        I have known him for the whole year as a tech-head instructor. He worked as a scrum master a few times because
                        he has a great leadership. He took care of website optimization, modification, and other maintenance for his
                        group. His participation, punctuality, and enthusiasm fulfilled all the requirements any companies need...
                    </p>
                    <h4>Steve Kim</h4>
                    <h6>President of Synet Computer Inc.</h6>
                    {/* <Button link="https://docdro.id/gTrdpjT" target="_blank">Download</Button> */}
                </div>
            )
        case "tyler":
            return (
                <div className="CardTestimonial">
                    <img src={lquotes} alt="" />
                    <p>
                        Over two months, I had many requests and continuously changed my vision as the
                        website started to come together. Lucas was patient with me,
                        asked questions, made suggestions, and showed creativity and imagination by
                        implementing things that were above and beyond what I could have thought of myself...
                    </p>
                    <h4>Tyler Pace</h4>
                    <h6>Founder and CEO of Pro Caliber Lacrosse</h6>
                    {/* <Button link="https://docdro.id/Xtmr95B" target="_blank">Download</Button> */}
                </div>
            )
        default:
            break;

    }
};

export default CardTestimonial;