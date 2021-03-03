import React, { useState } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import SelectSingleColor from './SelectSingleColor';
import ColorList from './ColorList';
import useLocalStorageState from './hooks/useLocalStorage';
import ColorForm from './ColorForm';
const Routes = () => {
	const initialColors = {
		red   : '#FF0000',
		green : '#00FF00',
		blue  : '#0000FF'
	};

	const [ colors, setColors ] = useLocalStorageState('colors', initialColors);

	const handleAddColor = (newColor) => {
		setColors((colors) => ({ ...colors, ...newColor }));
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/colors">
					<ColorList colors={colors} />
				</Route>
				<Route exact path="/colors/new">
					<ColorForm add={handleAddColor} />
				</Route>
				<Route exact path="/colors/:color">
					<SelectSingleColor colors={colors} />
				</Route>
				<Redirect to="/colors" />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
