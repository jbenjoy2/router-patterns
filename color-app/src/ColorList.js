import React from 'react';

import { Link } from 'react-router-dom';
import './ColorList.css';

const ColorList = ({ colors }) => {
	return (
		<div className="ColorList">
			<div className="ColorList-headers">
				<h1>Color Generator</h1>
				<h2>
					<Link to="/colors/new">Add Color</Link>
				</h2>
			</div>
			<div className="ColorList-list">
				<h5>Select a color:</h5>
				{Object.keys(colors).map((color) => (
					<Link
						className="ColorList-color"
						style={{ backgroundColor: color, color: 'white' }}
						key={color}
						to={`/colors/${color}`}
					>
						<span>{color}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ColorList;
