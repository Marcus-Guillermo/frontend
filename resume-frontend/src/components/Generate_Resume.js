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
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        header: {
            fontSize: 24,
            textAlign: "center"
        },
        linkedin: {
            fontSize: 16,
            textAlign: "center"
        },
       
        
        
      });
    return (
        <div className="generateBody">
            <div className="generateRender">
            <PDFViewer className="viewer">
        <Document>
        <Page size="A4" style={styles.body}>

            {/* USER CONTACT INFORMATION */}
            <Text style={styles.header}> EXAMPLE NAME HERE</Text>

            <Text style={styles.linkedin}>LinkedIn | example@gmail.com | 867-5309</Text>
            <Text style={styles.myContact}> example</Text>
            {/* Today's Date */}
            <Text style={styles.date}>example</Text>

            {/* Salutation */}
            <Text style={styles.salutation}>example</Text>

            {/* Intro Paragraph */}
            <Text style={styles.section}>example</Text>

            {/* Body Paragraph */}
            <Text style={styles.section}>example</Text>

            {/* Call to Action */}
            <Text style={styles.section}>example</Text>

            {/* Sign-Off */}
            <Text style={styles.signOff}>example</Text>
            <Text style={styles.signOff}>example</Text>

        </Page>
    </Document>
    </PDFViewer>
   
        </div>
        </div>
    );
};

export default Generate_Resume;