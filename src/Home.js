import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeCardWrapped from './HomeCard';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import './Home.css';
import MobileHome from './mobile/Home.js';

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
			  <img src="/media/images/iceland-selfie.jpg" width="200" alt="Iceland Selfie" />
			  <Typography variant="body1" gutterBottom>Akureyri, Iceland, 2017</Typography>
			</div>
		);
	}
}

class Home extends Component {

	render() {
		return (
			<MuiThemeProvider theme={theme}>

            <MediaQuery query="(min-width:960px)">
			<div style={{ paddingTop: "20px" }}>
            <HomeIntro />

            <div className="grid-wrapper">
            <div className="grid-layout">

   			<HomeCardWrapped id="arithmophile">
			  <p>Some decimal equivalents of fractions are familiar: 1/2 = 0.5, 1/3 = 0.333, &c. Perhaps less familiar is 1/7, which is 0.142857. This one is interesting not merely because it's mentioned in the Newbury award-winning children's book A Wrinkle In Time but because it's reciprocal of the first full-reptend prime.</p><p>The period of such a reciprocal has this interesting characteristic: the sum of the first and second halves is a number made of all 9s. In this case, 142 + 857 = 999.</p><p>I've provided a decimal calculator to further indulge your curiosity.</p>
			</HomeCardWrapped>

   			<HomeCardWrapped id="bookshelf">
			  <p>What books I'm on, and any thoughts I might have so far.</p>
			</HomeCardWrapped>

			<HomeCardWrapped id="quote">
			  <p>Hill House, not sane, stood alone against its hills ...</p>
			</HomeCardWrapped>

			<HomeCardWrapped id="autodidact">
			  <p>Recently, I chose to gain some basic geographical knowledge by learning most of the world's countries and capitals. I started with Africa and worked my way through South America, Asia, and Europe. What I accomplished was the ability to identify, on a bordered map, any of the countries in these areas and name its capital.</p>

			  <p>I also decided to learn each nation's flag.</p>
			</HomeCardWrapped>

			<HomeCardWrapped id="professional" primaryColor="ff3d00" title="Professionally Interesting">
			  <p>Stuff I'm learning for work. Could be GitHub, npm, the latest JavaScript stuff, database-related, &c.</p>
			</HomeCardWrapped>

   			<HomeCardWrapped id="travel">
			  <p>Perhaps a new word, or some observation about arithmetic.</p>
			</HomeCardWrapped>

            </div>
            </div>

            </div>
            </MediaQuery>

            <MediaQuery query="(max-width: 980px)">
            <MobileHome />
            </MediaQuery>

            </MuiThemeProvider>
		)
	}
}

export default Home;
