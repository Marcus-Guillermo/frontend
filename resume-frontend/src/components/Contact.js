import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import './Contact.css'

const Contact = () => {
    return (
        <div className= "contactBody">
            <div className="guillermo">
                <Card style={{ width: '48rem' }}>
                <Card.Body>
                <h1>Guillermo Hernandez</h1>
                <h4>Aspiring Software Engineer, Boston</h4>
                <Card.Link href="https://www.linkedin.com/in/1guillermohernandez/" target="_blank">Connect with me on LinkedIn</Card.Link>
                <Card.Link href="https://github.com/ghernandez24" target="_blank">See my Work on Github</Card.Link>
            </Card.Body>
            </Card>
            </div>
            <div className="marcus">
            <Card style={{ width: '48rem' }}>
                <Card.Body>
                <h1>Marcus Gutierrez</h1>
                <h4>Aspiring Product Manager, NYC</h4>
                <Card.Link href="https://www.linkedin.com/in/gutierrezmarcus/" target="_blank">Connect with me on LinkedIn</Card.Link>
                <Card.Link href="https://github.com/mgtz505" target="_blank">See my Work on Github</Card.Link>
            </Card.Body>
            </Card>
            </div>
         
        </div>
    );
};

export default Contact;