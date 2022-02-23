import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Switch, Route } from 'react-router-dom';

import Masthead from './Masthead';
import Home from './components/Home';
import Pythag from './math-toys/components/pythag/Pythag-mobile';
import PythagC from './math-toys/components/pythag/Pythag-C';
import Denom from './math-toys/components/denom/Denom-mobile';
import Calendar from './math-toys/components/calendar/Calendar';
import CalendarPractice from './math-toys/components/calendar/CalendarPractice';
import Mastermind from './math-toys/components/mastermind/AppSolves';
import WordleAppSolves from './math-toys/components/wordle/AppSolves';
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
			<Route path='/denom' component={withNav(Denom, 'Denominators')} />
			<Route path='/pythag' component={withNav(Pythag, 'Pythagorean Toy')} />
			<Route path='/calendar' component={withNav(Calendar, 'Calendar')} />
			<Route path='/mastermind' component={withNav(Mastermind, 'Mastermind')} />
			<Route path='/wordle' component={withNav(WordleAppSolves, 'Wordle')} />
			<Route path='/geogame' component={withNav(GeoGame, 'Geography Game')} />
			<Route path='/makepost' render={(props) => <MakePost />} />
		</Switch>
	</ThemeProvider>
	);
}

export default App;
