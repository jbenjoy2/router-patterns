import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';
const DogList = ({ dogs }) => {
	return (
		<div className="DogList">
			<div className="DogList-greeting">
				<h1>Hello, and welcome! Please explore our dogs below!</h1>
			</div>
			<div className="DogList-dogs">
				{dogs.map((dog) => (
					<div className="DogList-dog" key={dog.name}>
						<Link className="DogList-name" to={`/dogs/${dog.name.toLowerCase()}`}>
							{dog.name}
						</Link>
						<Link to={`/dogs/${dog.name.toLowerCase()}`}>
							<img className="DogList-img" src={dog.src} alt={dog.name} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default DogList;
