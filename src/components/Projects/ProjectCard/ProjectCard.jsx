import React, { useState } from 'react';
import Button from '../../Button/Button';

import './ProjectCard.css';

const ProjectCard = (props) => {

    return (
        <div className="ProjectCard">
            <div className="card">
                <div className="content">
                    <h2 className="title">Combatly (In Development)</h2>
                    <p className="copy">Small war board game which you have to conquer the whole map <br />
                        Technologies: React, Firebase
                    </p>
                    <Button link="https://camarguin.github.io/Combatly-Web/" target="_blank">Visit Website</Button>
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