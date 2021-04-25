import React, { useState, useCallback } from "react";
import { withRouter } from 'react-router'
import app from '../firebase'
import "./Accounts.css";
import { Form, Jumbotron, Button, Modal } from "react-bootstrap";

const SignUp = ({ history }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignUp = useCallback (
    async(event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch(error){
        alert(error.message)
      }
    }, [history]
  )

  return (
    <div >
      <h1 className="accountsBanner">Get Started with Resu.Me</h1>
      <div className="accountsBody">
        <div>
          <Jumbotron className="jumbotron">
            <h1>Getting ready for job applications has never been easier.</h1>
            <p>
              Join and start making professional cover letters and resumes with ease. <br></br>When you're done, get inspired and look at salary data via Levels.fyi
              <br></br>
            </p>
            <p>
              <Button variant="primary" onClick={handleShow}>
                Learn More
              </Button>
            </p>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header >
                <Modal.Title>Benefits of Registering</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Resu.Me is your key to navigating job applications.
                <br></br>
                Quickly craft resumes and cover letters using our free template. Download seamlessly to your browser and start applying.
                <br></br>
                See salary ranges for tech roles in your area, compare compensation across firms and see what employees at your dream company are earning. 
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
          </Jumbotron>
        </div>

{/* This is the account sign up form */}

        <div className="formBody">
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Email Address</Form.Label>
              <Form.Control
                name='email'
                type="email"
                placeholder="Enter your email - we'll never share your email with third parties"
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <br></br>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name ='password' type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp)
