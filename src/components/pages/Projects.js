import React from "react";
import "../../styles/Projects.css";
import img from "../../images/Vs_ss.png";

function Projects() {
    return (
        <div className="projects">
            <div className="project1">
                <div className="pic"
                style = {{backgroundImage: `url(${img})`}}
                >
                </div>
                <h1>Project 1: Porfolio Website (2022)</h1>
                <span className="s1">
                <p> My first project is this website. It is written in JavaScript
                    using React and CSS and is meant to be my portfolio once I have
                    more projects to add. The features include the navigation bar,
                    the linked footer (other than my LinkedIn), a hover effect for the 
                    "About Me" button on the home page, and 3 pages.
                </p>
                </span>
                <span2 className="s2">
                <p2 className="p2">
                    More to come!
                </p2>
                </span2>
            </div>
        </div>
    )
}

export default Projects;