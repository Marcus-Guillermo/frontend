import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import image from '../images/salary.png';

const Levels1 = () => {
	return (
		<div>
			<Card style={{ width: '20vw' }}>
				<Card.Img variant='top' src={image} height='200px' />
				<Card.Body>
					<Card.Text style={{ fontSize: '13px' }}>
						View salary ranges for each level at a Company. Including location,
						years of experience, and compensation breakdown.
					</Card.Text>
					<Link to='/salary'>
						<Button
							style={{
								background: '#A7A0A0',
								fontWeight: 'bold',
								fontSize: '12px',
							}}
							variant='primary'>
							Find out Salary
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
                        }

export default Levels1