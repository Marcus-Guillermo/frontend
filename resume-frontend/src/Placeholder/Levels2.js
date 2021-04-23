import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import imageTwo from '../images/Salarytwo.png'

const Levels2 = () => {
	return (
		<div>
			<Card style={{ width: '20vw' }}>
				<Card.Img variant='top' src={imageTwo} height='200px' />
				<Card.Body>
					<Card.Text style={{ fontSize: '13px' }}>
						Compare the top companies levels of salary structure. Interactive ladder comparison to see the next top tier pay rate.
					</Card.Text>
					<Link to='/salary'>
						<Button
							style={{
								background: '#A7A0A0',
								fontWeight: 'bold',
								fontSize: '12px',
							}}
							variant='primary'>
							Compare Levels
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Levels2;
