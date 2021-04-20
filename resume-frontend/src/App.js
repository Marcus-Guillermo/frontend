import './App.css';
import Button from 'react-bootstrap/Button';
import { Route, Switch, Link } from "react-router-dom";
import Navbar from './components/NavBar'
import Homepage from './components/Homepage';
import Generate from './components/Generate';
// import Accounts from './components/SignUp';
import Contact from './components/Contact';

// Firebase authentication
import SignUp from './components/SignUp'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute'


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
							<PrivateRoute component={Homepage} exact path='/' />
							<Route component={Contact} path='/contact-us' />
							<Route component={Generate} path='/generate' />
							<Route component={SignUp} path='/signup' />
						</Switch>
					</main>
		</AuthProvider>
				</div>
			</div>
	);
}

export default App;
