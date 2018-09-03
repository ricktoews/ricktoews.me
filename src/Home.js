import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeCardWrapped from './HomeCard';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import lightGreen from '@material-ui/core/colors/lightGreen';
import './Home.css';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: green
	},
});

class HomeIntro extends Component {
	render() {
		return (
			<div style={{ float: "left" }}>
			  <img src="/media/images/iceland-selfie.jpg" width="200" />
			  <Typography variant="body1" gutterBottom>Akureyri, Iceland, 2017</Typography>
			</div>
		);
	}
}

class Home extends Component {

	render() {
		return (
			<MuiThemeProvider theme={theme}>

            <HomeIntro />

            <div className="grid-wrapper">
            <div className="grid-layout">
			<HomeCardWrapped primaryColor="76ff03" title="Eye-Catching Quote">
			  <p>Hill House, not sane, stood alone against its hills ...</p>
			</HomeCardWrapped>

			<HomeCardWrapped primaryColor="d500f9" title="Lifelong Autodidact">
			  <p>Recently, I chose to gain some basic geographical knowledge by learning most of the world's countries and capitals. I started with Africa and worked my way through South America, Asia, and Europe. What I accomplished was the ability to identify, on a bordered map, any of the countries in these areas and name its capital.</p>

			  <p>I also decided to learn each nation's flag.</p>
			</HomeCardWrapped>

			<HomeCardWrapped primaryColor="ff3d00" title="Professionally Interesting">
			  <p>Stuff I'm learning for work. Could be GitHub, npm, the latest JavaScript stuff, database-related, &c.</p>
			</HomeCardWrapped>

   			<HomeCardWrapped primaryColor="3f51b5" title="Generally Cool">
			  <p>Perhaps a new word, or some observation about <Link to={`/decimal`} activeClassName="active">arithmetic</Link>.</p>
			</HomeCardWrapped>

   			<HomeCardWrapped primaryColor="e91e63" title="Currently Reading">
			  <p>What books I'm on, and any thoughts I might have so far.</p>
			</HomeCardWrapped>
            </div>
            </div>

            </MuiThemeProvider>
		)
	}
}

export default Home;
