import React from 'react';
import DogDetails from './DogDetails';
import { useParams } from 'react-router-dom';

const SelectSingleDog = ({ dogs }) => {
	const { name } = useParams();

	if (name) {
		const singleDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
		return <DogDetails dog={singleDog} />;
	}
};

export default SelectSingleDog;
