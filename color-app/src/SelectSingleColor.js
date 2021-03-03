import React from 'react';
import ColorDetail from './ColorDetail';
import { useParams } from 'react-router-dom';

const SelectSingleColor = ({ colors }) => {
	const { color } = useParams();

	if (color) {
		const colorHex = colors[color];
		return <ColorDetail name={color} color={colorHex} />;
	}
};

export default SelectSingleColor;
