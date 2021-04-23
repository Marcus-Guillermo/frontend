import React from 'react';
import Iframe from 'react-iframe';
import './Levels.css'

const Levels = () => {
    return (
		<div className="levelsContainer">
			<div>
				<h2 className="salaryBanner">See Companies' Salary Ranges</h2>
				<Iframe url='https://www.levels.fyi/charts_embed.html?company=Facebook&ref=yourcompany.com'
                    className='frametest'
                    display='initial'
					
				 />
			</div>
			<div className="comparison">
			<h2 className="salaryBanner">Compare Compensation Progression </h2>
			<Iframe src="https://levels.fyi/levels_embed.html?compare=Google,Facebook&ref=yourcompany.com" 
			 style="min-width: 319px; width: 100%; border:none;" frameborder="0" scrolling="auto"></Iframe>
			</div>
		</div>
			
		);
};

export default Levels;
