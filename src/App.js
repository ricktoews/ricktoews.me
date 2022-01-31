import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Switch, Route } from 'react-router-dom';

import Masthead from './Masthead';
import Home from './components/Home';
import GeoGame from './components/GeoGame';
import MakePost from './manage-posts/MakePost';

function withNav(MyComponent, title, showFilter = false) {

	return function(...props) {
		const [ categoryFilter, setCategoryFilter ] = useState();

		return (
		<>
			<Masthead title={title} setCategoryFilter={setCategoryFilter} showFilter={showFilter} />
			<main>
				<MyComponent categoryFilter={categoryFilter} {...props} />
			</main>
		</>
		);
	}
};

function App(props) {
	console.log('Testing deploy (4).');
	const HomeContent = ({ categoryFilter }) => {
		console.log('HomeContent filter', categoryFilter);
		return (
			<Home content={props.content} categoryFilter={categoryFilter} />
		);
	}

	return (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Switch>
			<Route exact path="/" component={withNav(HomeContent, 'RickToews.me', true)} />
			<Route path='/geogame' component={withNav(GeoGame, 'Geography Game')} />
			<Route path='/makepost' render={(props) => <MakePost />} />
		</Switch>
	</ThemeProvider>
	);
}

export default App;
