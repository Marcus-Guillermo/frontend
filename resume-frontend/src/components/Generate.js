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
       
        section: {
            marginTop: 10,
          marginLeft: 20,
          padding: 0,
        //   flexGrow: 1,
          fontSize: 14
        },
        myContact: {
            fontSize: 14
        },
        date : {
            marginTop: 40,
            fontSize: 14
        },
        salutation: {
            marginTop: 20,
            fontSize: 14
        },
        intro: {

        },
        signOff: {
            marginLeft: 20,
            marginTop: 40,
            fontSize: 14
        }
        
      });

  return (
    <div className="generateBody">
      <h1 className="generateBanner">Here's your Cover Letter</h1>
      <div className="generateRender">
    <PDFViewer className="viewer">
        <Document>
        <Page size="A4" style={styles.body}>

            {/* USER CONTACT INFORMATION */}
            <Text style={styles.myContact}> Marvin Example</Text>
            <Text style={styles.myContact}> 12 Shock Road, Hinderland, NY 84560</Text>
            <Text style={styles.myContact}> Cell: (555) 474-65378</Text>
            <Text style={styles.myContact}> marvbale@example.com</Text>
            {/* Today's Date */}
            <Text style={styles.date}> April 19th, 2021</Text>

            {/* Salutation */}
            <Text style={styles.salutation}> Dear Hiring Manager,</Text>

            {/* Intro Paragraph */}
            <Text style={styles.section}> It is with deep interest that I submit my application for the Software Engineer post as advertised on softtoolhr.com. The position is definitely an ideal chance in view if my strong technical expertise, over 10 years' experience in various areas across security, network engineering, software coding, architecture and IT project supervision and management.</Text>

            {/* Body Paragraph */}
            <Text style={styles.section}> I am currently the Jackheat South Town Technologies Chief Software Engineer, a role I have held for six years. In this position I lead and supervise technology projects, performance and quality enhancements and craft product offers with an impact on the organization's bottom line. Through my increasing experience and progressive professional development my managed skills in IT have been refined and business insight enhanced resulting in inspired IT solutions, improved profits and cost reductions. All these accomplishments are directly through successful team work and collaborations with diverse stakeholders, efficient team management and calculated allocation of resources.</Text>

            {/* Call to Action */}
            <Text style={styles.section}> The enclosed CV offers a detailed picture of my accomplishments, expertise and qualifications in Software Engineering. I am reachable by mail or phone to discuss your software engineering needs and expectations and how my skills can meet these requirements</Text>

            {/* Sign-Off */}
            <Text style={styles.signOff}> I look forward to speaking with you soon.</Text>
            <Text style={styles.signOff}> Marvin Example</Text>

    
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
