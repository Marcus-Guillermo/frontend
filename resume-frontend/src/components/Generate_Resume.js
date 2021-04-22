import React, { useState, useEffect } from "react";
import { Form, Jumbotron, Button, Modal, Col, Row } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import "./Generate_Resume.css";
import List from './List'


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

    // const onChangeTest = (event, code)=> {
    //     const name = event.target.value;
    //     const toChange = {[code]: name};
    //    setName(toChange)
    //  }
    //Let's establish our state environemnt
    //Name



   const [name, setName] = useState("");
   const onChangeName = (event)=> {
       event.preventDefault()
       setName(event.target.value)
    }
    //Email
    const [email, setEmail] = useState("");
    const onChangeEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    
    const [cellnumber, setCellNumber] = useState("");
    const onChangeCellNumber = (event) => {
        event.preventDefault()
        setCellNumber(event.target.value)
    }

    const [address, setAddress] = useState("");
    const onChangeAddress = (event) => {
        event.preventDefault()
        setAddress(event.target.value)
    }
    const [linkedIn, setLinkedIn] = useState("");
    const onChangeLinkedIn = (event) => {
        event.preventDefault()
        setLinkedIn(event.target.value)
    }
    const [certifications, setCertifications] = useState("");
    const onChangeCertifications = (event) => {
        event.preventDefault()
        setCertifications(event.target.value)
    }
    const [technicalSkills, setTechnicalSkills] = useState("");
    const onChangeTechnicalSkills = (event) => {
        event.preventDefault()
        setTechnicalSkills(event.target.value)
    }
    const [projectNameA, setProjectNameA] = useState("")
    const onChangeProjectNameA = (event) => {
        event.preventDefault()
        setProjectNameA(event.target.value)
    }
    const [projectAEntry1, setProjectAEntry1] = useState("")
    const onChangeProjectAEntry1 = (event) => {
        event.preventDefault()
        setProjectAEntry1(event.target.value)
    }
    const [projectAEntry2, setProjectAEntry2] = useState("")
    const onChangeProjectAEntry2 = (event) => {
        event.preventDefault()
        setProjectAEntry2(event.target.value)
    }
    const [projectNameB, setProjectNameB] = useState("")
    const onChangeProjectNameB = (event) => {
        event.preventDefault()
        setProjectNameB(event.target.value)
    }
    const [projectBEntry1, setProjectBEntry1] = useState("")
    const onChangeProjectBEntry1 = (event) => {
        event.preventDefault()
        setProjectBEntry1(event.target.value)
    }
    const [projectNameC, setProjectNameC] = useState("")
    const onChangeProjectNameC = (event) => {
        event.preventDefault()
        setProjectNameC(event.target.value)
    }
    const [projectCEntry1, setProjectCEntry1] = useState("")
    const onChangeProjectCEntry1 = (event) => {
        event.preventDefault()
        setProjectCEntry1(event.target.value)
    }
    const [employerA, setEmployerA] = useState("")
    const onChangeEmployerA = (event) => {
        event.preventDefault()
        setEmployerA(event.target.value)
    }
    const [titleA, setTitleA] = useState("")
    const onChangeTitleA = (event) => {
        event.preventDefault()
        setTitleA(event.target.value)
    }
    const [dateA, setDateA] = useState("")
    const onChangeDateA = (event) => {
        event.preventDefault()
        setDateA(event.target.value)
    }

    const [experienceA, setExperienceA] = useState("")
    const onChangeExperienceA = (event) => {
        event.preventDefault()
        setExperienceA(event.target.value)
    }
    //Experience B
    const [employerB, setEmployerB] = useState("")
    const onChangeEmployerB = (event) => {
        event.preventDefault()
        setEmployerB(event.target.value)
    }
    const [titleB, setTitleB] = useState("")
    const onChangeTitleB = (event) => {
        event.preventDefault()
        setTitleB(event.target.value)
    }
    const [dateB, setDateB] = useState("")
    const onChangeDateB = (event) => {
        event.preventDefault()
        setDateB(event.target.value)
    }

    const [experienceB, setExperienceB] = useState("")
    const onChangeExperienceB = (event) => {
        event.preventDefault()
        setExperienceB(event.target.value)
    }

  //Experience C
  const [employerC, setEmployerC] = useState("")
  const onChangeEmployerC = (event) => {
      event.preventDefault()
      setEmployerB(event.target.value)
  }
  const [titleC, setTitleC] = useState("")
  const onChangeTitleC = (event) => {
      event.preventDefault()
      setTitleB(event.target.value)
  }
  const [dateC, setDateC] = useState("")
  const onChangeDateC = (event) => {
      event.preventDefault()
      setDateC(event.target.value)
  }

  const [experienceC, setExperienceC] = useState("")
  const onChangeExperienceC = (event) => {
      event.preventDefault()
      setExperienceC(event.target.value)
  }

  const [collegeName, setCollegeName] = useState("")
  const onChangeCollegeName = (event) => {
      event.preventDefault()
      setCollegeName(event.target.value)
  }
  
  const [degree, setDegree] = useState("")
  const onChangeDegree = (event) => {
      event.preventDefault()
      setDegree(event.target.value)
  }
  const [gpaMajorGPA, setGPAMajorGPA] = useState("")
  const onChangeGPAMajorGPA = (event) => {
      event.preventDefault()
      setGPAMajorGPA(event.target.value)
  }

  const [collegeDate, setCollegeDate] = useState("")
  const onChangeCollegeDate = (event) => {
      event.preventDefault()
      setCollegeDate(event.target.value)
  }

   //Modal Controls
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const [bulletShow, setBulletShow] = useState(false);
  const handleBullet = () => setBulletShow(true)

    return (
        <div className="generateBody">

        <h1 className="Banner">Let's Get Some Info:</h1>
        
            <div className="inputField">
                <Form>
                    
                <h4 className="bullet grow"> Copy & paste as needed: •  »  </h4>
                <h2 className="formSubHeader"> Personal Details</h2>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={onChangeName} value={name} placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control onChange={onChangeEmail} value={email} placeholder="example@gmail.com" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Cell Number</Form.Label>
                    <Form.Control onChange={onChangeCellNumber} value={cellnumber} placeholder="i.e 505-867-5309" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridName">
                    <Form.Label>Mailing Address </Form.Label>
                    <Form.Control onChange={onChangeAddress} value={address} placeholder="i.e. 42 Wallaby Way, Sydney" />
                    </Form.Group>
                    <h2 className="formSubHeader"> Skills and Certifications</h2>
                    <Form.Group controlId="formGridName">
                    <Form.Label>LinkedIn </Form.Label>
                    <Form.Control onChange={onChangeLinkedIn} value={linkedIn} placeholder="i.e. https://www.linkedin.com/in/exampleperson/" />
                    </Form.Group>
                    <Form.Group controlId="formGridName">
                    <Form.Label>Certifications </Form.Label>
                    <Form.Control onChange={onChangeCertifications} value={certifications} placeholder="Certifications such as Coursera, EdX, etc"/>
                    </Form.Group>
                    <Form.Group controlId="formGridName">
                    <Form.Label>Technical Skills </Form.Label>
                    <Form.Control onChange={onChangeTechnicalSkills} value={technicalSkills} placeholder="i.e. React, React Native, Figma, TypeScript, C++, Python..."/>
                    </Form.Group>
                   
                    <h2 className="formSubHeader"> Project Portfolio</h2>
                    <Form.Group controlId="formGridName">
                    <Form.Label>Project Header (1) </Form.Label>
                    <Form.Control onChange={onChangeProjectNameA} value={projectNameA} placeholder="Project Title"/>
                    </Form.Group>
                    {/* </Form.Row>
                    <Form.Row> */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Project Description (1)</Form.Label>
                    <Form.Control onChange={onChangeProjectAEntry1} value={projectAEntry1} as="textarea" rows={3} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                   
                    {/* Second Project */}
                    
                    <Form.Group controlId="formGridName">
                    <Form.Label>Project Header (2) </Form.Label>
                    <Form.Control onChange={onChangeProjectNameB} value={projectNameB}  placeholder="Project Title"/>
                    </Form.Group>
                   
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Project Description (2)</Form.Label>
                    <Form.Control onChange={onChangeProjectBEntry1} value={projectBEntry1} as="textarea" rows={3} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                   
                   
                    <Form.Group controlId="formGridName">
                    <Form.Label>Project Header (3) </Form.Label>
                    <Form.Control onChange={onChangeProjectNameC} value={projectNameC} placeholder="Project Title"/>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Project Description (3)</Form.Label>
                    <Form.Control onChange={onChangeProjectCEntry1} value={projectCEntry1} as="textarea" rows={3} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                   
                    <h2 className="formSubHeader"> Professional Experience - Role A</h2>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employer </Form.Label>
                    <Form.Control onChange={onChangeEmployerA} value={employerA} placeholder="Microsoft, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Title </Form.Label>
                    <Form.Control onChange={onChangeTitleA} value={titleA} placeholder="Engineer"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Range </Form.Label>
                    <Form.Control onChange={onChangeDateA} value={dateA} placeholder="04/2019 - Present" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience</Form.Label>
                    <Form.Control onChange={onChangeExperienceA} value={experienceA} as="textarea" rows={6} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                  
                    <h2 className="formSubHeader"> Professional Experience - Role B</h2>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employer </Form.Label>
                    <Form.Control onChange={onChangeEmployerB} value={employerB} placeholder="Microsoft, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Title </Form.Label>
                    <Form.Control onChange={onChangeTitleB} value={titleB} placeholder="Engineer"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Range </Form.Label>
                    <Form.Control onChange={onChangeDateB} value={dateB} placeholder="04/2019 - Present" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience </Form.Label>
                    <Form.Control onChange={onChangeTitleB} value={experienceB} as="textarea" rows={6} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                  

                    <h2 className="formSubHeader"> Professional Experience - Role C</h2>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Employer </Form.Label>
                    <Form.Control onChange={onChangeEmployerC} value={employerC} placeholder="Microsoft, etc." />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Title </Form.Label>
                    <Form.Control onChange={onChangeTitleC} value={titleC} placeholder="Engineer"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Range </Form.Label>
                    <Form.Control onChange={onChangeDateC} value={dateC} placeholder="04/2019 - Present" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Describe your Experience </Form.Label>
                    <Form.Control onChange={onChangeExperienceC} value={experienceC} as="textarea" rows={6} placeholder="i.e. Engineered a mobile app using React Native to assist students on the job hunt" />
                    </Form.Group>
                    </Form.Row>
                   
                    <h2 className="formSubHeader"> Educational Experience</h2>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>University Name</Form.Label>
                    <Form.Control onChange={onChangeCollegeName} value={collegeName} placeholder="Example State University" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Degree & Major </Form.Label>
                    <Form.Control onChange={onChangeDegree} value={degree} placeholder="B.S. in Computer Science" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>GPA and Major GPA </Form.Label>
                    <Form.Control onChange={onChangeGPAMajorGPA} value={gpaMajorGPA} placeholder="3.7/4.0 ; 3.9/4.0" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Date Attended</Form.Label>
                    <Form.Control onChange={onChangeCollegeDate} value={collegeDate} placeholder="08/2019 - Present" />
                    </Form.Group>
                    </Form.Row>

                    <Button onClick={handleShow} variant="primary">
                        All done!
                    </Button>
                </Form>
                <Modal scrollable={true} show={show} onHide={handleClose}>
              <Modal.Header >
                <Modal.Title>That resume looks great!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                To save your resume as a PDF, simply click the download icon on the rendered toolbar above the document. It will download to your browser. <br></br>Good luck with your applications!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button> 
            </Modal.Footer>
        </Modal>

            </div>

            <h1 className="generateBanner">Here's your Resume:</h1>
            <div className="generateRender">
            <PDFViewer className="viewer">
        <Document>
        <Page size="A4" style={styles.body}>

            {/* HEADER & USER CONTACT INFORMATION */}
            <Text style={styles.header}>{name}</Text>
            <Text style={styles.contact}> {address} | {cellnumber}</Text>
            <Text style={styles.contact}> {email} | {linkedIn} </Text>
            
            {/* Skills Section*/}
            <Text style={styles.Banner}>SKILLS AND CERTIFICATIONS</Text>
            <Text style={styles.skillsRow}>Technical Skills: {technicalSkills}</Text>
            <Text style={styles.skillsRow}>Certifications: {certifications}</Text>
            {/* Project A */}
            <Text style={styles.Banner}>PROJECT PORTFOLIO</Text>
            <Text style={styles.entryHeader}>{projectNameA}</Text> 
            <Text style={styles.entry}>{projectAEntry1}</Text>
            {/* Project B */}
            <Text style={styles.entryHeader}>{projectNameB}</Text>
            <Text style={styles.entry}>{projectBEntry1}</Text>
            {/* Project C */}
            <Text style={styles.entryHeader}>{projectNameC}</Text>
            <Text style={styles.entry}>{projectCEntry1}</Text>
            
            {/* Professional Experience */}
            <Text style={styles.Banner}>PPROFESSIONAL EXPERIENCE</Text>
            {/* Role A */}
            <Text style={styles.entryHeader}>{employerA}</Text>
            <Text style={styles.date}>{dateA}</Text> 
            <Text style={styles.headerDetail}>{titleA}</Text>

            <Text style={styles.entry}>{experienceA}</Text>
           
            {/* Role B */}
            <Text style={styles.entryHeader}>{employerB}</Text>
            <Text style={styles.date}>{dateB}</Text> 
            <Text style={styles.headerDetail}>{titleB}</Text>

            <Text style={styles.entry}></Text>
            {/* Role C */}
            <Text style={styles.entryHeader}>{employerC}</Text>
            <Text style={styles.date}>{dateC}</Text> 
            <Text style={styles.headerDetail}>{titleC}</Text>

            <Text style={styles.entry}>{experienceC}</Text>
            
            {/* Education */}
            <Text style={styles.Banner}>EDUCATION</Text>
            <Text style={styles.entryHeader}>{collegeName}</Text>
            <Text style={styles.date}>{collegeDate}</Text> 
            <Text style={styles.entry}>{degree}</Text>
            <Text style={styles.entry}>{gpaMajorGPA}</Text>

        </Page>
    </Document>
    </PDFViewer>

        </div>
       
        </div>
    );
};

export default Generate_Resume;