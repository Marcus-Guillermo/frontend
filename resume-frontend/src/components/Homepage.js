import React, { useState, useEffect } from "react";
import './Homepage.css'
import { Navbar, Button, Card, Modal} from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";
import Generate from './Generate';



const Homepage = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <div className="welcomeContainer">
            <h1 className="welcomeBanner">Resu.Me</h1>
            <h4 className="welcomeMessage">Resu.me is the easiest solution for cover letters and resumes.
                <br></br> Simply input your credentials and contact information - We handle the rest!</h4>
                <Button onClick={handleShow} className="loginButton" >Log In to Resu.me</Button>
                
                <Link className= "genLeadButton" to="/generate-resume">
                <Button >Let's make a Resume</Button>
                </Link>
      
                
            {/* <h2 className="servicesBanner">Score the job you deserve with the help of our tools</h2> */}
            <Link className= "genLeadTwoButton" to="/generate">
              <Button >Let's make a Cover Letter</Button>
            </Link>
            <Link className= "genLeadButton" to="/generate-resume">
              <Button >Let's make a Resume</Button>
            </Link>
           
                <h2 className="servicesContainer serviceA">Convenient Cover Letters</h2>
                <h4 className="servicesDescription">Simply enter your contact information and several brief sentences about the role you want. <strong>We handle all of the formatting and styling</strong>.</h4>
                <h2 className="servicesContainer serviceB">Resumes Made Easy</h2>
                <h4 className="servicesDescription serviceB">Populate our professional resume templates with ease.<strong><br></br>You bring the content, we'll do the heavy lifting</strong>.</h4>
                <h2 className="servicesContainer serviceC">Easy LinkedIn Search</h2>
            
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button> 
              </Modal.Footer>
            </Modal>
           
        </div>
    );
};

export default Homepage;