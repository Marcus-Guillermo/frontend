import React from 'react';
import Iframe from 'react-iframe';

const Levels = () => {
    return (
			<div>
				<h2>Iframe test</h2>
				<Iframe url='https://www.levels.fyi/charts_embed.html?company=Facebook&ref=yourcompany.com'
                    className='frametest'
                    display='initial'
				 />
			</div>
		);
};

export default Levels;