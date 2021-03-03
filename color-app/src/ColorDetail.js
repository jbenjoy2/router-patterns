import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ColorDetail.css';
const ColorDetail = ({ name, color }) => {
	if (!color) return <Redirect to="/colors" />;

	return (
		<div className="ColorDetail" style={{ backgroundColor: color }}>
			<div
				className="ColorDetail-main"
				style={name === 'white' ? { color: 'black' } : { color: 'white' }}
			>
				<h1>This is {name}! Pretty, right?</h1>
			</div>
			<Link style={name === 'white' ? { color: 'black' } : { color: 'white' }} to="/colors">
				Go back to list
			</Link>
		</div>
	);
};

export default ColorDetail;
