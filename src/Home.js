import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeCard from './HomeCard';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import './Home.css';
import HomeContent from './HomeContent';
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
			<div style={{ float: "left", width: 550 }}>
              <HomeContent />
			  <img src="/media/images/iceland-selfie.jpg" width="200" alt="Iceland Selfie" />
			  <Typography variant="body1" gutterBottom>Akureyri, Iceland, 2017</Typography>
			  <Typography variant="body1" gutterBottom>I got a late start, but I decided a few years ago that I wanted to visit at least one new country per year. I launched this project in December 2014 with my first trip to London, where I stayed for a little over a week. Since then, I've traveled to Reykjavik, Akureyri, Paris, Copenhagen, Austria, and Prague.</Typography>
			  <Typography variant="body1" gutterBottom>I've felt privileged to experience the inside of the Notre Dame cathedral, to join the crowds viewing masterpieces of art at the Louvre or the Musee d'Orse; to climb to the abbey at the top of Mont-St-Michel; to sit in Karlskirche in Vienna and listen to a concert of classical music; to walk among the monuments in the floor of Westminster Abbey; to snowmobile over the largest glacier in Europe; to ride an exciting rollercoaster in Tivoli Gardens...</Typography>
			</div>
		);
	}
}

class Home extends Component {

	render() {
		return (
			<MuiThemeProvider theme={theme}>

            <MediaQuery query="(min-width:481px) and (max-width:4096px)">
			<div style={{ paddingTop: "20px" }}>
              <HomeIntro />

              <div className="grid-wrapper">
                <div className="grid-layout">

       			<HomeCard id="arithmophile">
    			  <p>Some decimal equivalents of fractions are familiar: 1/2 = 0.5, 1/3 = 0.333, &c. Perhaps less familiar is 1/7, which is 0.142857. This one is interesting not merely because it's mentioned in the Newbury award-winning children's book A Wrinkle In Time but because it's reciprocal of the first full-reptend prime.</p><p>The period of such a reciprocal has this interesting characteristic: the sum of the first and second halves is a number made of all 9s. In this case, 142 + 857 = 999.</p><p>I've provided a decimal calculator to further indulge your curiosity.</p>
    			</HomeCard>

       			<HomeCard id="bookshelf">
    			  <p>What books I'm on, and any thoughts I might have so far.</p>
    			</HomeCard>

    			<HomeCard id="quote">
    			  <p>Hill House, not sane, stood alone against its hills ...</p>
    			</HomeCard>

    			<HomeCard id="autodidact">
    			  <p>Recently, I chose to gain some basic geographical knowledge by learning most of the world's countries and capitals. I started with Africa and worked my way through South America, Asia, and Europe. What I accomplished was the ability to identify, on a bordered map, any of the countries in these areas and name its capital.</p>

    			  <p>I also decided to learn each nation's flag.</p>
    			</HomeCard>

    			<HomeCard id="professional" primaryColor="ff3d00" title="Professionally Interesting">
    			  <p>Stuff I'm learning for work. Could be GitHub, npm, the latest JavaScript stuff, database-related, &c.</p>
    			</HomeCard>

       			<HomeCard id="travel">
    			  <p>Perhaps a new word, or some observation about arithmetic.</p>
    			</HomeCard>

                </div>
              </div>

            </div>
<br style={{ clear: "both" }}/>
            </MediaQuery>

            <MediaQuery query="(max-width: 480px)">
            <MobileHome />
            </MediaQuery>

            </MuiThemeProvider>
		)
	}
}

export default Home;
