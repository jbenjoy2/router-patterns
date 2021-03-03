import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ dog }) => {
	if (!dog) return <Redirect to="/dogs" />;

	return (
		<div className="DogDetails">
			<div className="DogDetails-image">
				<img src={dog.src} alt={dog.name} />
			</div>
			<div className="DogDetails-info">
				<h2>
					Hello! My name is {dog.name}, and I am {dog.age} years old!
				</h2>
				<h3>Here are some fun facts about me:</h3>
				<ul>{dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
			</div>
			<Link className="DogDetails-link" to="/dogs">
				Go back home
			</Link>
		</div>
	);
};

export default DogDetails;
