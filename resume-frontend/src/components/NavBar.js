import React from 'react';
import { Navbar, Button} from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";
import './NavBar.css'

const navbar = () => {
    return (
    <div className="navbar">
        <Link to="/accounts">
            <button className = "loginButton">Create an Account</button>
        </Link>
        <button>Login</button>
        <button>Features</button>
        <Link to="/contact-us">
            <button className = "contactButton">Contact Us</button>
        </Link>
        

        
        
    </div>
    );
};

export default navbar;