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
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 48,
            marginTop: 60,
            textAlign: "center"},

        header: {
            fontSize: 52,
            marginBottom: 20,
            textAlign: 'center'
        },
        section: {
          margin: 20,
          padding: 0,
          flexGrow: 1
        },
        
      });

  return (
    <div className="generateBody">
      <h1 className="generateBanner">Here's your Cover Letter</h1>
      <div className="generateRender">
    <PDFViewer className="viewer">
        <Document>
        <Page size="A4" style={styles.body}>
            <Text style={styles.header} fixed>
                Created with React-pdf
            </Text>
            <Text style={styles.title}>TITLE EXAMPLE TEXT HERE</Text>
        <View style={styles.section}>
            <Text>SECTION</Text>
        </View>
        <View style={styles.section}>
            <Text></Text>
        </View>
        </Page>
    </Document>
    </PDFViewer>
      
      </div>
      <h1 className="inputBanner">Let's Get Some Info</h1>
      <div className="inputField">
    

        <Form>
          <Form.Row>
            <Form.Group as={Row} controlId="formGridMailingAddress">
              <Form.Label>Your Name</Form.Label>
              <Form.Control placeholder="Your Name" />
            </Form.Group>

            <Form.Group as={Row} controlId="formGridEmail">
              <Form.Label>Your Contact Information</Form.Label>
              <Form.Control type="email" placeholder="Email, Phone Number" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Today's Date</Form.Label>
            <Form.Control placeholder="What is Today's Date?" />
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

         
            

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};


export default Generate;
