import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import Homepage from './components/Homepage';
import Generate from './components/Generate';
import Contact from './components/Contact';
import Generate_Resume from './components/Generate_Resume';

// Firebase authentication
import SignUp from './components/SignUp';
import { AuthProvider } from './Auth';
// import PrivateRoute from './PrivateRoute'

function App() {
	return (
		<div className='App'>
			<div>
				<nav></nav>
				<header className='App-header'>
					<Navbar></Navbar>
				</header>
				<Link to='/'>Home</Link>

				<AuthProvider>
					<main>
						<Switch>
							<Route component={Homepage} exact path='/' />
							<Route component={Contact} path='/contact-us' />
							<Route component={Generate} path='/generate' />
							<Route component={Generate_Resume} path='/generate-resume' />
							<Route component={SignUp} path='/signup' />
						</Switch>
					</main>
				</AuthProvider>
			</div>
		</div>
	);
}

export default App;
