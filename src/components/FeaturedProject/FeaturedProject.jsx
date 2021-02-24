import React from 'react';

import './FeaturedProject.css';
import featuredProjectImg from '../../media/PizzaShop.png';
import Button from '../Button/Button';

const FeaturedProject = () => {
    return (
        <div className="FeaturedProject">
            <div className="FeaturedProjectLeft">
                <div className='featuredProject-title'>
                    <h5><hr /> &nbsp;&nbsp;&nbsp;FEATURED PROJECT</h5>
                </div>
                <h1>Pizzashop Website</h1>
                <p>
                    {/* The last real client project I have worked on, a advocacy lawyer website which has the objective to promote the service
                    of the present group of Lawyers in Brazil helping the customers to have access to all information they need about the services
                    the Gerhardt Advocacy can offer and all information about their process online. */}
                    The last real world example project I have worked on, a fictional Pizzaria Order
                    website where you can choose your pizza, size, quantity, add toppings and see the price of your order.
                    This project was made as a training for React hooks and new features of ES6.
                    <br />
                    <br />
                    <strong>Technologies: </strong> React, CSS, Figma(Design)
                </p>
                <div className="buttonsFp-container">
                    <Button link="https://camarguin.github.io/pizzashop/#/" target="_blank">See Project</Button>
                </div>
            </div>
            <div className="FeaturedProjectRight">
                <img src={featuredProjectImg} alt="" />
            </div>
        </div>
    );
};

export default FeaturedProject;