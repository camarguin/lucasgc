import React from 'react';

import './Button.css';

const Button = ({children, link, target}) => {
    return (
        <a href={link} target={target} className="Button effect">
            <span>{children}</span>
        </a>
        // <button className="Button effect" onClick={onClick}>
        //     <span>{children}</span>
        // </button>
    );
};

export default Button;