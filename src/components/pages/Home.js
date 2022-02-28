import React from 'react';
import { Link } from "react-router-dom";
import Bannerimg from '../../images/GT2.jpg';
import '../../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bannerimg})` }}>
      <div className= "headerContainer">
          <h1>Hello</h1>
          <p>Welcome to my website</p>
          <Link to= "/about">
              <button>About Me</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;