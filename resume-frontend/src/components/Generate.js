import React from "react";
import Navbar from "./NavBar";
import "./Generate.css";
import { Form, Jumbotron, Button, Modal, Col, Row } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';


const Generate = () => {
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });

    //   ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);


  return (
    <div className="generateBody">
      <h1 className="generateBanner">Here's your Cover Letter</h1>
      <div className="generateRender">
    <PDFViewer>
        <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text>EXAMPLE PDF TEXT HERE</Text>
        </View>
        <View style={styles.section}>
            <Text>PART 2 TEXT HERE</Text>
        </View>
        </Page>
    </Document>
    </PDFViewer>
      
      </div>
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

          <Form.Row>
            <Form.Group as={Row} controlId="formGridZip">
              <Form.Label>Where did you find this role?</Form.Label>
              <Form.Control defaultValue="LinkedIn, Referral from a friend, etc..." />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <h2>Let's learn more about you!</h2>

          <Form.Row>
            <Form.Group as={Row} controlId="formGridZip">
              <Form.Label>What's your current role?</Form.Label>
              <Form.Control defaultValue="Software Engineer, Web Developer, etc" />
            </Form.Group>
          </Form.Row>
          
          <Form.Group as={Row} controlId="formGridState">
              <Form.Label>I am...</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option> an experienced </option>
                <option> a</option>
                <option>Dear Sir or Madam,</option>
              </Form.Control>
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
