import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

import './Projects.css';

const Projects = () => {

    return (
        <div className="Projects">
            <div className="projects-title">
                <h5><hr /> &nbsp;&nbsp;&nbsp;SOME OTHER PROJECTS</h5>
            </div>
            <h1 className="projects-h1">Projects I have worked on</h1>
            <p className="projects-p">
                {/* I have started with basic HTML and CSS with a little Javascript in my first project and 
                what I have learned since my first real project is that a organized code is always important, especially when working in a team. */}
            </p>
            <ProjectCard />
        </div >
    );
};

export default Projects;