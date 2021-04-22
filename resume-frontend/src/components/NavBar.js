import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBar.css'

const navbar = () => {
    return (
    <div className="navbar">
        <Link to="/signup">
            <Button className = "custom">Create an Account</Button>
        </Link>

        
      
        <Button>Features</Button>
        <Link to="/contact-us">
            <Button style={{background:"#F4ECD6"}} className = "contactButton">Contact Us</Button>
        </Link>
        


    </div>
    );
};

export default navbar;