import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder"; 

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    return (
      <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <Link to= "/">
                <button className= "btn">Erland Mulaokar</button>
            </Link>
             <div className="hiddenLinks">
                <Link to="/"> Home </Link>
                <Link to="/menu"> menu </Link>
                <Link to="/about"> about </Link>
             </div>
            </div>

          <div className= "rightSide">
              <Link to="/"> Home </Link>
              <Link to="/menu"> Projects </Link>
              <Link to="/about"> About </Link>
              <button onClick = {toggleNavbar}>
                <ReorderIcon />
              </button>
          </div>
      </div>
    );
  }

export default Navbar;