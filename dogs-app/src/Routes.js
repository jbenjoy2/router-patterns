import React from 'react';
import DogList from './DogList';
import SelectSingleDog from './SelectSingleDog';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = ({ dogs }) => {
	return (
		<Switch>
			<Route exact path="/dogs">
				<DogList dogs={dogs} />
			</Route>
			<Route exact path="/dogs/:name">
				<SelectSingleDog dogs={dogs} />
			</Route>
			<Redirect to="/dogs" />
		</Switch>
	);
};

export default Routes;
