import React, { useState } from 'react';
import './Homepage.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Firebase Credentials
import app from '../firebase';

const Homepage = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');


	// const [token, setToken] = useState('');
	// function logout() {
	// 	app.auth().removeItem('token');
	// 	setToken('');
	// }

	const signInWithEmailAndPasswordHandler = (event, email, password) => {
		console.log(event);
		event.preventDefault();
		app
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((error) => {
				setError('Error signing in with password and email!');
				console.error('Error signing in with password and email', error);
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.currentTarget;
		console.log(event.currentTarget);

		if (name === 'userEmail') {
			setEmail(value);
		} else if (name === 'userPassword') {
			setPassword(value);
		}
	};

	const handleSubmit = (event) => {
		handleClose();
		// signInWithEmailAndPasswordHandler();
		alert('you\'ve successfully logged in');
	};

	return (
		<div className='welcomeContainer'>
			<h1 className='welcomeBanner'>Resu.Me</h1>
			<h4 className='welcomeMessage'>
				Resu.me is the easiest solution for cover letters and resumes.
				<br></br> Simply input your credentials and contact information - We
				handle the rest!
			</h4>

		{/* {!token ? ( */}
			<Button onClick={handleShow} className='loginButton'>
				Log In to Resu.me
			</Button>

		{/* ) : ( */}

			<Link className='genLeadButton' to='/generate'>
				<Button>Let's make a Cover Letter</Button>
			</Link>

			<Link className='genLeadTwoButton' to='/generate-resume'>
				<Button>Let's make a Resume</Button>
			</Link>

			<Button onClick={handleShow} className='loginButton'>
				Log In to Resu.me
			</Button>

			<h2 className='servicesContainer serviceA'>PLACEHOLDER A</h2>
			<h2 className='servicesContainer serviceB'>PLACEHOLDER B</h2>
			<h2 className='servicesContainer serviceC'>PLACEHOLDER C</h2>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{error !== null && <div>{error}</div>}
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label className='label'>Email Address</Form.Label>
							<Form.Control
								name='userEmail'
								value={email}
								type='email'
								placeholder='Login email'
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>

						<br></br>


						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								name='userPassword'
								value={password}
								type='password'
								placeholder='Password'
								onChange={(event) => handleChange(event)}
							/>
						</Form.Group>
						<Button
							variant='secondary'
							type='submit'
							onClick={(event) => {
								signInWithEmailAndPasswordHandler(event, email, password);
								handleSubmit();
							}}>
							Login
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);

};

export default Homepage;
