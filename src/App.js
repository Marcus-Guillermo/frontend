import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import Navbar from './components/NavBar';
import Homepage from './components/Homepage';
import Generate from './components/Generate';
import Contact from './components/Contact';
import Salary from './components/Salary';
import Generate_Resume from './components/Generate_Resume';

// Firebase authentication
import SignUp from './components/SignUp';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
// import Logout from './auth/Logout'

function App() {
	return (
		<div className='App'>
			<div>
				<nav></nav>
				<header className='App-header'>
					<Navbar></Navbar>
				</header>
				
				

				<AuthProvider>
					<main>
						<Switch>
							<Route component={Homepage} exact path='/' />
							<Route component={Contact} path='/contact-us' />
							<Route component={SignUp} path='/signup' />

							<PrivateRoute component={Salary} path='/salary' />
							<PrivateRoute component={Generate_Resume} path='/generate-resume' />
							<PrivateRoute component={Generate} path='/generate' />
						</Switch>
					</main>
				</AuthProvider>
			</div>
		</div>
	);
}

export default App;
