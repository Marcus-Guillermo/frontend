import React from 'react';
import { Navbar, Button} from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";
import './NavBar.css'
import Homepage from './Homepage';


const navbar = () => {
    return (
    <div className="navbar">
        <Link to="/signup">
            <Button className = "loginButton">Create an Account</Button>
        </Link>

        
      
        <Button>Features</Button>
        <Link to="/contact-us">
            <Button className = "contactButton">Contact Us</Button>
        </Link>
        


    </div>
    );
};

export default navbar;