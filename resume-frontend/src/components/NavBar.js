import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBar.css'

const navbar = () => {
    return (
    <div className="navbar">
        <Link to="/signup">
            <Button style={{background:"#A7A0A0",fontWeight: "bold"}} className = "custom">Create an Account</Button>
        </Link>

        
      
        
        <Link to="/contact-us">
            <Button style={{background:"#A7A0A0",fontWeight: "bold"}} className = "contactButton">Contact Us</Button>
        </Link>
        


    </div>
    );
};

export default navbar;