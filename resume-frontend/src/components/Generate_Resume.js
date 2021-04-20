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
            <Text style={styles.date}>DATE</Text> 
            <Text style={styles.entry}>• Engineered a mobile app using React Native to assist students on the job hunt</Text>
            <Text style={styles.entry}>• Presented Project to Cohort at General Assembly Software Engineering Immersive Bootcamp</Text>
            {/* Project B */}
            <Text style={styles.entryHeader}>Project B</Text>
            <Text style={styles.date}>DATE</Text> 
            <Text style={styles.entry}>• Engineered a mobile app using React Native to assist students on the job hunt</Text>
            <Text style={styles.entry}>• Presented Project to Cohort at General Assembly Software Engineering Immersive Bootcamp</Text>
            {/* Project C */}
            <Text style={styles.entryHeader}>Project C</Text>
            <Text style={styles.date}>DATE</Text> 
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
            <Text style={styles.entryHeader}>Example University</Text>
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