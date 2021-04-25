import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBar.css'
import Logout from '../auth/Logout'

const navbar = () => {
    return (
			<div className='navbar'>
				<Link to='/signup'>
					<Button
						style={{ background: '#A7A0A0', fontWeight: 'bold' }}
						className='custom'>
						Create an Account
					</Button>
				</Link>
                
				<Logout />

				<Link to='/'>
				<Button style={{background:"#A7A0A0",fontWeight: "bold"}} className = "custom">Return Home</Button>
				</Link>
				{/* <Link to='/contact-us'>
					<Button
						style={{ background: '#A7A0A0', fontWeight: 'bold' }}
						className='contactButton'>
						Contact Us
					</Button>
				</Link> */}
			</div>
		);
};

export default navbar;