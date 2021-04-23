import React, { useState, useEffect } from "react";
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

    //Let's establish our state environment 
    
    //User Name
    const [value, setValue] = useState("")
    const onChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)}

    //Date
    const [date, setDate] = useState([""])
    const onChangeDate = (event) => {
            event.preventDefault()
            setDate(event.target.value)}

    //Email
    const [email, setEmail] = useState("")
    const onChangeEmail = (event) => {
            event.preventDefault()
            setEmail(event.target.value)}

    //Phone
    const [phone, setPhone] = useState("")
    const onChangePhone = (event) => {
        event.preventDefault()
        setPhone(event.target.value)}

    //Hiring Manager Salutation
    const [salutation, setSalutation] = useState("")
    const onChangeSalute = (event) => {
        event.preventDefault()
        setSalutation(event.target.value)}

    //Intro Paragraph
    const [introParagraph, setIntroParagraph] = useState("")
    const onChangeIntro = (event) => {
        event.preventDefault()
        setIntroParagraph(event.target.value)}
    
    //Body Paragraph
    const [bodyParagraph, setBodyParagraph] = useState("")
    const onChangeBody = (event) => {
        event.preventDefault()
        setBodyParagraph(event.target.value)}
    
    //Call-to-Action
    const [cta, setCta] = useState("")
    const onChangeCTA = (event) => {
        event.preventDefault()
        setCta(event.target.value)}

    //Send Off
    const [sendOff, setSendOff] = useState("")
    const onSendOffChange = (event) => {
        event.preventDefault()
        setSendOff(event.target.value)}

    //Modal Controls
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="generateBody">
      <h1 className="generateBanner">Here's your Cover Letter:</h1>
      <div className="generateRender">
    <PDFViewer className="viewer">
        <Document>
        <Page size="A4" style={styles.body}>

            {/* USER CONTACT INFORMATION */}
            <Text style={styles.myContact}> {value}</Text>
            {/* <Text style={styles.myContact}> 12 Shock Road, Hinderland, NY 84560</Text> */}
            <Text style={styles.myContact}>{phone}</Text>
            <Text style={styles.myContact}> {email}</Text>
            {/* Today's Date */}
            <Text style={styles.date}>{date}</Text>

            {/* Salutation */}
            <Text style={styles.salutation}>{salutation}</Text>

            {/* Intro Paragraph */}
            <Text style={styles.section}>{introParagraph}</Text>

            {/* Body Paragraph */}
            <Text style={styles.section}>{bodyParagraph}</Text>

            {/* Call to Action */}
            <Text style={styles.section}>{cta}</Text>

            {/* Sign-Off */}
            <Text style={styles.signOff}>{sendOff}</Text>
            <Text style={styles.signOff}>{value}</Text>

        </Page>
    </Document>
    </PDFViewer>
      
      </div>
      <h1 className="inputBanner">Let's Get Some Info:</h1>
      <div className="inputField">

        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control onChange={onChange} value={value} placeholder="Your Name" />
              {/* {selectText} */}
            </Form.Group>

            <Form.Group as={Col} controlId="formTodaysDate">
            <Form.Label>Today's Date</Form.Label>
            <Form.Control onChange={onChangeDate} value={date} placeholder="April 19th, 2021" />
          </Form.Group>

          </Form.Row>
          <Form.Row>
          <Form.Group as={Col}  controlId="formGridEmail">
              <Form.Label> Your Email Address</Form.Label>
              <Form.Control onChange={onChangeEmail} value={email} type="email" placeholder="janedoe@gmail.com" />
            </Form.Group>

            <Form.Group as={Col}  controlId="formGridPhone">
              <Form.Label> Phone Number</Form.Label>
              <Form.Control onChange={onChangePhone} value={phone} type="phone" placeholder="i.e. 1-212-867-5309" />
            </Form.Group>
          </Form.Row>
          {/* <Form.Group controlId="formGridAddress1">
            <Form.Label>What is your preferred mailing address?</Form.Label>
            <Form.Control placeholder="i.e. 1600 Pennsylvania Avenue NW, Washington, DC 20500" />
          </Form.Group> */}
         
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Let's write a saultation for your cover letter</Form.Label>
            <Form.Control onChange={onChangeSalute} value={salutation} placeholder="i.e. Dear Hiring Manager, To whom it may concern, etc" />
          </Form.Group>

      
          <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Let's write your cover letter's intro paragraph</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={onChangeIntro} value={introParagraph} placeholder="i.e. It is with great interest..." />
        </Form.Group>
        
         
          <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Let's write your cover letter's body paragraph</Form.Label>
                <Form.Control as="textarea" rows={4} onChange={onChangeBody} value={bodyParagraph} placeholder="i.e. I am currently a software engineer..." />
        </Form.Group>
          

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Let's write a call-to-action</Form.Label>
            <Form.Control onChange={onChangeCTA} value={cta} placeholder="i.e. I am reacheable by mail or phone to further discuss..." />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Let's write a send-off</Form.Label>
            <Form.Control onChange={onSendOffChange} value={sendOff} placeholder="i.e. I look forward to speaking with you soon." />
          </Form.Group>
         
            

          <Button style={{background:"#A7A0A0",fontWeight: "bold"}} onClick={handleShow} variant="primary">
           All done!
          </Button>
        </Form>
      
        <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>That cover letter looks great!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                To save your cover letter as a PDF, simply click the download icon on the rendered toolbar above the cover letter. It will download to your browser. <br></br>Good luck with your applications!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button> 
            </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};


export default Generate;
