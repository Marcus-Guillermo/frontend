import React, { useState, useEffect } from "react";
import { Form, Jumbotron, Button, Modal, Col, Row } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import "./Generate_Resume.css";



const Generate_Resume = () => {

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        body: {
            paddingTop: 30,
            paddingBottom: 30,
            paddingHorizontal: 35,
        },
        header: {
            fontSize: 22,
            textAlign: "center"
        },
        headerDetail: {
            fontSize: 12,
            textAlign: "left"
        },
        contact: {
            fontSize: 14,
            textAlign: "center"
        },
        Banner: {
            fontSize: 16,
            marginTop: 20,
            borderBottom: 1,
        },
        skillsRow: {
            fontSize: 12,
            marginTop: 5,
        },
        entryHeader: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 5,
        },
        entry: {
            fontSize: 12,
            marginTop: 5,
        },
        date: {
            fontSize: 14,
            textAlign: "right",
            marginTop: -15,

        }
        
       
        
        
      });
    return (
        <div className="generateBody">

        <h1 className="Banner">Let's Get Some Info:</h1>
            <div className="inputField">
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control placeholder="example@gmail.com" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Cell Number</Form.Label>
                    <Form.Control placeholder="i.e 505-867-5309" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Mailing Address </Form.Label>
                    <Form.Control placeholder="i.e. 42 Wallaby Way, Sydney" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>LinkedIn </Form.Label>
                    <Form.Control placeholder="i.e. https://www.linkedin.com/in/exampleperson/" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Certifications </Form.Label>
                    <Form.Control placeholder="List certifications, licenses, etc"/>
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Technical Skills </Form.Label>
                    <Form.Control placeholder="i.e. React, React Native,TypeScript, Python..."/>
                    </Form.Group>
                    </Form.Row>
                   
                    {/* First Project */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Project Header (1) </Form.Label>
                    <Form.Control placeholder="What's the 'title' for your project?"/>
                    </Form.Group>
                    {/* </Form.Row>
                    <Form.Row> */}
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe the project</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    {/* Second Project */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Project Header (2) </Form.Label>
                    <Form.Control placeholder="What's the 'title' for your project?"/>
                    </Form.Group>
                    {/* </Form.Row>
                    <Form.Row> */}
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe the project</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Project Header (3) </Form.Label>
                    <Form.Control placeholder="What's the 'title' for your project?"/>
                    </Form.Group>
                    {/* </Form.Row>
                    <Form.Row> */}
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe the project</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    {/* Professional Experience - Role A */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employer </Form.Label>
                    <Form.Control placeholder="i.e. Microsoft, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Title </Form.Label>
                    <Form.Control placeholder="i.e. Software Engineer"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Range </Form.Label>
                    <Form.Control placeholder="04/2019 - Present" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (1)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (2)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (3)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    {/* Professional Experience - Role B */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employer </Form.Label>
                    <Form.Control placeholder="i.e. Microsoft, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Title </Form.Label>
                    <Form.Control placeholder="i.e. Software Engineer"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Range </Form.Label>
                    <Form.Control placeholder="04/2019 - Present" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (1)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (2)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (3)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    {/* Professional Experience - Role C */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employer </Form.Label>
                    <Form.Control placeholder="i.e. Microsoft, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Title </Form.Label>
                    <Form.Control placeholder="i.e. Software Engineer"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Range </Form.Label>
                    <Form.Control placeholder="04/2019 - Present" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (1)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (2)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience (3)</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                    {/* Education */}
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>University Name</Form.Label>
                    <Form.Control placeholder="Example State University" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Degree & Major </Form.Label>
                    <Form.Control placeholder="B.S. in Computer Engineering" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>GPA & Major GPA </Form.Label>
                    <Form.Control placeholder="3.7/4.0 ; 3.9/4.0" />
                    </Form.Group>
                    </Form.Row>
                </Form>
            </div>


            <div className="generateRender">
            <PDFViewer className="viewer">
        <Document>
        <Page size="A4" style={styles.body}>

            {/* HEADER & USER CONTACT INFORMATION */}
            <Text style={styles.header}> EXAMPLE NAME HERE</Text>
            <Text style={styles.contact}> Dallas, Texas | 867-5309</Text>
            <Text style={styles.contact}>example@gmail.com | LinkedIn </Text>
            
            {/* Skills Section*/}
            <Text style={styles.Banner}>SKILLS AND CERTIFICATIONS</Text>
            <Text style={styles.skillsRow}>Technical Skills: React, React Native, JavaScript</Text>
            <Text style={styles.skillsRow}>Certifications: Dev of the Year, 2018</Text>
            {/* Project A */}
            <Text style={styles.Banner}>PROJECT PORTFOLIO</Text>
            <Text style={styles.entryHeader}>Project A</Text> 
            <Text style={styles.entry}>• Engineered a mobile app using React Native to assist students on the job hunt</Text>
            <Text style={styles.entry}>• Presented Project to Cohort at General Assembly Software Engineering Immersive Bootcamp</Text>
            {/* Project B */}
            <Text style={styles.entryHeader}>Project B</Text>
            <Text style={styles.entry}>• Engineered a mobile app using React Native to assist students on the job hunt</Text>
            <Text style={styles.entry}>• Presented Project to Cohort at General Assembly Software Engineering Immersive Bootcamp</Text>
            {/* Project C */}
            <Text style={styles.entryHeader}>Project C</Text>
            <Text style={styles.entry}>• Engineered a mobile app using React Native to assist students on the job hunt</Text>
            <Text style={styles.entry}>• Presented Project to Cohort at General Assembly Software Engineering Immersive Bootcamp</Text>
            
            {/* Professional Experience */}
            <Text style={styles.Banner}>Professional Experience</Text>
            {/* Role A */}
            <Text style={styles.entryHeader}>Role A</Text>
            <Text style={styles.date}>DATE</Text> 
            <Text style={styles.headerDetail}>Senior Software Engineer</Text>

            <Text style={styles.entry}>• Provided Hands-on instruction for students learning Computer Science, mathematics in addition to programming fundamentals</Text>
            <Text style={styles.entry}>• Engineered a mobile app using React Native to assist students on the job hunt</Text>
            <Text style={styles.entry}>• Responsible for updating curriculum with newest materials every semester-end</Text>
            <Text style={styles.entry}>• Presented Project to Cohort at General Assembly Software Engineering Immersive Bootcamp</Text>

            {/* Role B */}
            <Text style={styles.entryHeader}>Role B</Text>
            <Text style={styles.date}>DATE</Text> 
            <Text style={styles.headerDetail}>Software Engineer</Text>

            <Text style={styles.entry}>• Provided Hands-on instruction for students learning Computer Science, mathematics in addition to programming fundamentals</Text>
            <Text style={styles.entry}>• Responsible for updating curriculum with newest materials every semester-end</Text>
            {/* Role C */}
            <Text style={styles.entryHeader}>Role C</Text>
            <Text style={styles.date}>DATE</Text> 
            <Text style={styles.headerDetail}>Instructor</Text>

            <Text style={styles.entry}>• Provided Hands-on instruction for students learning Computer Science, mathematics in addition to programming fundamentals</Text>
            <Text style={styles.entry}>• Responsible for updating curriculum with newest materials every semester-end</Text>
            
            {/* Education */}
            <Text style={styles.Banner}>Education</Text>
            <Text style={styles.entryHeader}>Example School / University</Text>
            <Text style={styles.date}>DATE</Text> 
            <Text style={styles.entry}>Bachelor of Arts in Computer Science</Text>
            <Text style={styles.entry}>GPA: 3.7/4.0; Major GPA: 3.9/4.0</Text>

        </Page>
    </Document>
    </PDFViewer>


    
   
        </div>
        </div>
    );
};

export default Generate_Resume;