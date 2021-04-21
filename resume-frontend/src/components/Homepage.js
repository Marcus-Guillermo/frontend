import React, { useState, useCallback, useContext } from 'react';
import './Homepage.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
// Firebase Credentials
import app from '../firebase'
import { AuthContext } from '../Auth'

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const handleLogin = useCallback(
  //   async (event)=> {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await app.auth().signInWithEmailAndPassword(email.value, password.value);
  //       history.push('/generate')
  //     }catch(error){
  //       alert(error);
  //     }
  //   },[history]
  //   );
    
  //   const { currentUser } = useContext(AuthContext);
    
  //   if (currentUser) {
  //     return 
  //   }

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
		event.preventDefault();
		app.auth().signInWithEmailAndPassword(email, password).catch((error) => {
			setError('Error signing in with password and email!');
			console.error('Error signing in with password and email', error);
		});
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.currentTarget;

		if (name === 'userEmail') {
			setEmail(value);
		} else if (name === 'userPassword') {
			setPassword(value);
		}
	};
     
	return (
		<div className='welcomeContainer'>
			<h1 className='welcomeBanner'>Resu.Me</h1>
			<h4 className='welcomeMessage'>
				Resu.me is the easiest solution for cover letters and resumes.
				<br></br> Simply input your credentials and contact information - We
				handle the rest!
			</h4>
			<Link className='genLeadButton' to='/generate'>
				<Button>Let's make a Resume</Button>
			</Link>

			<Button onClick={handleShow} className='loginButton'>
				Log In to Resu.me
			</Button>
			{/* <h2 className="servicesBanner">Score the job you deserve with the help of our tools</h2> */}

			<h2 className='servicesContainer serviceA'>PLACEHOLDER A</h2>
			<h2 className='servicesContainer serviceB'>PLACEHOLDER B</h2>
			<h2 className='servicesContainer serviceC'>PLACEHOLDER C</h2>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{error !== null && (
						<div className='py-4 bg-red-600 w-full text-white text-center mb-3'>
							{error}
						</div>
					)}
					<Form>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label className='label'>Email Address</Form.Label>
							<Form.Control
								name='email'
                value={email}
								type='email'
								placeholder='Login email'
                onChange ={(event)=> onChangeHandler(event)}
							/>
						</Form.Group>

						<br></br>

						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								name='password'
                value ={password}
								type='password'
								placeholder='Password'
                onChange = {(event) => onChangeHandler(event)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' type='submit' onClick={(event)=>{signInWithEmailAndPasswordHandler(event, email, password)}}>
						Login
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Homepage;