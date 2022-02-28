import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return <div className="footer">
        <div className="socialMedia1"> 
            <LinkedInIcon/> 
        </div>
        <div className="socialMedia"> 
            LinkedIn: https://www.linkedin.com/in/erland-mulaokar-326a781b9/
        </div>
        <div className="btns">
            <Link to= "/">
                <button className= "btn1">Home</button>
            </Link>
            <Link to= "/menu">
                <button className= "btn1">Projects</button>
            </Link>
            <Link to= "/about">
                <button className= "btn1">About</button>
            </Link>
        </div>
        </div>
}

export default Footer;