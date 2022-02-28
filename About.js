import React from "react";
import Bannerimg from '../../images/GT2.jpg';
import "../../styles/About.css";
import img1 from '../../images/passport.jpg';


function About() {
    return (
        <div className="about">
            <div className="aboutTop"
            style = {{backgroundImage: `url(${Bannerimg})`}}>
            </div>
            <div className="aboutBottom">
                <h1>ABOUT ME</h1>
                <p>I am is Erland Mulaokar, a second year student at Georgia Tech. I am
                    studying Computer Science and also pursuing a minor in Economics.
                    My professional interests include web development and data science. 
                    I created this website as my first web-dev project and plan on improving
                    this website as well as adding links to new projects or courses I complete
                    in the future. *Picture coming soon*
                </p>
            </div>
        </div>
    )
}

export default About;