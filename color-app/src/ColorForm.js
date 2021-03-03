import React, { useState } from 'react';
import './ColorForm.css';
import { useHistory } from 'react-router-dom';

const ColorForm = ({ add }) => {
	const [ formData, setFormData ] = useState({ name: '', hex: '#ffffff' });
	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		add({ [formData.name]: formData.hex });
		history.push('/colors');
	};

	const { hex, name } = formData;

	return (
		<div className="ColorForm">
			<div className="ColorForm-header">
				<h1>Add New Color!</h1>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="ColorForm-nameGroup">
					<label htmlFor="name">Color Name</label>
					<input
						name="name"
						id="name"
						placeholder="Enter name of color"
						onChange={handleChange}
						value={name}
						type="text"
					/>
				</div>
				<div className="ColorForm-colorGroup">
					<label htmlFor="name">Select Color</label>
					<input name="hex" id="hex" onChange={handleChange} value={hex} type="color" />
				</div>
				<div className="ColorForm-submit">
					<button type="submit">Add Color</button>
				</div>
			</form>
		</div>
	);
};
export default ColorForm;
