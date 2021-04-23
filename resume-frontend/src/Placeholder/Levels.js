import React from 'react';
import Iframe from 'react-iframe';
import './Levels.css'

const Levels = () => {
    return (
		<div className="levelsContainer">
			<div>
				<h2></h2>
				<Iframe url='https://www.levels.fyi/charts_embed.html?company=Facebook&ref=yourcompany.com'
                    className='frametest'
                    display='initial'
					
				 />
			</div>
			<Iframe src="https://levels.fyi/levels_embed.html?compare=Google,Facebook&ref=yourcompany.com" 
			className="comparison" height="650" style="min-width: 319px; width: 100%; border:none;" frameborder="0" scrolling="auto"></Iframe>
		</div>
			
		);
};

export default Levels;