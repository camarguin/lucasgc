import React from 'react';
import './About.css';
import Button from '../Button/Button';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillDribbbleCircle } from 'react-icons/ai';
import AboutPicture from '../../media/AboutPicture.jpg';

const About = () => {

    return (
        <div className="About">
            <div className="AboutLeft">
                <div className='about-title'>
                    <h5><hr /> &nbsp;&nbsp;&nbsp;ABOUT ME</h5>
                </div>
                <h1>Lucas Gerhardt de Camargo</h1>
                <p>
                    My name is Lucas and I am a Web developer based in Vancouver, BC.
                    I love bringing ideas to life in a website and I enjoy learning new things about technology.
                    I have worked with HTML, CSS, JAVASCRIPT and I am recently working with React.
                    If you have interested in working with me please feel free to contact me.
                </p>
                <ul>
                    <li><a href="https://github.com/camarguin" target="_blank"><AiFillGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/lucas-gerhardt-de-camargo-358396190/" target="_blank"><AiFillLinkedin /></a></li>
                    <li><a href=""><AiFillInstagram /></a></li>
                    <li><a href=""><AiFillDribbbleCircle /></a></li>
                </ul>
                <div className="buttons-container">
                    <Button onClick={() => { console.log("Download CV") }} link="mailto:lucasgcamargo@icloud.com">Contact Me</Button>
                    <Button onClick={() => { console.log("Download CV") }}>Resume</Button>
                </div>
            </div>
            <div className="AboutRight">
                <img src={AboutPicture} alt="" />
            </div>
        </div>
    );
};

export default About;