import React from 'react';
import ReactFloaterJs from 'react-floaterjs';
import { BsArrowDown } from 'react-icons/bs';

import './Home.css';
import ComputerGuy from '../../media/ComputerGuyImg.svg';
import JsFloat from '../../media/JS.svg';
import HtmlFloat from '../../media/HTML.svg';
import CssFloat from '../../media/CSS.svg';
import CodeFloat from '../../media/CODE.svg';
import LgcIcon from '../../media/IconElement.svg';
import Fade from '../Fade/Fade';


const Home = () => {
    return (
        <div className="Home">
            <img className="home-icon" src={LgcIcon} alt="" />
            <div className="HomeLeft">
                <Fade>
                    <h1>
                        Feel the power <br />
                        of a well crafted<br />
                        website
                    </h1>
                </Fade>
                <Fade>
                    <h3><BsArrowDown size="0.7em" />Meet Lucas</h3>
                </Fade>
                <Fade>
                    <svg className="arrows">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </Fade>
            </div>
            <Fade >
                <div className="HomeRight">
                    <ReactFloaterJs>
                        <img className="float-icons" id="jsIcon" src={JsFloat} alt="" />
                        <img className="float-icons" id="htmlIcon" src={HtmlFloat} alt="" />
                        <img className="float-icons" id="cssIcon" src={CssFloat} alt="" />
                        <img className="float-icons" id="codeIcon" src={CodeFloat} alt="" />
                    </ReactFloaterJs>
                    <img src={ComputerGuy} id="computerguyImg" alt="" />
                </div>
            </Fade>
        </div>
    );
};

export default Home;