import React, { useState } from 'react';
import Button from '../../Button/Button';

import './ProjectCard.css';

const ProjectCard = (props) => {

    return (
        <div className="ProjectCard">
            <div className="card">
                <div className="content">
                    <h2 className="title">Advocacy Lawyer Website</h2>
                    <p className="copy">Website made for an advocacy lawyer office which can describe the services they provide as lawyer in Brazil<br />
                        Technologies: HTML, CSS, JAVASCRIPT
                    </p>
                    <Button link="https://camarguin.github.io/Tio-Project/" target="_blank">Visit Website</Button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Pro Caliber Lacross</h2>
                    <p className="copy">Website made for a professional junior lacross club<br />
                        Technologies: HTML, CSS, JAVASCRIPT
                        </p>
                    <Button link="https://camarguin.github.io/lacrosseProject/" target="_blank">Visit Website</Button>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Cricket Club</h2>
                    <p className="copy">Website made for the West Vancouver cricket club<br />
                        Technologies: HTML, CSS, JAVASCRIPT
                        </p>
                    <Button link="https://camarguin.github.io/Mid-Term-Project/" target="_blank">Visit Website</Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;