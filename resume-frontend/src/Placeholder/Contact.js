import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import icon from '../images/download.png'

const Contact = () => {
	return (
		<div>
			<Card style={{ width: '20vw' }}>
				<Card.Img variant='top' src={icon} height='200px' />
				<Card.Body>
					<Card.Text style={{ fontSize: '13px' }}>
						We are two junior engineers on the rise. If you have any questions or want to collaborate, feel free to contact us. 
					</Card.Text>
					<Link to='/contact-us'>
						<Button
							style={{
								background: '#A7A0A0',
								fontWeight: 'bold',
								fontSize: '12px',
							}}
							variant='primary'>
							Contact Us
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Contact