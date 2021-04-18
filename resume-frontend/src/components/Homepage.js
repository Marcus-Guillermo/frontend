import React from 'react';
import './Homepage.css'
import { Navbar, Button} from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";
import Generate from './Generate';



const Homepage = () => {
    return (
        <div className="welcomeContainer">
            <h1 className="welcomeBanner">Resu.Me</h1>
            <h4 className="welcomeMessage">Resu.me is the easiest solution for cover letters and resumes.
                <br></br> Simply input your credentials and contact information - We handle the rest!</h4>
                <Link className= "genLeadButton" to="/generate">
                <button >Let's make a Resume</button>
                </Link>
            <h2 className="servicesBanner">Score the job you deserve with the help of our tools</h2>
            
           
                <h2 className="servicesContainer serviceA">PLACEHOLDER A</h2>
                <h2 className="servicesContainer serviceB">PLACEHOLDER B</h2>
                <h2 className="servicesContainer serviceC">PLACEHOLDER C</h2>
            

           
        </div>
    );
};

export default Homepage;