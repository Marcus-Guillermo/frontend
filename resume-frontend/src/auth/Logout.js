import React from 'react';
import app from '../firebase'

const Logout = () => {
    return (
			<div>
				<button onClick={() => app.auth().signOut()}>Sign out</button>
			</div>
		);
};

export default Logout;