import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Navbar = ({ dogs }) => {
	return (
		<nav className="Navbar">
			<NavLink exact to="/dogs">
				Home
			</NavLink>
			{dogs.map((dog) => (
				<NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
					{dog.name}
				</NavLink>
			))}
		</nav>
	);
};

export default Navbar;
