import React, { useState, useEffect } from "react";
import "./Accounts.css";
import { Form, Jumbotron, Button, Modal } from "react-bootstrap";

const Accounts = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className="accountsBanner">Get Started with Resu.Me</h1>
      <div className="accountsBody">
        <div className="informationalPanel">
          <Jumbotron>
            <h1>Resumes have Never Been Easier</h1>
            <p>
              Join us and start making professional resumes at the push of a
              button.
              <br></br>
            </p>
            <p>
              <Button variant="primary" onClick={handleShow}>
                Learn More
              </Button>
            </p>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Benefits of Registering</Modal.Title>
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
          </Jumbotron>
        </div>

        <div className="formBody">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Email Address</Form.Label>
              <Form.Control
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
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
