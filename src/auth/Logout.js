import React from 'react';
import app from '../firebase'
import { Button } from 'react-bootstrap'

const Logout = () => {
    return (
			<div>
				<Button
					style={{ background: '#A7A0A0', fontWeight: 'bold' }}
					onClick={() => app.auth().signOut()}>
					Sign out
				</Button>
			</div>
		);
};

export default Logout;