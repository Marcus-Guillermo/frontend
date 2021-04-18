import React from 'react';
import Navbar from './NavBar'
import "./Generate.css"

const Generate = () => {
    return (
        <div className="generateBody">
            <h1 className="generateBanner">Here's your Resume</h1>
            <div className="generateRender">PLACEHOLDER</div>
            <h1 className="inputBanner">Enter Your Info</h1>
            <div className="inputField"></div>
        </div>
    );
};

export default Generate;