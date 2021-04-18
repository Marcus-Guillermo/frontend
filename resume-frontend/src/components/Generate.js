import React from 'react';
import Navbar from './NavBar'
import "./Generate.css"
import { Form, Jumbotron, Button, Modal, Col, Row } from "react-bootstrap";


const Generate = () => {
    return (
        <div className="generateBody">
            <h1 className="generateBanner">Here's your Cover Letter</h1>
            <div className="generateRender">PLACEHOLDER</div>
            <h1 className="inputBanner">Let's Get Some Info</h1>
            <div className="inputField">
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMailingAddress">
      <Form.Label>Your Name</Form.Label>
      <Form.Control placeholder="Your Name" />
    </Form.Group>

   

  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Mailing Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Mailing Address Cont.</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Row} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Row} controlId="formGridState">
      <Form.Label>Salutation</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>To whom it may concern,</option>
        <option>Dear Hiring Manager,</option>
        <option>Dear Sir or Madam,</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Row} controlId="formGridZip">
      <Form.Label>Company Name</Form.Label>
      <Form.Control defaultValue="Where are you applying?" />
    </Form.Group>
  </Form.Row>

<Form.Row>
  <Form.Group as={Row} controlId="formGridZip">
      <Form.Label>Position Title</Form.Label>
      <Form.Control defaultValue="What is the tile of this role?" />
    </Form.Group>
</Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Generate;