import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Switch, Route } from 'react-router-dom';

import Masthead from './Masthead';
import Home from './components/Home';
import MakePost from './manage-posts/MakePost';

function withNav(MyComponent, title) {

	return function(...props) {
		const [ categoryFilter, setCategoryFilter ] = useState();

		return (
		<>
			<Masthead title={title} setCategoryFilter={setCategoryFilter} />
			<main>
				<MyComponent categoryFilter={categoryFilter} {...props} />
			</main>
		</>
		);
	}
};

function App(props) {

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
			<Route exact path="/" component={withNav(HomeContent, 'RickToews.me')} />
			<Route path='/makepost' render={(props) => <MakePost />} />
		</Switch>
	</ThemeProvider>
	);
}

export default App;
