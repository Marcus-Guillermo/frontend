import React from 'react';
import { Navbar, Button} from 'react-bootstrap';
import './NavBar.css'
const navbar = () => {
    return (
    <div className="navbar">
        <button className = "loginButton">Create an Account</button>
        <button>Login</button>
        <button>Features</button>
        <button>Contact Us</button>
        
        
    </div>
    );
};

export default navbar;